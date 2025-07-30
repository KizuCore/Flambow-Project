import { useNavigate } from 'react-router-dom';
import circleTopRight from '../../../assets/images/deco/circle/circle-top-right.svg';
import ArrowLeft from '../../../assets/images/icons/arrow/arrow-left.svg';


export default function PersonalizationDyslexie() {
    const navigate = useNavigate();

    const handlePersonalize = () => {
        navigate('/personalize-experience');
    };
    return (
        <div className="min-h-screen flex flex-col justify-between bg-white relative px-6 pt-20 pb-6">
            <img
                src={ArrowLeft}
                onClick={handlePersonalize}
                alt=""
                className="absolute top-5 left-6 w-10 cursor-pointer"
            />

            {/* Cercle haut */}
            <img src={circleTopRight} alt="" className="absolute top-0 right-0 w-32 md:w-40 lg:w-[24rem]" />

            {/* Contenu scrollable */}
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
            </div>
        </div>
    );
}
