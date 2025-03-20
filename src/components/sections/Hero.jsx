import { BackgroundImage } from '@/assets'

const Hero = () => {
    return (
        <section className='-mt-32' style={{ backgroundImage: `url(${BackgroundImage.src})`, backgroundSize: "cover", backgroundPosition: "center" }}>
            <div className="container mx-auto px-4" >
                <div className="flex flex-col items-center justify-center gap-[90px] h-screen">
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
            </div>
        </section>
    )
}

export default Hero
