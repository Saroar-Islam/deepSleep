import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Price from "./components/Price.Jsx";
import Tracker from "./components/Tracker";

export default function App() {
    return (
        <div className="font-sans bg-cosmicBlack-blue">
            <Navbar />
            <Hero />
            <Features />
            <Tracker />
            <Price />
            <Testimonials />
            <CallToAction />
            <Footer />
        </div>
    );
}
