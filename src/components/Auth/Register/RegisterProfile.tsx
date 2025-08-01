import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import circleTopRight from '../../../assets/images/deco/circle/circle-top-right.svg';
import ArrowLeft from '../../../assets/images/icons/arrow/arrow-left.svg';
import AvatarImage from '../../../assets/images/icons/avatar/avatar.svg';

export default function RegisterProfilee() {
    const navigate = useNavigate();

    const [usePseudo, setUsePseudo] = useState(true);
    const [pseudo, setPseudo] = useState('');
    const [introduction, setIntroduction] = useState('');
    const [preference, setPreference] = useState<'vouvoiement' | 'tutoiement' | null>(null);

    const handleBack = () => navigate('/register-activities');
    const handleNext = () => {
        // TODO : enregistrer les données ici
        navigate('/register-finish');
    };

    return (
        <div className="min-h-screen flex flex-col justify-between bg-white relative pt-20 pb-6">
            {/* Flèche de retour */}
            <img
                src={ArrowLeft}
                onClick={handleBack}
                alt="Retour"
                className="absolute top-5 left-6 w-10 cursor-pointer"
            />

            {/* Décoration cercle en haut à droite */}
            <img src={circleTopRight} alt="" className="absolute top-0 right-0 w-32 md:w-40 lg:w-[24rem]" />

            {/* Contenu */}
            <div className="relative z-10 w-full max-w-md mx-auto flex flex-col text-center px-6">
                <h1 className="text-[32px] leading-[110%] font-bold text-[#1B1725] font-bricolage mb-6">
                    Votre profil<br />utilisateur
                </h1>
                <p className="font-sofia text-[#787FDC] text-[15px] font-normal mb-6 leading-[1.2]">
                    Votre profil sera visible par les utilisateurs sur<br />
                    les articles que vous publiez et par les<br />
                    personnes que vous contactez
                </p>

                {/* Avatar */}
                <div className="mb-6">
                    <img src={AvatarImage} alt="Avatar" className="w-24 h-24 mx-auto" />
                </div>

                {/* Switch pseudo */}
                <div className="flex items-center justify-between w-full mb-2">
                    <span className="font-sofia text-sm text-[#1B1725]">Utiliser un pseudo</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            checked={usePseudo}
                            onChange={() => setUsePseudo(!usePseudo)}
                            className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-[#787FDC] transition duration-300"></div>
                        <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div>
                    </label>
                </div>
                <p className="text-left text-xs text-[#787FDC] mb-4 font-sofia">
                    Votre nom et prénom resteront confidentiels
                </p>

                {/* Champ pseudo */}
                {usePseudo && (
                    <input
                        type="text"
                        value={pseudo}
                        onChange={(e) => setPseudo(e.target.value)}
                        placeholder="Pseudo"
                        className="w-full px-4 py-3 rounded-xl bg-[#E5EBFF] text-[#1B1725] font-sofia mb-6"
                    />
                )}

                {/* Texte d’intro */}
                <div className="text-left w-full mb-2 font-sofia text-[#1B1725] text-sm font-medium">
                    Texte d’introduction
                </div>
                <p className="text-left text-xs text-[#787FDC] mb-2 font-sofia">
                    Présentez-vous brièvement afin que les utilisateurs apprennent à vous connaître
                </p>
                <textarea
                    value={introduction}
                    onChange={(e) => setIntroduction(e.target.value)}
                    placeholder="Entrez votre texte d’introduction ici ..."
                    className="w-full px-4 py-3 rounded-xl bg-[#E5EBFF] text-[#1B1725] font-sofia h-28 resize-none mb-6"
                />

                {/* Vouvoiement ou tutoiement */}
                <div className="text-left w-full mb-2 font-sofia text-[#1B1725] text-sm font-medium">
                    Vous préférez :
                </div>
                <div className="flex gap-2 mb-10">
                    <button
                        onClick={() => setPreference('vouvoiement')}
                        className={`flex-1 py-2 rounded-xl font-sofia text-sm transition ${preference === 'vouvoiement'
                            ? 'bg-[#787FDC] text-white'
                            : 'bg-[#E5EBFF] text-[#1B1725]'
                            }`}
                    >
                        Être vouvoyé
                    </button>
                    <button
                        onClick={() => setPreference('tutoiement')}
                        className={`flex-1 py-2 rounded-xl font-sofia text-sm transition ${preference === 'tutoiement'
                            ? 'bg-[#787FDC] text-white'
                            : 'bg-[#E5EBFF] text-[#1B1725]'
                            }`}
                    >
                        Être tutoyé
                    </button>
                </div>

                {/* Bouton */}
                <button
                    onClick={handleNext}
                    className="w-full font-newake text-sm tracking-widest uppercase py-4 rounded-3xl transition bg-[#787FDC] text-white hover:bg-[#E5EBFF]"
                >
                    ÉTAPE SUIVANTE
                </button>
            </div>
        </div>
    );
}
