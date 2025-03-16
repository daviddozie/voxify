import Image from "next/image"
import Star from "@/asset/svg/star.svg"
import { Button } from "./ui/button"

export const PricingCard = () => {
    return (
        <>
            <div className="border-2 border-[#0370EB] bg-white/10 rounded-[16px] backdrop-blur-lg w-[400px] py-4 px-6">
                <div className="flex items-center justify-between">
                    <p className="text-white poppins font-[300] text-base">Premium Plan</p>
                    <div className="flex items-center border gap-2 border-white/10 rounded-[24px] py-2 px-3 backdrop-blur-md">
                        <Image width={10.4} height={13.06} alt="star" src={Star} />
                        <span className="text-white poppins font-[300] text-[12px]">Popular</span>
                    </div>
                </div>
                <div className="poppins text-white my-4">
                    <span className="font-semibold text-[32px]">$14.99/</span>
                    <span className="font-[300] text-[12px]">monthly</span>
                </div>
                <p className="text-sm text-white poppins font-[300]">Complete control and premium features for maximum efficiency.</p>
                <Button
                    className="bg-[#0370EB] w-full mt-6 text-white text-base font-bold py-4 px-6 roboto-mono rounded-[50px] shadow-none"
                    style={{ boxShadow: "inset 0px 4px 4px 0px #A0C0FF" }}
                >
                    Upgrade Plan
                </Button>
                <div className="w-full h-[1px] bg-[#0370EB] mt-4 mb-6"></div>
                <ul className="poppins text-white text-[15px] font-[300]">
                Everything in the Pro Plan, plus:
                    <li>
                        
                    </li>
                </ul>
            </div>
        </>
    )
}