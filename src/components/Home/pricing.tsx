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
            cardStyle: "",
            price: billingCycle === "monthly" ? "$4.99/" : "$49.99/",
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
            cardStyle: "#0370EB",
            price: billingCycle === "monthly" ? "$9.99/" : "$99.99/",
            duration: billingCycle,
            info: "For professionals who need advanced AI assistance.",
            buttonStyle: "bg-[#FFD700] text-black",
            lineStyle: "bg-[#FFD700]",
            benefits: [
                "All features in Basic Plan.",
                "Priority customer support.",
                "Advanced AI-driven insights.",
                "Multi-device synchronization.",
            ],
            checked: <Check size={14} />
        },
        {
            planType: "Pro Plan",
            styleHidden: "hidden",
            cardStyle: "border-[#FF5733]",
            price: billingCycle === "monthly" ? "$19.99/" : "$199.99/",
            duration: billingCycle,
            info: "For businesses looking for enterprise-grade AI solutions.",
            buttonStyle: "bg-[#FF5733] text-white",
            lineStyle: "bg-[#FF5733]",
            benefits: [
                "All features in Pro Plan.",
                "Dedicated account manager.",
                "Custom AI integrations.",
                "24/7 priority support.",
            ],
            checked: <Check size={14} />
        }
    ];

    return (
        <div className="bg-[#000001] px-[100px] py-[60px] relative">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 h-[250px] bg-blue-500 blur-[120px] opacity-30"></div>
            <div className="absolute top-[40%] inset-0 w-[30%] h-[60%] bg-blue-700 blur-[90px] opacity-30 mx-auto"></div>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center mt-8">
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
