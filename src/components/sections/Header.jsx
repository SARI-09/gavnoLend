import { Logo } from "@/assets";
import { FaFacebookF, FaLinkedinIn, FaTwitter, } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";

const Header = () => {
    return (
        <header className="sticky top-0">
            <div className="flex justify-between items-center py-5">
                <div className="text-white text-base font-normal gap-6 flex items-center">
                    <TiThMenu className="w-5 h-5 md:hidden block" />
                    <span className="hidden md:block">Home</span>
                    <span className="hidden md:block">Product</span>
                    <span className="hidden md:block">Pricing</span>
                    <span className="hidden md:block">About</span>
                    <span className="hidden md:block">Contact</span>
                </div>

                <div>
                    <div className="">
                        <img src={Logo.src} className="w-[206px] h-[78px] p-2.5" />
                    </div>
                </div>

                <div className="flex gap-[24px]">
                    <FaTwitter className="w-4 h-4 2xl:w-8 2xl:h-8 md:w-8 md:h-8 sm:w-4 sm:h-4" color="#fff" />
                    <FaFacebookF className="w-4 h-4 2xl:w-8 2xl:h-8 md:w-8 md:h-8 sm:w-4 sm:h-4" color="#fff" />
                    <FaLinkedinIn className="w-4 h-4 2xl:w-8 2xl:h-8 md:w-8 md:h-8 sm:w-4 sm:h-4" color="#fff" />
                </div>
            </div>
        </header>
    )
}

export default Header
