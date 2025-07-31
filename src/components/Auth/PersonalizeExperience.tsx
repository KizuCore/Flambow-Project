import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import circleTopRight from '../../assets/images/deco/circle/circle-top-right.svg';

export default function PersonalizationPage() {
    const navigate = useNavigate();
    const [selections, setSelections] = useState<string[]>([]);

    const pathologyOrder = [
        { id: 'dyslexie', path: '/personalize-dyslexie' },
        { id: 'daltonisme', path: '/personalize-daltonisme' },
        { id: 'vision', path: '/personalize-vision-reduite' },
        { id: 'gestes', path: '/personalize-gestes-imprecis' },
    ];

    const toggleSelection = (value: string) => {
        setSelections((prev) =>
            prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
        );
    };

    const isSelected = (value: string) => selections.includes(value);

    const goToNextStep = (selections: string[]) => {
        // Filtre dans l’ordre les pathologies sélectionnées
        for (const step of pathologyOrder) {
            if (selections.includes(step.id)) {
                navigate(step.path);
                return;
            }
        }
        navigate('/register-finish');
    };


    const handleNext = () => {
        localStorage.setItem('accessibilitySelections', JSON.stringify(selections));
        goToNextStep(selections);
    };

    return (
        <div className="min-h-screen flex flex-col justify-between bg-white relative px-6 pt-20 pb-6">
            {/* Cercle haut */}
            <img src={circleTopRight} alt="" className="absolute top-0 right-0 w-32 md:w-40 lg:w-[24rem]" />

            {/* Contenu */}
            <div className="relative z-10 w-full max-w-md mx-auto flex flex-col items-center text-center">
                <h1 className="text-[32px] leading-[110%] font-bold text-[#1B1725] font-bricolage mb-6">
                    Personnalisons<br />votre expérience
                </h1>
                <p className="font-sofia text-[#787FDC] text-[15px] leading-6 font-normal mb-10">
                    Renseignez d'éventuelles pathologies afin que<br />
                    nous puissions paramétrer l'application à vos<br />
                    besoins en accessibilité
                </p>

                <div className="grid grid-cols-2 gap-4 mb-10">
                    {[
                        { id: 'dyslexie', label: 'Dyslexie', icon: 'dyslexie' },
                        { id: 'daltonisme', label: 'Daltonisme', icon: 'daltonisme' },
                        { id: 'vision', label: 'Vision réduite', icon: 'vision-reduite' },
                        { id: 'gestes', label: 'Gestes imprécis', icon: 'gestes-imprecis' },
                    ].map((item) => (
                        <div
                            key={item.id}
                            onClick={() => toggleSelection(item.id)}
                            className={`flex flex-col items-center justify-center p-6 rounded-2xl cursor-pointer transition-all bg-[#E5EBFF]
                ${isSelected(item.id) ? 'border-2 border-[#787FDC]' : 'border-2 border-transparent'}
                hover:bg-[#D1D9FF]`}
                        >
                            <img
                                src={`/src/assets/images/icons/personalize/${item.icon}.svg`}
                                alt={item.label}
                                className="w-10 h-10 mb-2"
                            />
                            <span className="font-sofia text-sm">{item.label}</span>
                        </div>
                    ))}
                </div>

                <button
                    onClick={handleNext}
                    className={`w-full bg-[#787FDC] text-white font-newake text-sm tracking-widest uppercase py-3 rounded-3xl transition hover:bg-[#E5EBFF]`}
                >
                    ÉTAPE SUIVANTE
                </button>
            </div>
        </div>
    );
}
