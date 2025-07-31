import { useNavigate } from 'react-router-dom';
import circleTopRight from '../../../../assets/images/deco/circle/circle-top-right.svg';
import ArrowLeft from '../../../../assets/images/icons/arrow/arrow-left.svg';
import { useState } from 'react';

export default function PersonalizationDaltonisme() {
    const navigate = useNavigate();
    const [selection, setSelection] = useState<string | null>(null);



    // Liste pathologies et routes associées
    const pathologyOrder = [
        { id: 'dyslexie', path: '/personalize-dyslexie' },
        { id: 'daltonisme', path: '/personalize-daltonisme' },
        { id: 'vision', path: '/personalize-vision-reduite' },
        { id: 'gestes', path: '/personalize-gestes-imprecis' },
    ];

    // Logique pour passer à l'étape suivante selon l'ordre défini
    const handleNext = () => {
        // Récupération des pathologies sélectionnées par l'utilisateur
        const stored = localStorage.getItem('accessibilitySelections');
        if (!stored) return navigate('/register-finish'); // Aucune sélection : renvoie page register-finish

        const selections: string[] = JSON.parse(stored);
        const currentId = 'daltonisme'; // ID étape actuelle

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

    // Redirection vers la page de sélection initiale
    const handleBack = () => {
        navigate('/personalize');
    };

    const isSelected = (value: string) => selection === value;


    const handleSelection = (value: string) => {
        setSelection(value);
    };

    return (
        <div className="min-h-screen flex flex-col justify-between bg-white relative px-6 pt-20 pb-6">
            <img
                src={ArrowLeft}
                onClick={handleBack}
                alt=""
                className="absolute top-5 left-6 w-10 cursor-pointer"
            />

            <img src={circleTopRight} alt="" className="absolute top-0 right-0 w-32 md:w-40 lg:w-[24rem]" />

            <div className="relative z-10 w-full max-w-md mx-auto flex flex-col items-center text-center">
                <h1 className="text-[40px] leading-[100%] font-bold text-[#1B1725] font-bricolage mb-[2rem]">
                    Paramétrage<br />pour le daltonisme
                </h1>
                <p className="font-sofia text-[#787FDC] text-[16px] leading-[18px] text-center font-normal mb-5 pb-[3rem]">
                    Nous vous proposons de changer la palette de<br />
                    couleurs de l’application afin de fluidifier votre<br />
                    expérience sur notre site. Choisissez la palette<br />
                    préférée ci-dessous :
                </p>
                <div className="grid grid-cols-2 gap-4 mb-10">
                    {[
                        { id: 'bricolage', label: 'Palette par défaut', icon: 'palette-defaut' },
                        { id: 'cuisine', label: 'Palette noire constrastée', icon: 'palette-noire' },
                    ].map((item) => (
                        <div
                            key={item.id}
                            onClick={() => handleSelection(item.id)}
                            className={`flex flex-col items-center justify-center p-6 rounded-2xl cursor-pointer transition-all bg-[#E5EBFF]
                ${isSelected(item.id) ? 'border-2 border-[#787FDC]' : 'border-2 border-transparent'}
                hover:bg-[#D1D9FF]`}
                        >
                            <img
                                src={`/src/assets/images/icons/palette/${item.icon}.svg`}
                                alt={item.label}
                                className="w-10 h-10 mb-2"
                            />
                            <span className="font-sofia text-sm">{item.label}</span>
                        </div>
                    ))}
                </div>


                <div className="w-full px-6">
                    <button
                        onClick={handleNext}
                        disabled={!selection}
                        className={`w-full text-white font-newake text-sm tracking-widest uppercase py-3 rounded-3xl transition
    ${!selection
                                ? 'bg-gray-300 cursor-not-allowed'
                                : 'bg-[#787FDC] hover:bg-[#E5EBFF]'}`}
                    >
                        ÉTAPE SUIVANTE
                    </button>
                </div>
            </div>
        </div>
    );
}
