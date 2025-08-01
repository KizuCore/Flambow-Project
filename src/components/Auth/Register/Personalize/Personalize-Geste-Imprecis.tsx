import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import circleTopRight from '../../../../assets/images/deco/circle/circle-top-right.svg';
import ArrowLeft from '../../../../assets/images/icons/arrow/arrow-left.svg';

export default function PersonalizationGestesImprecis() {
    const navigate = useNavigate();
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    // État local pour stocker la taille de police sélectionnée
    const pathologyOrder = [
        { id: 'dyslexie', path: '/personalize-dyslexie' },
        { id: 'daltonisme', path: '/personalize-daltonisme' },
        { id: 'vision', path: '/personalize-vision-reduite' },
        { id: 'gestes', path: '/personalize-gestes-imprecis' },
    ];

    // Action bouton retour
    const handleBack = () => navigate('/personalize');

    // Action bouton "ÉTAPE SUIVANTE"
    const handleNext = () => {
        // Si aucune taille de police n’est sélectionnée, on ne fait rien
        // Récupération des pathologies sélectionnées par l'utilisateur
        const stored = localStorage.getItem('accessibilitySelections');
        if (!stored) return navigate('/register-finish'); // Aucune sélection : renvoie page register-finish

        const selections: string[] = JSON.parse(stored);
        const currentId = 'gestes'; // ID étape actuelle

        // Index étape actuelle dans l'ordre défini
        const currentIndex = pathologyOrder.findIndex((step) => step.id === currentId);

        // Liste des prochaines étapes potentielles
        const nextSteps = pathologyOrder.slice(currentIndex + 1);

        // Recherche de la prochaine pathologie sélectionnée
        const next = nextSteps.find((step) => selections.includes(step.id));

        // Redirection vers l'étape suivante ou vers la fin de personnalisation
        if (next) {
            navigate(next.path);
        } else {
            navigate('/choose-area');
        }
    };

    const options = [
        { id: 'buttons', label: 'Augmentation\nde la taille des boutons' },
        { id: 'spacing', label: 'Augmentation des espaces' },
    ];

    const toggleOption = (id: string) => {
        setSelectedOptions((prev) =>
            prev.includes(id) ? prev.filter((o) => o !== id) : [...prev, id]
        );
    };
    return (
        <div className="min-h-screen flex flex-col justify-between bg-white relative px-6 pt-20 pb-6">
            {/* Flèche retour */}
            <img
                src={ArrowLeft}
                onClick={handleBack}
                alt="Retour"
                className="absolute top-5 left-6 w-10 cursor-pointer"
            />

            {/* Décoration en haut à droite */}
            <img src={circleTopRight} alt="" className="absolute top-0 right-0 w-32 md:w-40 lg:w-[24rem]" />

            {/* Contenu principal */}
            <div className="relative z-10 w-full max-w-md mx-auto flex flex-col items-center text-center">
                {/* Titre */}
                <h1 className="text-[40px] leading-[100%] font-bold text-[#1B1725] font-bricolage mb-[2rem]">
                    Paramétrage<br />pour les<br />gestes imprécis
                </h1>

                {/* Description */}
                <p className="font-sofia text-[#787FDC] text-[16px] leading-[1.2] font-normal mb-5 pb-[1rem]">
                    Afin de faciliter vos interactions avec<br />l’application, nous vous proposons d’augmenter<br />l’espacement et la taille des boutons de notre<br />application ( Pour laisser les paramètres par<br />défaut, passez à l’étape suivante) :
                </p>
                {/* Options cliquables */}
                <div className="flex flex-col gap-4 w-full px-4 mb-10">
                    {options.map(({ id, label }) => (
                        <div
                            key={id}
                            onClick={() => toggleOption(id)}
                            className={`whitespace-pre-line cursor-pointer py-4 px-6 rounded-2xl font-sofia text-[#1B1725] text-sm text-center transition bg-[#E5EBFF]
                                ${selectedOptions.includes(id)
                                    ? ' border-2 border-[#787FDC]'
                                    : 'border-2 border-transparent'
                                }`}
                        >
                            {label}
                        </div>
                    ))}
                </div>

                {/* Bouton "ÉTAPE SUIVANTE" */}
                <div className="w-full px-6 mt-12">
                    <button
                        onClick={handleNext}
                        className={`w-full font-newake text-sm tracking-widest uppercase py-3 rounded-3xl transition bg-[#787FDC] text-white hover:bg-[#E5EBFF]'}`}
                    >
                        ÉTAPE SUIVANTE
                    </button>
                </div>
            </div>
        </div>
    );
}
