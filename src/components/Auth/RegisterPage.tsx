import circleTopRight from '../../assets/images/deco/circle/circle-top-right.svg';


export default function RegisterPage() {
    return (
        <div className="min-h-screen flex flex-col justify-between bg-white relative px-6 pt-20 pb-6">
            {/* Cercle haut */}
            <img src={circleTopRight} alt="" className="absolute top-0 right-0 w-32 md:w-40 lg:w-[24rem]" />

            {/* Contenu scrollable */}
            <div className="relative z-10 w-full max-w-md mx-auto flex flex-col items-center text-center">
                <h1 className="text-[40px] leading-[100%] font-bold text-[#1B1725] font-bricolage mb-[2rem]">
                    Crérer un compte
                </h1>
                <p className="font-sofia text-[#787FDC] text-[16px] leading-[18px] text-center font-normal mb-5 pb-[3rem]">
                    Nous aurions besoin de quelques<br />
                    informations pour commencer ...
                </p>

                <form className="w-full flex flex-col gap-5">
                    {/* Nom */}
                    <div className="text-left">
                        <div className="relative w-full font-sofia">
                            <input
                                type="text"
                                id="name"
                                defaultValue=""
                                placeholder="Nom"
                                className="peer w-full px-4 pt-3 pb-4 rounded-3xl border-[2px]  border-[#787FDC] placeholder:text-[#787FDC] bg-[#E5EBFF] text-[#1B1725] text-sm outline-none transition-opacity duration-300"
                            />
                            <label htmlFor="name" className="input-label-flambow font-comfortaa">
                                Nom
                            </label>
                        </div>
                    </div>
                    {/* Prénom */}
                    <div className="text-left">
                        <div className="relative w-full font-sofia">
                            <input
                                type="text"
                                id="firstName"
                                defaultValue=""
                                placeholder="Prénom"
                                className="peer w-full px-4 pt-3 pb-4 rounded-3xl border-[2px]  border-[#787FDC] placeholder:text-[#787FDC] bg-[#E5EBFF] text-[#1B1725] text-sm outline-none transition-opacity duration-300"
                            />
                            <label htmlFor="firstName" className="input-label-flambow font-comfortaa">
                                Prénom
                            </label>
                        </div>
                    </div>

                    {/* Date de naissance */}
                    <div className="text-left">
                        <div className="relative w-full font-sofia">
                            <input
                                type="text"
                                id="birthDate"
                                placeholder="Date de naissance"
                                onFocus={(e) => (e.target.type = 'date')}
                                onBlur={(e) => e.target.value === '' && (e.target.type = 'text')}
                                className="peer w-full px-4 pt-3 pb-4 rounded-3xl border-[2px] border-[#787FDC] placeholder:text-[#787FDC] bg-[#E5EBFF] text-[#1B1725] text-sm outline-none transition-opacity duration-300"
                            />

                            <label htmlFor="birthDate" className="input-label-flambow font-comfortaa">
                                Date de naissance
                            </label>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="text-left">
                        <div className="relative w-full font-sofia">
                            <input
                                type="email"
                                id="email"
                                defaultValue=""
                                placeholder="Email"
                                className="peer w-full px-4 pt-3 pb-4 rounded-3xl border-[2px]  border-[#787FDC] placeholder:text-[#787FDC] bg-[#E5EBFF] text-[#1B1725] text-sm outline-none transition-opacity duration-300"
                            />
                            <label htmlFor="email" className="input-label-flambow font-comfortaa">
                                Email
                            </label>
                        </div>
                    </div>
                    {/* Mot de passe */}
                    <div className="text-left">
                        <div className="relative w-full font-sofia">
                            <input
                                type="password"
                                id="password"
                                defaultValue=""
                                placeholder="Mot de passe"
                                className="peer w-full px-4 pt-3 pb-4 rounded-3xl border-[2px]  border-[#787FDC] placeholder:text-[#787FDC] bg-[#E5EBFF] text-[#1B1725] text-sm outline-none transition-opacity duration-300"
                            />
                            <label htmlFor="password" className="input-label-flambow font-comfortaa">
                                Mot de passe
                            </label>
                        </div>
                    </div>

                    {/* Confirmer Mot de passe */}
                    <div className="text-left">
                        <div className="relative w-full font-sofia">
                            <input
                                type="password"
                                id="confirmPassword"
                                defaultValue=""
                                placeholder="Confirmer le Mot de passe"
                                className="peer w-full px-4 pt-3 pb-4 rounded-3xl border-[2px]  border-[#787FDC] placeholder:text-[#787FDC] bg-[#E5EBFF] text-[#1B1725] text-sm outline-none transition-opacity duration-300"
                            />
                            <label htmlFor="confirmPassword" className="input-label-flambow font-comfortaa">
                                Confirmer le Mot de passe
                            </label>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#787FDC] text-white border font-newake text-sm tracking-widest uppercase py-3 rounded-3xl hover:bg-[#E5EBFF] transition mt-[4rem]"
                    >
                        SE CONNECTER
                    </button>




                </form>
            </div>

            {/* Boutons en bas */}
            <div className="relative z-10 w-full max-w-md mx-auto flex flex-col gap-4 pb-[5rem]">



            </div>
        </div>
    );
}
