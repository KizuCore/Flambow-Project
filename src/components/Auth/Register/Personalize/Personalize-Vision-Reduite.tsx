import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import circleTopRight from '../../../../assets/images/deco/circle/circle-top-right.svg';
import ArrowLeft from '../../../../assets/images/icons/arrow/arrow-left.svg';

export default function PersonalizationVisionReduite() {
    const navigate = useNavigate();

    // État local pour stocker la taille de police sélectionnée
    const [selectedVizion, setSelectedVizion] = useState<'16' | '18' | '20' | null>(null);
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
        if (!selectedVizion) return;
        // Récupération des pathologies sélectionnées par l'utilisateur
        const stored = localStorage.getItem('accessibilitySelections');
        if (!stored) return navigate('/register-finish'); // Aucune sélection : renvoie page register-finish

        const selections: string[] = JSON.parse(stored);
        const currentId = 'vision'; // ID étape actuelle

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

    // Liste des tailles de texte disponibles
    const options = [
        { id: '16', label: '16px', textSize: 'text-[16px]' },
        { id: '18', label: '18px', textSize: 'text-[18px]' },
        { id: '20', label: '20px', textSize: 'text-[20px]' },
    ] as const;

    // Style commun pour les cartes de sélection
    const baseCardStyle = "cursor-pointer px-4 py-4 rounded-2xl bg-[#F3F5FF] text-center transition border-2";

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
                    Paramétrage<br />pour la<br />vision réduite
                </h1>

                {/* Description */}
                <p className="font-sofia text-[#787FDC] text-[16px] leading-[18px] font-normal mb-5 pb-[1rem]">
                    Nous vous proposons de changer la taille des<br />
                    polices afin de faciliter votre lecture. Choisissez<br />
                    la taille de police préférée ci-dessous :
                </p>

                {/* Choix de taille de police */}
                <div className="flex flex-col gap-4 w-full px-6">
                    {options.map(({ id, textSize }) => (
                        <div
                            key={id}
                            onClick={() => setSelectedVizion(id)}
                            className={`${baseCardStyle} ${selectedVizion === id ? 'border-[#787FDC]' : 'border-transparent'}`}
                        >
                            <p className={`font-sofia text-[#1B1725] ${textSize}`}>
                                Aa<br /><br />
                                Cette taille de police est utilisée<br />
                                par défaut sur notre application
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bouton "ÉTAPE SUIVANTE" */}
                <div className="w-full px-6 mt-12">
                    <button
                        onClick={handleNext}
                        disabled={!selectedVizion}
                        className={`w-full font-newake text-sm tracking-widest uppercase py-3 rounded-3xl transition ${!selectedVizion
                            ? 'bg-gray-300 text-white cursor-not-allowed'
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
