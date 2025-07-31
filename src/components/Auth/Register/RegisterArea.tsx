import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Select from 'react-select';
import { components } from 'react-select';

import circleTopRight from '../../../assets/images/deco/circle/circle-top-right.svg';
import ArrowLeft from '../../../assets/images/icons/arrow/arrow-left.svg';
import DeleteIcon from '../../../assets/images/icons/selection/delete.svg';
import AddIcon from '../../../assets/images/icons/selection/add.svg';
import '../../../assets/styles/Auth/auth.css';

// Liste fixe des villes proposées
const availableCities = ['paris', 'lyon', 'marseille'];

export default function RegisterGeoPage() {
    const navigate = useNavigate();
    const [cities, setCities] = useState<string[]>(['']); // Liste des villes sélectionnées (au départ 1 champ vide)

    const handleBack = () => navigate('/personalize');
    const handleNext = () => navigate('/register-activities');

    // Ajoute un champ vide pour une nouvelle ville
    const addCity = () => setCities((prev) => [...prev, '']);

    // Met à jour la ville sélectionnée à un index donné
    const updateCity = (index: number, value: string) => {
        const updated = [...cities];
        updated[index] = value;
        setCities(updated);
    };

    // Supprime une ville à un index donné
    const removeCity = (index: number) => {
        setCities((prev) => prev.filter((_, i) => i !== index));
    };

    // Composant individuel de sélection de ville
    const CitySelect = ({ city, index }: { city: string; index: number }) => {
        // Garde uniquement les villes non sélectionnées ailleurs (ou la ville actuelle)
        const cityOptions = availableCities
            .filter((ville) => {
                const isUsedElsewhere = cities.some((v, i) => v === ville && i !== index);
                return !isUsedElsewhere || ville === city;
            })
            .map((ville) => ({
                value: ville,
                label: ville.charAt(0).toUpperCase() + ville.slice(1),
            }));

        return (
            <div className="flex items-center gap-3">
                <div className="flex-1">
                    <Select
                        value={city ? { value: city, label: city.charAt(0).toUpperCase() + city.slice(1) } : null}
                        onChange={(selected) => updateCity(index, selected?.value || '')}
                        options={cityOptions}
                        components={{
                            DropdownIndicator: (props) => ( /* Chevron down icone */
                                <components.DropdownIndicator {...props}>
                                    <svg
                                        width="12"
                                        height="8"
                                        viewBox="0 0 12 8"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
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
                            IndicatorSeparator: () => null, // supprimer la barre
                        }}

                        placeholder="Ville ou code postal"
                        isSearchable={false}
                        styles={{
                            control: (base) => ({
                                ...base,
                                borderRadius: '1.5rem',
                                textAlign: 'left',
                                border: '2px solid #787FDC',
                                boxShadow: 'none',
                                backgroundColor: '#E5EBFF',
                                padding: '0.25rem 0.75rem',
                                minHeight: '3rem',
                                fontSize: '0.875rem',
                            }),
                            placeholder: (base) => ({
                                ...base,
                                color: '#787FDC',
                            }),
                            /* Texte ville */
                            singleValue: (base) => ({
                                ...base,
                                color: '#1B1725',
                            }),
                            option: (base, state) => ({
                                ...base,
                                borderRadius: '1rem',
                                backgroundColor: state.isSelected
                                    ? '#FFFFFF'       // 'option sélectionnée : fond blanc
                                    : state.isFocused
                                        ? '#FFFFFF'   // survole l'option : fond blanc
                                        : '#E5EBFF',  // défaut : fond bleu pâle
                                color: state.isSelected ? '#000000' : '#1B1725', // texte noir si sélectionné, sinon violet foncé
                                cursor: 'pointer',
                                margin: '0.25rem 0',
                            }),

                            menu: (base) => ({
                                ...base,
                                borderRadius: '1.5rem',
                                border: '2px solid #787FDC',
                                padding: "10px",
                                backgroundColor: '#E5EBFF',
                                zIndex: 50,
                                textAlign: 'left',
                            }),
                        }}
                    />
                </div>

                {/* Bouton pour supprimer une ville (pas sur le premier champ) */}
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
            {/* Flèche de retour */}
            <img
                src={ArrowLeft}
                onClick={handleBack}
                alt="Retour"
                className="absolute top-5 left-6 w-10 cursor-pointer"
            />

            {/* Décoration cercle en haut à droite */}
            <img src={circleTopRight} alt="" className="absolute top-0 right-0 w-32 md:w-40 lg:w-[24rem]" />

            {/* Contenu principal */}
            <div className="relative z-10 w-full max-w-md mx-auto flex flex-col items-center text-center px-6">
                <h1 className="text-[32px] leading-[110%] font-bold text-[#1B1725] font-bricolage mb-6">
                    Votre secteur<br />géographique
                </h1>
                <p className="font-sofia text-[#787FDC] text-[15px] leading-6 font-normal mb-10">
                    Afin de vous recommander des annonces au<br />
                    plus proche de chez-vous, merci de nous<br />
                    indiquer où vous habitez :
                </p>

                {/* Liste des champs de ville */}
                <div className="w-full flex flex-col gap-4 mb-4">
                    {cities.map((city, index) => (
                        <CitySelect key={index} city={city} index={index} />
                    ))}
                </div>

                {/* Bouton pour ajouter une ville */}
                <button
                    onClick={addCity}
                    className="w-full flex items-center justify-center gap-3 border border-[#787FDC] text-[#787FDC] rounded-2xl px-4 py-3 font-bold text-sm font-sofia uppercase"
                >
                    <img src={AddIcon} alt="Ajouter" className="w-4 h-4" />
                    AJOUTER UNE AUTRE VILLE
                </button>
            </div>

            {/* Bouton étape suivante */}
            <div className="fixed bottom-0 left-0 w-full px-6 pb-20 bg-white z-20 md:static md:px-0 md:pb-10 pt-4">
                <button
                    onClick={handleNext}
                    disabled={cities.some((c) => !c)} // Désactivé si une ville est vide
                    className={`w-full font-newake text-sm tracking-widest uppercase py-4 rounded-3xl transition ${cities.some((c) => !c)
                        ? 'bg-[#C4C4C4] text-white cursor-not-allowed'
                        : 'bg-[#787FDC] text-white hover:bg-[#E5EBFF]'
                        }`}
                >
                    ÉTAPE SUIVANTE
                </button>
            </div>
        </div>
    );
}
