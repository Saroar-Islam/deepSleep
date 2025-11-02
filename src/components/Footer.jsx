import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
    return (
        <footer className="bg-CosmicBlack-blue text-gray-200 py-8 px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="flex flex-col items-center justify-center  text-center md:text-left mb-4 md:mb-0 mt-7 md:mt-4">
                    <div>
                        <a href="/" className="text-3xl font-quicksand  text-blue-400">
                            DeepSleep
                        </a>
                    </div>
                    {/* <h2 className="text-2xl font-semibold text-white"> CasualFabrics</h2> */}
                    <p className="text-sm font-playfair">Crafted with care. Designed for delight.</p>
                </div>

                <div className="flex flex-col justify-center items-center md:items-start ">
                    <div className="flex space-x-5 mt-10 md:mt-0">
                        <a href="#" className="hover:text-blue-400 transition font-quicksand">
                            About
                        </a>
                        <a href="#" className="hover:text-blue-400 transition font-quicksand">
                            Contact
                        </a>
                        <a href="#" className="hover:text-blue-400 transition font-quicksand">
                            Privacy
                        </a>
                        <a href="#" className="hover:text-blue-400 transition font-quicksand">
                            Terms & Condition
                        </a>
                    </div>

                    <div className="flex mt-7 md:mt-4 justify-start space-x-5">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <FaFacebookF className="hover:text-blue-500 transition duration-300 text-xl" />
                        </a>

                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                        >
                            <FaInstagram className="hover:text-pink-500 transition duration-300 text-xl" />
                        </a>

                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="X">
                            <FaSquareXTwitter className="hover:text-gray-400 transition duration-300 text-xl" />
                        </a>

                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                            <FaYoutube className="hover:text-red-500 transition duration-300 text-xl" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="mt-6 text-center text-sm text-gray-500">&copy; 2025 DeepSleep. All rights reserved.</div>
        </footer>
    );
}

export default Footer;
// <footer className="bg-gray-950 py-6 text-center text-sm text-secondary-text">
//     © {new Date().getFullYear()} DeepSleep. All rights reserved.
// </footer>;
