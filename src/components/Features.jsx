import { featuresData } from "../data/Database";
import { animate, motion } from "framer-motion";

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

export default function Features() {
    return (
        <section className="px-10 sm:px-30 md:px-20 lg:px-40  py-40 grid gap-12 md:grid-cols-3 text-center bgCustom-2a ">
            {featuresData.map((f, index) => (
                <motion.div
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.2 }}
                    custom={index}
                    key={f.title}
                    className=" p-3 rounded-md flex flex-col justify-center items-center card-cosmic-glow card-cosmic-glow-border"
                >
                    <p className="text-5xl my-4 text-blue-400 "> {f.icon} </p>
                    <h2 className="text-3xl font-bold my-2 font-playfair text-slate-100 ">{f.title}</h2>
                    <p className="text-slate-300 my-4 font-quicksand">{f.desc}</p>
                </motion.div>
            ))}
        </section>
    );
}

//
