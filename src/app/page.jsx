import Bg_img from "@/assets/img/Rectangle.png";
import Logo from "@/assets/img/Rectangle4.png";

import { FaFacebookF, FaLinkedinIn, FaTwitter, } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";

export default function Home() {
  return (
    <div>
      <section style={{ backgroundImage: `url(${Bg_img.src})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container mx-auto px-4 h-[100vh]" >

          <header >
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

          <main>
            <div className="flex flex-col items-center justify-center gap-[90px] mt-[60px]">
              <div>
                <div className="flex flex-col items-center gap-[30px]">
                  <h1 className="text-white text-7xl font-bold text-center w-[698px]">The best products
                    start with Figma</h1>
                  <p className="text-white text-2xl font-normal text-center w-[630px]">Most calendars are designed for teams. Slate is designed
                    for freelancers</p>
                </div>
              </div>
              <div><button className="text-white text-xl font-normal w-[236px] h-[52px] p-[16px 62px] bg-[#2091F9] rounded-4xl">Try For Free</button></div>
            </div>
          </main>

        </div>
      </section>
    </div>
  );
}
