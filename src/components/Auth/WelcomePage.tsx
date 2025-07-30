import circleTopMid from '../../assets/images/deco/circle/circle-top-mid.svg';


export default function WelcomePage() {
    return (
        <div className="min-h-screen flex flex-col justify-between bg-white relative px-6 pt-20 pb-6">
            {/* Cercle haut */}
            <img
                src={circleTopMid}
                alt=""
                className="absolute -top-16 left-1/2 -translate-x-1/2 w-96 md:w-40 lg:w-[24rem]"
            />

            {/* Contenu scrollable */}
            <div className="relative z-10 w-full max-w-md mx-auto flex flex-col items-center text-center">
                <h1 className="text-[40px] leading-[100%] font-bold text-[#1B1725] font-bricolage mb-[2rem]">
                    Bienvenue
                </h1>
                <p className="font-sofia text-[#787FDC] text-[16px] leading-[18px] text-center font-normal mb-5 pb-[3rem]">
                    Pour commencer,<br />
                    connectez-vous ou créez un compte
                </p>

                <form className="w-full flex flex-col gap-5">
                    {/* Email */}
                    <div className="text-left">
                        <div className="relative w-full font-sofia">
                            <input
                                type="email"
                                id="email"
                                defaultValue=""
                                placeholder="Email"
                                className="peer w-full px-4 pt-3 pb-4 rounded-3xl border-[2px]  border-[#787FDC] placeholder:text-[#787FDC] bg-[#E5EBFF] text-[#787FDC] text-sm outline-none transition-opacity duration-300"
                            />
                            <label htmlFor="email" className="input-label-flambow font-comfortaa">
                                Email
                            </label>
                        </div>
                    </div>

                    {/* Mot de passe */}
                    <div className="text-left pt-3 pb-[1rem]">
                        <div className="relative w-full">
                            <input
                                type="password"
                                id="password"
                                placeholder="Mot de passe"
                                className="peer w-full px-4 pt-3 pb-4 rounded-3xl border-[2px]  border-[#787FDC] placeholder:text-[#787FDC] bg-[#E5EBFF] text-[#787FDC] text-sm outline-none transition-opacity duration-300
"
                            />
                            <label htmlFor="password" className="input-label-flambow font-comfortaa">
                                Mot de passe
                            </label>
                        </div>
                    </div>

                    <div className="text-right text-xs text-[#787FDC] cursor-pointer -mt-2">
                        mot de passe oublié ?
                    </div>
                </form>
            </div>

            {/* Boutons en bas */}
            <div className="relative z-10 w-full max-w-md mx-auto flex flex-col gap-4 pb-[5rem]">
                <button
                    type="submit"
                    className="w-full bg-[#787FDC] text-white border font-newake text-sm tracking-widest uppercase py-3 rounded-3xl hover:bg-[#E5EBFF] transition"
                >
                    SE CONNECTER
                </button>

                <button type="button" className="w-full border border-[#787FDC] text-[#787FDC] font-newake text-sm tracking-widest uppercase py-3 rounded-3xl bg-white hover:bg-[#E5EBFF] transition">
                    CREER UN COMPTE
                </button>

            </div>
        </div>
    );
}
