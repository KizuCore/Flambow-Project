import { useNavigate } from 'react-router-dom';
import circleTopRight from '../../../assets/images/deco/circle/circle-top-right.svg';
import ArrowLeft from '../../../assets/images/icons/arrow/arrow-left.svg';

export default function RegisterGeoPage() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/personalize-experience');
    };

    const handleNext = () => {
        navigate('/register-activities');
    };



    return (
        <div className="min-h-screen flex flex-col justify-between bg-white relative px-6 pt-20 pb-16">
            {/* Flèche retour */}
            <img
                src={ArrowLeft}
                onClick={handleBack}
                alt=""
                className="absolute top-5 left-6 w-10 cursor-pointer"
            />
            {/* Cercle haut */}
            <img src={circleTopRight} alt="" className="absolute top-0 right-0 w-32 md:w-40 lg:w-[24rem]" />

            {/* Contenu */}
            <div className="relative z-10 w-full max-w-md mx-auto flex flex-col items-center text-center">
                <h1 className="text-[32px] leading-[110%] font-bold text-[#1B1725] font-bricolage mb-6">
                    Votre secteur<br />géographique
                </h1>
                <p className="font-sofia text-[#787FDC] text-[15px] leading-6 font-normal mb-10">
                    Afin de vous recommander des annonces ou<br />
                    plus proche de chez-vous, merci de nous<br />
                    indiquer où vous habitez :
                </p>

                <div className="w-full px-6">
                    <button
                        onClick={handleNext}
                        className="w-full text-white font-newake text-sm tracking-widest uppercase py-3 rounded-3xl transition bg-[#787FDC] hover:bg-[#E5EBFF]"
                    >
                        ÉTAPE SUIVANTE
                    </button>

                </div>
            </div>
        </div>
    );
}
