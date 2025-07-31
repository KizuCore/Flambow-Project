import { useNavigate } from 'react-router-dom';
import circleTopRight from '../../../../assets/images/deco/circle/circle-top-right.svg';
import ArrowLeft from '../../../../assets/images/icons/arrow/arrow-left.svg';

export default function PersonalizationDaltonisme() {
    const navigate = useNavigate();

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
            navigate('/register-finish');
        }
    };

    // Redirection vers la page de sélection initiale
    const handleBack = () => {
        navigate('/personalize-experience');
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


                <div className="w-full px-6">
                    <button
                        onClick={handleNext}
                        className="w-full bg-[#787FDC] text-white font-newake text-sm tracking-widest uppercase py-3 rounded-3xl hover:bg-[#E5EBFF] transition"
                    >
                        ÉTAPE SUIVANTE
                    </button>
                </div>
            </div>
        </div>
    );
}
