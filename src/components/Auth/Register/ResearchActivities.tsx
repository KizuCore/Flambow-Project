import { useNavigate } from 'react-router-dom';
import circleTopRight from '../../../assets/images/deco/circle/circle-top-right.svg';
import ArrowLeft from '../../../assets/images/icons/arrow/arrow-left.svg';
import { useState } from 'react';

export default function ResearchActivitiesPage() {
    const navigate = useNavigate();
    const [selections, setSelections] = useState<string[]>([]);

    const handleBack = () => {
        navigate('/choose-area');
    };

    const handleNext = () => {
        navigate('/register-profile');
    };


    const isSelected = (value: string) => selections.includes(value);


    const toggleSelection = (value: string) => {
        setSelections((prev) =>
            prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
        );
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
                    Ce que vous<br />recherchez
                </h1>
                <p className="font-sofia text-[#787FDC] text-[15px] leading-[1.2] font-normal mb-10">
                    Dîtes nous ce que vous souhaiteriez<br />
                    apprendre avec notre plateforme
                </p>

                <div className="grid grid-cols-2 gap-4 mb-10">
                    {[
                        { id: 'bricolage', label: 'Bricolage', icon: 'bricolage' },
                        { id: 'cuisine', label: 'Cuisine', icon: 'cuisine' },
                        { id: 'langues-etrangeres', label: 'Langues étrangères', icon: 'langues-etrangeres' },
                        { id: 'culture', label: 'Culture', icon: 'culture' },
                        { id: 'jardinage', label: 'Jardinage', icon: 'jardinage' },
                        { id: 'informatique', label: 'Informatique', icon: 'informatique' },
                        { id: 'musique', label: 'Musique', icon: 'musique' },
                        { id: 'sport', label: 'Sport', icon: 'sport' },
                        { id: 'couture-tricot', label: 'Couture & Tricot', icon: 'couture-tricot' },
                        { id: 'art', label: 'Art', icon: 'art' },
                        { id: 'beaute', label: 'Beauté', icon: 'beaute' },
                        { id: 'menage', label: 'Ménage', icon: 'menage' },
                        { id: 'matieres-scolaires', label: 'Matières scolaires', icon: 'matieres-scolaires' },
                        { id: 'surprenez-moi', label: 'Surprenez-moi', icon: 'surprenez-moi' },
                    ].map((item) => (
                        <div
                            key={item.id}
                            onClick={() => toggleSelection(item.id)}
                            className={`flex flex-col items-center justify-center p-6 rounded-2xl cursor-pointer transition-all bg-[#E5EBFF]
                ${isSelected(item.id) ? 'border-2 border-[#787FDC]' : 'border-2 border-transparent'}
                hover:bg-[#D1D9FF]`}
                        >
                            <img
                                src={`/images/icons/activities/${item.icon}.svg`}
                                alt={item.label}
                                className="w-10 h-10 mb-2"
                            />
                            <span className="font-sofia text-sm">{item.label}</span>
                        </div>
                    ))}
                </div>

                <div className="fixed bottom-0 left-0 w-full px-6 pb-6 bg-white z-20 md:static md:px-0 md:pb-0 pt-4">
                    <button
                        onClick={handleNext}
                        disabled={selections.length === 0}
                        className={`w-full text-white font-newake text-sm tracking-widest uppercase py-3 rounded-3xl transition
    ${selections.length === 0
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
