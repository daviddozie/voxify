import Image from "next/image";
import Star from "@/asset/svg/star.svg";
import { Button } from "./ui/button";

interface PricingCardProps {
    planType: string;
    styleHidden: string;
    price: string;
    duration: string;
    info: string;
    buttonStyle: string;
    benefits: string[];
    cardStyle: string;
    lineStyle: string;
    checked: React.ReactNode;
}

export const PricingCard = ({
    planType,
    styleHidden,
    price,
    duration,
    info,
    buttonStyle,
    benefits,
    cardStyle,
    lineStyle,
    checked
}: PricingCardProps) => {
    return (
        <div className={`border-2 bg-white/10 rounded-[16px] backdrop-blur-lg w-[380px] py-4 px-4 ${cardStyle}`}>
            <div className="flex items-center justify-between">
                <p className="text-white poppins font-[300] text-base">{planType}</p>
                <div className={`flex items-center border gap-2 border-white/10 rounded-[24px] py-2 px-3 backdrop-blur-md ${styleHidden}`}>
                    <Image width={10.4} height={13.06} alt="star" src={Star} />
                    <span className="text-white poppins font-[300] text-[12px]">Popular</span>
                </div>
            </div>
            <div className="poppins text-white my-4">
                <span className="font-semibold text-[32px]">{price}</span>
                <span className="font-[300] text-[12px]">/{duration}</span>
            </div>
            <p className="text-sm text-white poppins font-[300]">{info}</p>
            <Button
                className={`${buttonStyle} w-full mt-6 text-white text-base font-bold py-4 px-6 roboto-mono rounded-[50px] shadow-none`}
                style={{ boxShadow: "inset 0px 4px 4px 0px #A0C0FF" }}
            >
                Upgrade Plan
            </Button>
            <div className={`w-full h-[1px] mt-4 mb-6 ${lineStyle}`}></div>
            <ul className="poppins text-white text-[15px] font-[300]">
                {benefits.length > 0 && <p className="mb-2">Everything in the Pro Plan, plus:</p>}
                {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2 pb-4 mt-2 poppins text-sm">
                        <div className="border-[1.5px] border-white w-[24px] h-[24px] flex justify-center items-center rounded-full">
                            {checked}
                        </div>
                        {benefit}
                    </li>
                ))}
            </ul>
        </div>
    );
};
