import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import circleTopRight from '../../../../assets/images/deco/circle/circle-top-right.svg';
import ArrowLeft from '../../../../assets/images/icons/arrow/arrow-left.svg';

export default function PersonalizationDyslexie() {
    const navigate = useNavigate();
    const [selectedFont, setSelectedFont] = useState<'comfortaa' | 'opendyslexic' | null>(null);
    const pathologyOrder = [
        { id: 'dyslexie', path: '/personalize-dyslexie' },
        { id: 'daltonisme', path: '/personalize-daltonisme' },
        { id: 'vision', path: '/personalize-vision-reduite' },
        { id: 'gestes', path: '/personalize-gestes-imprecis' },
    ];

    // Logique pour passer à l'étape suivante selon l'ordre défini
    const handleNext = () => {
        // Si aucune police n’est sélectionnée, on ne fait rien
        if (!selectedFont) return;
        // Récupération des pathologies sélectionnées par l'utilisateur
        const stored = localStorage.getItem('accessibilitySelections');
        if (!stored) return navigate('/register-finish'); // Aucune sélection : renvoie page register-finish

        const selections: string[] = JSON.parse(stored);
        const currentId = 'dyslexie'; // ID étape actuelle

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
            navigate('/register-finish');
        }
    };

    // Redirection vers la page de sélection initiale
    const handleBack = () => {
        navigate('/personalize-experience');
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

            {/* Cercle haut */}
            <img src={circleTopRight} alt="" className="absolute top-0 right-0 w-32 md:w-40 lg:w-[24rem]" />

            {/* Contenu principal */}
            <div className="relative z-10 w-full max-w-md mx-auto flex flex-col items-center text-center">
                <h1 className="text-[32px] leading-[110%] font-bold text-[#1B1725] font-bricolage mb-6">
                    Paramétrage<br />pour la dyslexie
                </h1>
                <p className="font-sofia text-[#787FDC] text-[15px] leading-6 text-center font-normal mb-10">
                    Nous vous proposons de changer la police<br />
                    d’écriture afin de fluidifier votre expérience sur<br />
                    notre site. Choisissez la police favorite ci-dessous :
                </p>

                {/* Choix de police */}
                <div className="flex flex-col gap-4 w-full">
                    <div
                        onClick={() => setSelectedFont('comfortaa')}
                        className={`cursor-pointer px-4 py-4 rounded-2xl bg-[#F3F5FF] text-center transition border-2 ${selectedFont === 'comfortaa' ? 'border-[#787FDC]' : 'border-transparent'}`}
                    >
                        <h3 className="font-comfortaa text-[#1B1725] mb-2">Comfortaa</h3>
                        <p className="font-comfortaa text-sm text-[#1B1725]">
                            Cette police est utilisée par défaut sur<br /> notre application
                        </p>
                    </div>

                    <div
                        onClick={() => setSelectedFont('opendyslexic')}
                        className={`cursor-pointer px-4 py-4 rounded-2xl bg-[#F3F5FF] text-center transition border-2 ${selectedFont === 'opendyslexic' ? 'border-[#787FDC]' : 'border-transparent'}`}
                    >
                        <h3 className="text-base text-[#1B1725] font-opendyslexic mb-2">Open dyslexic</h3>
                        <p className="font-opendyslexic text-sm text-[#1B1725]">
                            Cette police favorise la lecture aux personnes souffrant de dyslexie
                        </p>
                    </div>
                </div>

                <button
                    type="button"
                    onClick={handleNext}
                    disabled={!selectedFont}
                    className={`w-full mt-10 bg-[#787FDC] text-white font-newake text-sm tracking-widest uppercase py-3 rounded-3xl transition ${!selectedFont ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#E5EBFF]'}`}
                >
                    ÉTAPE SUIVANTE
                </button>
            </div>
        </div>
    );
}
