import { useNavigate } from 'react-router-dom';
import circleTopRight from '../../assets/images/deco/circle/circle-top-right.svg';


export default function PersonalizationPage() {
    const navigate = useNavigate();

    const handleDyslexie = () => {
        navigate('/personalize-dyslexie');
    };

    const handleDaltonisme = () => {
        navigate('/personalize-daltonisme');
    };

    const handleGestesImprecis = () => {
        navigate('/personalize-gestes-imprecis');
    };

    const handleVisionReduite = () => {
        navigate('/personalize-vision-reduite');
    };
    return (
        <div className="min-h-screen flex flex-col justify-between bg-white relative px-6 pt-20 pb-6">


            {/* Cercle haut */}
            <img src={circleTopRight} alt="" className="absolute top-0 right-0 w-32 md:w-40 lg:w-[24rem]" />

            {/* Contenu scrollable */}
            <div className="relative z-10 w-full max-w-md mx-auto flex flex-col items-center text-center">
                <h1 className="text-[40px] leading-[100%] font-bold text-[#1B1725] font-bricolage mb-[2rem]">
                    Personnalisons<br />votre expérience
                </h1>
                <p className="font-sofia text-[#787FDC] text-[16px] leading-[18px] text-center font-normal mb-5 pb-[3rem]">
                    Renseignez d'éventuelles pathologies afin que<br />
                    nous puissions paramétrer l'application à vos<br />
                    besoins en accessibilité
                </p>
                <div className="grid grid-cols-2 gap-4">
                    {/* Dyslexie */}
                    <div className="flex flex-col items-center justify-center p-7 bg-[#E5EBFF] rounded-2xl cursor-pointer" onClick={handleDyslexie}>
                        <img src="/src/assets/images/icons/personalize/dyslexie.svg" alt="Dyslexie" className="w-10 h-10 mb-2" />
                        <span className="text-[#1B1725] font-sofia text-sm">Dyslexie</span>
                    </div>

                    {/* Daltonisme */}
                    <div className="flex flex-col items-center justify-center p-7 bg-[#E5EBFF] rounded-2xl cursor-pointer" onClick={handleDaltonisme}>
                        <img src="/src/assets/images/icons/personalize/daltonisme.svg" alt="Daltonisme" className="w-10 h-10 mb-2" />
                        <span className="text-[#1B1725] font-sofia text-sm">Daltonisme</span>
                    </div>

                    {/* Vision réduite */}
                    <div className="flex flex-col items-center justify-center p-7 bg-[#E5EBFF] rounded-2xl cursor-pointer" onClick={handleVisionReduite}>
                        <img src="/src/assets/images/icons/personalize/vision-reduite.svg" alt="Vision réduite" className="w-10 h-10 mb-2" />
                        <span className="text-[#1B1725] font-sofia text-sm">Vision réduite</span>
                    </div>

                    {/* Gestes imprécis */}
                    <div className="flex flex-col items-center justify-center p-8 bg-[#E5EBFF] rounded-2xl cursor-pointer" onClick={handleGestesImprecis}>
                        <img src="/src/assets/images/icons/personalize/gestes-imprecis.svg" alt="Gestes imprécis" className="w-10 h-10 mb-2" />
                        <span className="text-[#1B1725] font-sofia text-sm">Gestes imprécis</span>
                    </div>
                </div>

            </div>

        </div>
    );
}
