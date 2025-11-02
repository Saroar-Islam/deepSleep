import { pricingPlans } from "../data/Database";
import { motion } from "framer-motion";
import AnimatedButton from "./AnimatedButton";

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        x: -100,
    },
    animate: (index) => ({
        opacity: 1,
        x: 0,
        transition: { delay: index * 0.3 },
    }),
};

export default function PriceCard() {
    return (
        <>
            {pricingPlans.map((plan, index) => (
                <motion.div
                    key={plan.id}
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.2 }}
                    custom={index}
                    className={`rounded-xl shadow-lg p-4 ${plan.theme} transition-all duration-300 hover:scale-[1.02]`}
                >
                    <h3 className="text-3xl font-bold font-playfair mt-2">{plan.name}</h3>
                    <p className={`text-base mt-2 h-14 tracking-tight font-medium font-quicksand ${plan.subtextColor}`}>
                        {plan.description}
                    </p>

                    <div className="text-4xl font-bold mt-6 font-montserrat ">
                        {plan.price}
                        <span className=" text-base font-thin"> {plan.price2} </span>
                    </div>
                    <ul className="text-sm my-10 text-left ml-5 space-y-2 list-disc list-inside">
                        {plan.features.map((feature, idx) => (
                            <p key={idx} className="tracking-wider font-mono leading-loose">
                                {" "}
                                &nbsp; {feature}
                            </p>
                        ))}
                    </ul>

                    <AnimatedButton hoverColor={plan.hoverColor}>{plan.buttonText}</AnimatedButton>
                </motion.div>
            ))}
        </>
    );
}
