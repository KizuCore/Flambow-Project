import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import AsyncSelect from 'react-select/async';
import { components } from 'react-select';

import circleTopRight from '../../../assets/images/deco/circle/circle-top-right.svg';
import ArrowLeft from '../../../assets/images/icons/arrow/arrow-left.svg';
import DeleteIcon from '../../../assets/images/icons/selection/delete.svg';
import AddIcon from '../../../assets/images/icons/selection/add.svg';

export default function RegisterGeoPage() {
    const navigate = useNavigate();
    const [cities, setCities] = useState<string[]>(['']);
    /* Action bouton retour */
    const handleBack = () => navigate('/personalize');
    /* Action bouton "ÉTAPE SUIVANTE" */
    const handleNext = () => navigate('/register-activities');
    /* Fonction pour ajouter une ville */
    const addCity = () => setCities(prev => [...prev, '']);
    /* Fonction pour mettre à jour une ville */
    const updateCity = (index: number, value: string) => {
        const updated = [...cities];
        updated[index] = value;
        setCities(updated);
    };
    /* Fonction pour supprimer une ville */
    const removeCity = (index: number) => {
        setCities(prev => prev.filter((_, i) => i !== index));
    };
    /* * Fonction pour charger les options de ville */
    // Utilise l'API GeoGouv pour récupérer les villes basées sur l'entrée
    const loadCityOptions = async (inputValue: string, index: number) => {
        if (!inputValue || inputValue.length < 2) return [];

        const res = await fetch(`https://geo.api.gouv.fr/communes?nom=${inputValue}&boost=population&limit=10`);
        const data = await res.json();

        return data
            .filter((commune: any) => {
                const code = `${commune.nom}`;
                return !cities.includes(code) || cities[index] === code;
            })
            .map((commune: any) => ({
                value: `${commune.nom}`,
                label: `${commune.nom}`,
            }));
    };
    /* Composant pour chaque sélection de ville */
    const CitySelect = ({ city, index }: { city: string; index: number }) => {
        return (
            <div className="flex items-center gap-3">
                <div className="flex-1">
                    <AsyncSelect
                        cacheOptions
                        defaultOptions
                        loadOptions={(input) => loadCityOptions(input, index)}
                        value={city ? { value: city, label: city } : null}
                        onChange={(selected) => updateCity(index, selected?.value || '')}
                        placeholder="Marquez votre ville"
                        isSearchable
                        noOptionsMessage={({ inputValue }) =>
                            !inputValue || inputValue.length < 2
                                ? 'Commencez à taper le nom de votre ville'
                                : 'Aucune ville trouvée, essayez un autre nom'
                        }
                        components={{
                            DropdownIndicator: (props) => (
                                <components.DropdownIndicator {...props}>
                                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                                        <path
                                            d="M1 1L6 6L11 1"
                                            stroke="#787FDC"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </components.DropdownIndicator>
                            ),
                            IndicatorSeparator: () => null,
                        }}
                        styles={{
                            control: (base) => ({
                                ...base,
                                borderRadius: '1.5rem',
                                border: '2px solid #787FDC',
                                backgroundColor: '#E5EBFF',
                                padding: '0.25rem 0.75rem',
                                minHeight: '3rem',
                                fontSize: '0.875rem',
                                textAlign: 'left',
                                boxShadow: 'none',
                            }),
                            placeholder: (base) => ({
                                ...base,
                                color: '#787FDC',
                            }),
                            singleValue: (base) => ({
                                ...base,
                                color: '#1B1725',
                            }),
                            option: (base, state) => ({
                                ...base,
                                borderRadius: '1rem',
                                backgroundColor: state.isSelected
                                    ? '#FFFFFF'
                                    : state.isFocused
                                        ? '#FFFFFF'
                                        : '#E5EBFF',
                                color: '#1B1725',
                                cursor: 'pointer',
                                margin: '0.25rem 0',
                            }),
                            menu: (base) => ({
                                ...base,
                                borderRadius: '1.5rem',
                                border: '2px solid #787FDC',
                                padding: '10px',
                                backgroundColor: '#E5EBFF',
                                zIndex: 50,
                            }),
                            noOptionsMessage: (base) => ({
                                ...base,
                                fontSize: '0.85rem',        // Environ 14px à voir sur pc
                                color: '#787FDC',
                                textAlign: 'center',
                            }),
                        }}
                    />
                </div>
                {index > 0 && (
                    <button
                        aria-label={`Supprimer ${city}`}
                        onClick={() => removeCity(index)}
                        className="w-8 h-8 flex items-center justify-center bg-[#787FDC] rounded-full"
                    >
                        <img src={DeleteIcon} alt="Supprimer" className="w-3" />
                    </button>
                )}
            </div>
        );
    };

    return (
        <div className="min-h-screen flex flex-col justify-between bg-white relative pt-20">
            <img src={ArrowLeft} onClick={handleBack} alt="Retour" className="absolute top-5 left-6 w-10 cursor-pointer" />
            <img src={circleTopRight} alt="" className="absolute top-0 right-0 w-32 md:w-40 lg:w-[24rem]" />

            <div className="relative z-10 w-full max-w-md mx-auto flex flex-col text-center px-6">
                <h1 className="text-[32px] leading-[110%] font-bold text-[#1B1725] font-bricolage mb-6">
                    Votre secteur<br />géographique
                </h1>
                <p className="font-sofia text-[#787FDC] text-[15px] leading-[1.2] font-normal mb-6">
                    Afin de vous recommander des annonces au<br />
                    plus proche de chez-vous, merci de nous<br />
                    indiquer où vous habitez :
                </p>
            </div>

            <div className="relative z-10 w-full max-w-md mx-auto flex flex-col text-center px-6 h-[calc(100vh-6rem)] overflow-y-auto pb-28">
                <div className="w-full flex flex-col gap-4 mb-4">
                    {cities.map((city, index) => (
                        <CitySelect key={index} city={city} index={index} />
                    ))}
                </div>

                <button
                    onClick={addCity}
                    className="w-full flex items-center justify-center gap-3 border border-[#787FDC] text-[#787FDC] rounded-2xl px-4 py-3 font-bold text-sm font-sofia uppercase"
                >
                    <img src={AddIcon} alt="Ajouter" className="w-4 h-4" />
                    AJOUTER UNE AUTRE VILLE
                </button>
            </div>

            <div className="fixed bottom-0 left-0 w-full px-6 pb-6 z-20 md:static md:px-0 md:pb-10 pt-4">
                <div className="max-w-md mx-auto">
                    <button
                        onClick={handleNext}
                        disabled={cities.some((c) => !c)}
                        className={`w-full font-newake text-sm tracking-widest uppercase py-4 rounded-3xl transition ${cities.some((c) => !c)
                            ? 'bg-[#C4C4C4] text-white cursor-not-allowed'
                            : 'bg-[#787FDC] text-white hover:bg-[#E5EBFF]'
                            }`}
                    >
                        ÉTAPE SUIVANTE
                    </button>
                </div>
            </div>
        </div>
    );
}
