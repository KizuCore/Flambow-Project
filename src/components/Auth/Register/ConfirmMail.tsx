import { useNavigate } from 'react-router-dom';
import circleTopRight from '../../../assets/images/deco/circle/circle-top-right.svg';
import ArrowLeft from '../../../assets/images/icons/arrow/arrow-left.svg';


export default function RegisterPage() {
    const navigate = useNavigate();

    const handleWelcome = () => {
        navigate('/welcome');
    };

    const TEMPORAIRE = () => {
        navigate('/personalize');
    };
    return (
        <div className="min-h-screen flex flex-col justify-between bg-white relative px-6 pt-20 pb-6">
            <img
                src={ArrowLeft}
                onClick={handleWelcome}
                alt=""
                className="absolute top-5 left-6 w-10 cursor-pointer"
            />

            {/* Cercle haut */}
            <img src={circleTopRight} alt="" className="absolute top-0 right-0 w-32 md:w-40 lg:w-[24rem]" />

            {/* Contenu scrollable */}
            <div className="relative z-10 w-full max-w-md mx-auto flex flex-col items-center text-center">
                <h1 className="text-[40px] leading-[100%] font-bold text-[#1B1725] font-bricolage mb-[2rem]">
                    Confirmer<br />votre email
                </h1>
                <p className="font-sofia text-[#787FDC] text-[16px] leading-[18px] text-center font-normal mb-5 pb-[3rem]">
                    Pour continuer votre inscription, rendez-vous<br />
                    dans votre boîte mail et cliquez sur confirmer
                </p>
            </div>
            <div className="w-full px-6">
                <button
                    onClick={TEMPORAIRE}
                    className={`w-full bg-[#787FDC] text-white font-newake text-sm tracking-widest uppercase py-3 rounded-3xl transition hover:bg-[#E5EBFF]`}
                >
                    bouton temporaire
                </button>
            </div>
        </div>
    );
}
