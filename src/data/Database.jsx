import { GiNightSleep } from "react-icons/gi";
import { SiAudiobookshelf } from "react-icons/si";
import { LuAlarmClockCheck } from "react-icons/lu";

// Central data file for DeepSleep
const heroData = {
    title: "DeepSleep",
    subtitle: "Personalized sleep tracking meets calming design—crafted to help you rest, recover, and recharge.",
    ctaText: "Download the App",
};

const featuresData = [
    {
        icon: <SiAudiobookshelf />,
        title: "Guided Audio",
        desc: "Relax with tailored meditations and calming soundscapes.",
    },
    {
        icon: <GiNightSleep />,
        title: "Sleep Score",
        desc: "Daily sleep score based on duration, consistency, and restfulness",
    },
    {
        icon: <LuAlarmClockCheck />,
        title: "Smart Reminders",
        desc: "Bedtime alerts to help you stick to a healthy schedule.",
    },
];

const testimonialsData = [
    {
        quote: "DeepSleep changed my nights. I wake up energized!",
        name: "Alex",
    },
    {
        quote: "The guided audio puts me out in minutes.",
        name: "Jamie",
    },
    {
        quote: "I never realized how poor my sleep was until DeepSleep showed me the patterns. Game changer.",
        name: "Priya",
    },
    {
        quote: "The interface is so soothing, I feel relaxed the moment I open the app.",
        name: "Marcus",
    },
    {
        quote: "Tracking my sleep has helped me build a consistent bedtime routine.",
        name: "Taylor",
    },
    {
        quote: "I love the weekly insights—it's like having a sleep coach in my pocket.",
        name: "Riley",
    },
    {
        quote: "DeepSleep's visuals and color palette are just beautiful. It feels premium and calming.",
        name: "Naomi",
    },
    {
        quote: "The app helped me cut down on late-night scrolling. I sleep deeper now.",
        name: "Jordan",
    },
];

const ctaData = {
    title: "Ready to Sleep Better?",
    buttonText: "Get Started Now",
    hoverColor: "#3b82f6", // blue-500
};

const pricingPlans = [
    {
        id: "free",
        name: "Free Plan",
        price: "$0",
        description: "Perfect for trying out DeepSleep with limited features.",
        features: ["✔ Access to basic sleep sounds", "✔ Limited session duration", "✖️ No offline mode"],
        buttonText: "Start Free",
        theme: "bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white",
        subtextColor: "text-zinc-400",
        hoverColor: "#3b82f6", // blue-500
    },
    {
        id: "basic",
        name: "Basic",
        price: "$19.99",
        price2: "per month",
        description: "Unlock more features and longer sessions.",
        features: ["✔ Full sound library", " ✔ Unlimited session time", "✔ Offline mode"],
        buttonText: "Buy Now",
        theme: "bg-gradient-to-r from-[#1f4037] to-[#99f2c8] text-black",
        subtextColor: "text-slate-900",
        hoverColor: "#2563EB", // darker blue (blue-900)
    },
    {
        id: "premium",
        name: "Premium",
        price: "$49.99",
        price2: "per month",
        description: "Get the full DeepSleep experience with premium perks.",
        features: ["✔ All Basic features", "✔ Personalized sleep coaching", "✔ Priority support"],
        buttonText: "Buy Premium",
        theme: "bg-gradient-to-r from-[#2f2f4f] via-[#0e1a33] to-[#1d1d52] text-gray-200",
        subtextColor: "text-zinc-400",
        hoverColor: "#3b82f6", // blue-500
    },
];

export { heroData, featuresData, testimonialsData, ctaData, pricingPlans };
