import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import circleTopRight from '../../../../assets/images/deco/circle/circle-top-right.svg';
import ArrowLeft from '../../../../assets/images/icons/arrow/arrow-left.svg';
import paletteDefaut from '../../../../assets/images/icons/palette/palette-defaut.svg';
import paletteNoire from '../../../../assets/images/icons/palette/palette-noire.svg';

export default function PersonalizationDaltonisme() {
    const navigate = useNavigate();
    const [selection, setSelection] = useState<string | null>(null);

    // Images
    const iconMap: Record<string, string> = {
        'palette-defaut': paletteDefaut,
        'palette-noire': paletteNoire,
    };

    const pathologyOrder = [
        { id: 'dyslexie', path: '/personalize-dyslexie' },
        { id: 'daltonisme', path: '/personalize-daltonisme' },
        { id: 'vision', path: '/personalize-vision-reduite' },
        { id: 'gestes', path: '/personalize-gestes-imprecis' },
    ];

    const handleNext = () => {
        const stored = localStorage.getItem('accessibilitySelections');
        if (!stored) return navigate('/register-finish');

        const selections: string[] = JSON.parse(stored);
        const currentId = 'daltonisme';
        const currentIndex = pathologyOrder.findIndex((step) => step.id === currentId);
        const nextSteps = pathologyOrder.slice(currentIndex + 1);
        const next = nextSteps.find((step) => selections.includes(step.id));

        navigate(next ? next.path : '/choose-area');
    };

    const handleBack = () => {
        navigate('/personalize');
    };

    const isSelected = (value: string) => selection === value;
    const handleSelection = (value: string) => setSelection(value);

    const options = [
        { id: 'bricolage', label: 'Palette par défaut', icon: 'palette-defaut' },
        { id: 'cuisine', label: 'Palette noire constrastée', icon: 'palette-noire' },
    ];

    return (
        <div className="min-h-screen flex flex-col justify-between bg-white relative px-6 pt-20 pb-6">
            {/* Flèche retour */}
            <img
                src={ArrowLeft}
                onClick={handleBack}
                alt="Retour"
                className="absolute top-5 left-6 w-10 cursor-pointer"
            />

            {/* Décoration */}
            <img src={circleTopRight} alt="" className="absolute top-0 right-0 w-32 md:w-40 lg:w-[24rem]" />

            <div className="relative z-10 w-full max-w-md mx-auto flex flex-col items-center text-center">
                {/* Titre */}
                <h1 className="text-[40px] leading-[100%] font-bold text-[#1B1725] font-bricolage mb-[2rem]">
                    Paramétrage<br />pour le daltonisme
                </h1>

                {/* Description */}
                <p className="font-sofia text-[#787FDC] text-[16px] leading-[1.2] text-center font-normal mb-5 pb-[3rem]">
                    Nous vous proposons de changer la palette de<br />
                    couleurs de l’application afin de fluidifier votre<br />
                    expérience sur notre site. Choisissez la palette<br />
                    préférée ci-dessous :
                </p>

                {/* Cartes de sélection */}
                <div className="grid grid-cols-2 gap-4 mb-10">
                    {options.map(({ id, label, icon }) => (
                        <div
                            key={id}
                            onClick={() => handleSelection(id)}
                            className={`flex flex-col items-center justify-center p-6 rounded-2xl cursor-pointer transition-all bg-[#E5EBFF]
                                ${isSelected(id) ? 'border-2 border-[#787FDC]' : 'border-2 border-transparent'}
                                hover:bg-[#D1D9FF]`}
                        >
                            <img
                                src={iconMap[icon]}
                                alt={label}
                                className="w-10 h-10 mb-2"
                            />
                            <span className="font-sofia text-sm">{label}</span>
                        </div>
                    ))}
                </div>

                {/* Bouton étape suivante */}
                <div className="w-full px-6">
                    <button
                        onClick={handleNext}
                        disabled={!selection}
                        className={`w-full text-white font-newake text-sm tracking-widest uppercase py-3 rounded-3xl transition
                            ${!selection ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#787FDC] hover:bg-[#E5EBFF]'}`}
                    >
                        ÉTAPE SUIVANTE
                    </button>
                </div>
            </div>
        </div>
    );
}
