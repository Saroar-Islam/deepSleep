import { ctaData } from "../data/Database";
import AnimatedButton from "./AnimatedButton";

function CallToAction() {
    return (
        <section className="py-20 px-6 text-center bgCustom-4">
            <h2 className="text-3xl font-bold mb-6 font-playfair"> {ctaData.title}</h2>

            <a href="/">
                <AnimatedButton className="mt-4" hoverColor={ctaData.hoverColor}>
                    {ctaData.buttonText}
                </AnimatedButton>
            </a>

            {/* <button className="bg-white text-cosmicBlack-blue font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition">
                {ctaData.buttonText}
            </button> */}
        </section>
    );
}
export default CallToAction;
