import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import circleTopRight from '../../../assets/images/deco/circle/circle-top-right.svg';
import ArrowLeft from '../../../assets/images/icons/arrow/arrow-left.svg';

export default function PersonalizationDyslexie() {
    const navigate = useNavigate();
    const [selectedFont, setSelectedFont] = useState<'comfortaa' | 'opendyslexic' | null>(null);

    const handleBack = () => {
        navigate('/personalize-experience');
    };

    const handleNext = () => {
        if (selectedFont) {
            // Tu peux stocker la sélection ici dans un state global / contexte si nécessaire
            navigate('/next-step'); // À adapter
        }
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
                    {/* Comfortaa */}
                    <div
                        onClick={() => setSelectedFont('comfortaa')}
                        className={`cursor-pointer px-4 py-4 rounded-2xl bg-[#F3F5FF] text-center transition border-2 ${selectedFont === 'comfortaa' ? 'border-[#787FDC]' : 'border-transparent'
                            }`}
                    >
                        <h3 className="font-comfortaa text-[#1B1725] mb-2">Comfortaa</h3>
                        <p className="font-comfortaa text-sm text-[#1B1725]">
                            Cette police est utilisée par défaut sur<br /> notre application
                        </p>
                    </div>

                    {/* OpenDyslexic */}
                    <div
                        onClick={() => setSelectedFont('opendyslexic')}
                        className={`cursor-pointer px-4 py-4 rounded-2xl bg-[#F3F5FF] text-center transition border-2 ${selectedFont === 'opendyslexic' ? 'border-[#787FDC]' : 'border-transparent'
                            }`}
                    >
                        <h3 className="text-base text-[#1B1725] font-opendyslexic mb-2">Open dyslexic</h3>
                        <p className="font-opendyslexic text-sm text-[#1B1725]">
                            Cette police favorise la lecture aux personnes souffrant de dyslexie
                        </p>
                    </div>
                </div>

                {/* Étape suivante */}
                <button
                    type="button"
                    onClick={handleNext}
                    disabled={!selectedFont}
                    className={`w-full mt-10 bg-[#787FDC] text-white font-newake text-sm tracking-widest uppercase py-3 rounded-3xl transition ${!selectedFont ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#E5EBFF]'
                        }`}
                >
                    ÉTAPE SUIVANTE
                </button>
            </div>
        </div>
    );
}
