import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate()
    return (
        <section className="container mx-auto flex flex-col gap-y-3 px-2 py-8 mt-2 items-center justify-center">
            <div className="flex flex-col md:flex-row items-center justify-center w-full gap-8">
                {/* logo div */}
                <div className="w-full flex flex-col gap-y-2 md:w-[300px] items-center justify-center text-center">
                    <img src={logo} className="object-cover" alt="" />
                    <span className="text-lg font-semibold">
                        The leading copy trading platform for smart investors.
                    </span>
                </div>

                {/* Shortcuts */}
                <div className="flex flex-row gap-6 py-6 items-start justify-around w-full md:justify-around">
                    <div className="text-[12px] sm:text-sm text-white font-normal flex flex-col gap-y-4 w-fit">
                        <h3 className="text-xl font-semibold text-primary">
                            Legal
                        </h3>
                        <span onClick={() => window.open("/terms.pdf", "_blank")} className="hover:text-primary cursor-pointer transition-colors duration-300">
                            Terms & Conditions
                        </span>
                        <span onClick={() => window.open("/terms.pdf", "_blank")} className="hover:text-primary cursor-pointer transition-colors duration-300">
                            Privacy policy
                        </span>
                        <span onClick={() => window.open("/terms.pdf", "_blank")} className="hover:text-primary cursor-pointer transition-colors duration-300">
                            AML policy regulations (SEC)
                        </span>
                    </div>
                    <div className="text-[12px] sm:text-sm text-white font-normal flex flex-col gap-y-4 w-fit ">
                        <h3 className="text-xl font-semibold text-primary">
                            Resources
                        </h3>
                        <span onClick={() => navigate('/about')} className="hover:text-primary cursor-pointer transition-colors duration-300">
                            Documentation
                        </span>
                        <span onClick={() => navigate('/learn')} className="hover:text-primary cursor-pointer transition-colors duration-300">
                            Tutorials
                        </span>
                    </div>
                    <div className="text-[12px] sm:text-sm text-white font-normal flex flex-col gap-y-4 w-fit">
                        <h3 className="text-xl font-semibold text-primary">
                            Support
                        </h3>
                        <span onClick={() => navigate('/learn')} className="hover:text-primary cursor-pointer transition-colors duration-300">
                            Help Center
                        </span>
                        <a href="mailto:copiqat@gmail.com" className="hover:text-primary cursor-pointer transition-colors duration-300">
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>

            {/* copyrights */}
            <div className="flex items-center justify-center mt-4 py-3">
                <span>© 2024 CopyTrade. All rights reserved.</span>
            </div>
        </section>
    );
};

export default Footer;
