import { Button } from "../ui/button"
import { PricingCard } from "../pricing-card"

export const Pricing = () => {
    return (
        <>
            <div className="bg-[#000001] px-[100px] py-[60px] relative">
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 h-[250px] bg-blue-500 blur-[120px] opacity-30"></div>
                <h2 className="text-[32px] font-bold text-white poppins my-3 text-center">
                    Choose Your Voxify Pricing Plans
                </h2>
                <p className="text-sm font-normal text-center text-[#989898] roboto-mono">
                    Choose the perfect plan for your needs and start enjoying the convenience of our<br /> AI-powered voice assistant.
                </p>
                <div className="absolute top-[40%] inset-0 w-[30%] h-[60%] bg-blue-700 blur-[90px] opacity-30 mx-auto"></div>
                <div className="border border-white/10 flex items-center my-6 justify-between mx-auto w-[250px] backdrop-blur-md py-2 px-2.5 rounded-[50px] bg-white/10">
                    <Button className="border text-white font-[300] border-white/10 backdrop-blur-lg py-4 px-8 rounded-[24px] poppins">Monthly</Button>
                    <Button className="text-white py-4 px-8 font-[300] rounded-[24px] poppins">Annual</Button>
                </div>
                <PricingCard />
            </div>
        </>
    )
}