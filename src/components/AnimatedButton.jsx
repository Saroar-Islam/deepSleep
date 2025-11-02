import { motion } from "framer-motion";

export default function AnimatedButton({ hoverColor, children, onClick, className = "" }) {
    const buttonVariants = {
        initial: { scale: 0.95, opacity: 0, y: 10 },
        animate: {
            scale: 1,
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.8, 0.25, 1],
                delay: 0.4,
            },
        },
        hover: {
            backgroundColor: hoverColor,
            color: "#ffffff",
            boxShadow: `0 0 12px ${hoverColor}`,
            transition: { duration: 0.3 },
        },
        tap: { scale: 0.97 },
    };

    return (
        <motion.button
            variants={buttonVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            whileTap="tap"
            onClick={onClick}
            className={`bg-gray-200 text-black font-semibold py-2 px-4 rounded transition cursor-pointer ${className}`}
        >
            {children}
        </motion.button>
    );
}
