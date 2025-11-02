import PriceCard from "./PriceCard";

function Price() {
    return (
        <section className="bgCustom-4 py-16 px-4 text-center">
            <h2 className="text-6xl font-bold text-white mb-4 font-playfair">Our Plans</h2>
            <p className="text-[#aaa] mb-12 max-w-xl mx-auto font-montserrat">
                Choose the plan that fits your sleep journey. Upgrade anytime.
            </p>

            <div className="grid mx-6 sm:mx-30 md:mx-60 lg:mx-20 lg:grid-cols-3 gap-8 relative">
                <PriceCard />
            </div>
        </section>
    );
}

export default Price;
