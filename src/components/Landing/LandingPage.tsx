import { motion } from 'framer-motion';
import fullLogo from '../../assets/images/logo/full-logo.svg';
import circleTopRight from '../../assets/images/deco/circle/circle-top-right.svg';
import circleBotLeft from '../../assets/images/deco/circle/circle-bot-left.svg';
import lineTopLeft from '../../assets/images/deco/line/line-top-left.svg';
import lineBotRight from '../../assets/images/deco/line/line-bot-right.svg';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/welcome');
    }, 2500); // redirection après 2.5 secondes

    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* décorations */}
      <img src={circleTopRight} alt="" className="absolute top-0 right-0 w-48 md:w-40 lg:w-[24rem]" />
      <img src={circleBotLeft} alt="" className="absolute bottom-0 left-0 w-32 md:w-40 lg:w-[18rem]" />
      <img src={lineTopLeft} alt="" className="absolute -top-5 left-0 w-80  lg:w-[56rem]" />
      <img src={lineBotRight} alt="" className="absolute bottom-0 right-0 w-48 md:w-56 lg:w-[24rem]" />

      {/* logo centré avec fade-in */}
      <div className="relative z-10 flex items-center justify-center h-screen">
        <motion.img
          src={fullLogo}
          alt="Flambow logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5 }}
          className="w-64 md:w-80 lg:w-96"
        />
      </div>
    </div>
  );
}
