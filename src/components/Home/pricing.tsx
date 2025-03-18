"use client"
import { useState } from "react";
import { Button } from "../ui/button";
import { PricingCard } from "../pricing-card";
import { Check } from "lucide-react";

export const Pricing = () => {
    const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

    const priceCard = [
        {
            planType: "Basic Plan",
            styleHidden: "hidden",
            cardStyle: "border-white/10",
            price: billingCycle === "monthly" ? "$14.99/" : "$49.99/",
            duration: billingCycle,
            info: "For individuals who want smart assistance for everyday tasks.",
            buttonStyle: "backdrop-blur-0 bg-white/10 shadow-[inset_0px_4px_4px_0px_rgba(0,0,0,0.25)]",
            lineStyle: "bg-[#313B48]",
            benefits: [
                "Voice commands for scheduling, reminders, and weather updates.",
                "Integration with popular apps like Calendar and Music.",
                "Basic personalization features.",
                "Email and chat support.",
            ],
            checked: <Check size={14} />
        },
        {
            planType: "Premium Plan",
            styleHidden: "",
            cardStyle: "border-[#0370EB]",
            price: billingCycle === "monthly" ? "$14.99/" : "$99.99/",
            duration: billingCycle,
            info: "Complete control and premium features for maximum efficiency.",
            buttonStyle: "bg-[#0370EB] text-black",
            lineStyle: "bg-[#0370EB]",
            benefits: [
                "AI-driven insights and recommendation",
                "Unlimited integrations with apps and devices.",
                "Secure data storage and backup.",
                "Early access to new features and updates.",
                "24/7 dedicated customer support."
            ],
            checked: <Check size={14} />
        },
        {
            planType: "Pro Plan",
            styleHidden: "hidden",
            cardStyle: "border-white/10",
            price: billingCycle === "monthly" ? "$19.99/" : "$199.99/",
            duration: billingCycle,
            info: "Enhanced features for power users who need a productivity boost.",
            buttonStyle: "backdrop-blur-0 bg-white/10 shadow-[inset_0px_4px_4px_0px_rgba(0,0,0,0.25)]",
            lineStyle: "bg-[#313B48]",
            benefits: [
                "Advanced personalization and task prioritization.",
                "Integration with smart home devices.",
                "Real-time translations for multiple languages.",
                "Priority customer support.",
            ],
            checked: <Check size={14} />
        }
    ];

    return (
        <div className="bg-[#000001] px-[100px] py-[60px] relative">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 h-[250px] bg-blue-500 blur-[120px] opacity-30"></div>
            <div className="absolute top-[20%] inset-0 w-[50%] h-[68%] bg-blue-800 blur-[90px] opacity-25 mx-auto"></div>
            <h2 className="text-[32px] font-bold text-white poppins my-3 text-center">
                Choose Your Voxify Pricing Plan
            </h2>
            <p className="text-sm font-normal text-center text-[#989898] roboto-mono">
                Choose the perfect plan for your needs and start enjoying the convenience of our
                <br /> AI-powered voice assistant.
            </p>
            <div className="flex items-center justify-center my-6">
                <div className="border border-white/10 flex items-center justify-between w-[250px] backdrop-blur-md py-2 px-2.5 rounded-[50px] bg-white/10">
                    <Button
                        className={`w-1/2 text-white font-[300] py-4 px-8 rounded-[35px] poppins ${
                            billingCycle === "monthly" ? "border border-white/10 backdrop-blur-lg" : ""
                        }`}
                        onClick={() => setBillingCycle("monthly")}
                    >
                        Monthly
                    </Button>
                    <Button
                        className={`w-1/2 text-white font-[300] py-4 px-8 rounded-[35px] poppins ${
                            billingCycle === "annual" ? "border border-white/10 backdrop-blur-lg" : ""
                        }`}
                        onClick={() => setBillingCycle("annual")}
                    >
                        Annual
                    </Button>
                </div>
            </div>
            <div className="flex gap-6 mt-14 mb-[50px] justify-between">
                {priceCard.map((pricing, index) => (
                    <PricingCard
                        key={index}
                        planType={pricing.planType}
                        styleHidden={pricing.styleHidden}
                        price={pricing.price}
                        duration={pricing.duration}
                        info={pricing.info}
                        buttonStyle={pricing.buttonStyle}
                        cardStyle={pricing.cardStyle}
                        lineStyle={pricing.lineStyle}
                        benefits={pricing.benefits}
                        checked={pricing.checked}
                    />
                ))}
            </div>
        </div>
    );
};
