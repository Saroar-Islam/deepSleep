import { heroData } from "../data/Database";

import heroImg from "../assets/hero/heroWithPanda2.png";
import heroPanda2 from "../assets/hero/heroPanda3.png";
import hero3 from "../assets/hero/hero3.png";
import appStore from "../assets/icon_logo/app-store.svg";
import googlePlay from "../assets/icon_logo/google-play.svg";

export default function Hero() {
    return (
        <section
            className="relative min-h-screen px-6 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${hero3})` }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/5 z-0" />

            {/* hero flex box  */}
            <div className="relative z-40 flex max-md:flex-col-reverse justify-center items-center text-center gap-10 max-md:gap-0 pt-20 max-lg:pt-0">
                {/* hero details inside flex box */}

                <div className="">
                    <h1 className="text-7xl max-sm:text-5xl font-bold mb-10 neon-text font-quicksand tracking-wider">
                        {heroData.title}
                    </h1>
                    <p className="text-lg max-w-xl mb-16 text-secondaryColor font-montserrat">{heroData.subtitle}</p>

                    <div className="flex max-md:flex-col justify-center items-center gap-x-4 gap-y-6 pb-0 max-md:pb-10 mb-10 md:mb-0">
                        <button className="bg-gray-600  font-semibold  rounded-lg hover:bg-gray-800 transition cursor-pointer">
                            <a href="#">
                                <img src={appStore} className="w-48 h-16" alt="" />
                            </a>
                        </button>

                        <button className="bg-gray-600 font-semibold rounded-lg hover:bg-gray-800 transition cursor-pointer">
                            <a href="#">
                                <img src={googlePlay} className="w-52 h-16" alt="" />
                            </a>
                        </button>
                    </div>
                </div>

                {/* hero img inside flex box  */}
                <div className="">
                    <img src={heroPanda2} className="w-[700px] h-[650px] max-md:w-[400px] max-md:h-[400px]" alt="" />
                </div>
            </div>
        </section>
    );
}
