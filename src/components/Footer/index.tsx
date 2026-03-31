import { Logo } from "../Navbar/Logo";
import { footerItems } from "./data";

export const Footer = () => {
    return (
        <footer className="bg-black border-t border-gray-400 mt-8 pt-4 pb-2 lg:px-5">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:space-x-8 sm:space-y-4 lg:space-y-0">

                <div className="lg:w-1/4 text-center lg:text-left lg:mx-auto py-4">
                    <Logo />
                </div>

                <div className="lg:w-1/4 flex flex-col items-center lg:items-start space-y-2 py-4">
                    <h3 className="text-white text-lg">Приступимо до роботи?</h3>
                    <p className="text-white">+380993895704</p>
                    <a href="https://pina-pro.com" className="text-white hover:text-orange transition">
                        pina-pro.com
                    </a>
                </div>

                <div className="lg:w-1/4 flex flex-col items-center lg:items-start space-y-2 py-4">
                    {footerItems.map((item, index) => (
                        <a key={index} href={item.link} className="text-white hover:text-orange transition">
                            {item.title}
                        </a>
                    ))}
                </div>

            </div>

            <div className="text-white text-xs text-center mt-6">
                <p>© <a href="https://nexel.digital" className="underline hover:text-orange">NEXEL</a> 2024</p>
            </div>
        </footer>
    );
};
