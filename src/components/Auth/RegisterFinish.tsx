import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import circleTopRight from '../../assets/images/deco/circle/circle-top-right.svg';
import lineBotLeft from '../../assets/images/deco/line/line-bot-left.svg';
import lineTopLeft2 from '../../assets/images/deco/line/line-top-left-2.svg';
import fullLogo from '../../assets/images/logo/full-logo.svg';

export default function PersonalizationDyslexie() {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/personalize-experience');
    };

    return (
        <div className="min-h-screen flex flex-col justify-between bg-white relative px-6 pt-20 pb-6">
            {/* Décorations */}
            <img src={circleTopRight} alt="" className="absolute top-0 right-0 w-48 md:w-40 lg:w-[24rem]" />
            <img src={lineTopLeft2} alt="" className="absolute -top-5 left-0 w-80 md:w-80 lg:w-[24rem]" />
            <img src={lineBotLeft} alt="" className="absolute bottom-0 left-0 w-80 md:w-80 lg:w-[24rem]" />

            {/* Contenu principal */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1.5 }}
                className="relative z-10 w-full max-w-md mx-auto flex flex-col items-center text-center justify-center h-screen">

                <img src={fullLogo} alt="Flambow logo" className="w-64 md:w-80 lg:w-96 mb-6" />
                <p
                    className="font-bricolage text-[#1B1725] text-[40px] leading-snug font-bold">
                    Vous souhaite la<br />bienvenue !
                </p>
                <button
                    type="button"
                    onClick={handleLogin}
                    className="w-full bg-[#787FDC] text-white border font-newaket text-[16px] font-bold tracking-widest uppercase py-5 rounded-3xl mt-12 hover:bg-[#E5EBFF] transition"
                >
                    SE CONNECTER
                </button>
            </motion.div>

        </div>
    );
}
