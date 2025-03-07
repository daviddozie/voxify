"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown, ChevronUp } from "lucide-react";

export const FAQ = () => {
    const [activeItem, setActiveItem] = useState<string | null>(null);

    const toggleAccordion = (value: string) => {
        setActiveItem(activeItem === value ? null : value);
    };

    return (
        <div className="mt-[60px]">
            <div className="flex justify-center">
                <Button className="bg-white/10 py-[10px] px-[15px] backdrop-blur-lg border-white/10 border text-sm font-normal roboto-mono rounded-[24px]">
                    FAQ
                </Button>
            </div>
            <h2 className="text-[32px] font-bold text-white poppins my-3 text-center">
                Frequently Asked Questions
            </h2>
            <p className="text-sm font-normal text-center text-[#989898] roboto-mono">
                Find answers to all your questions about Voxify and discover how our AI voice
                assistant can transform your daily routines.
            </p>
            <div className="flex justify-center mt-4">
                <Button
                    className="bg-[#0370EB] text-white text-base font-bold py-4 px-6 roboto-mono rounded-[50px] shadow-none"
                    style={{ boxShadow: "inset 0px 4px 4px 0px #A0C0FF" }}
                >
                    More FAQ
                </Button>
            </div>
            <div className="w-full md:max-w-[60%] mx-auto mt-[50px]">
                <Accordion type="single" collapsible className="w-full">
                    {[
                        { value: "item-1", question: "How do I set up Voxify on my device?" },
                        { value: "item-2", question: "Does Voxify work offline?" },
                        { value: "item-3", question: "Is there a free version of Voxify?" },
                        { value: "item-4", question: "Can I customize Voxify's voice?" },
                        { value: "item-5", question: "What integrations does Voxify support?" },
                    ].map((item) => (
                        <AccordionItem
                            key={item.value}
                            value={item.value}
                            className={`transition-all duration-300 px-4 rounded-lg ${
                                activeItem === item.value
                                    ? "bg-white/10 backdrop-blur-[25px] border-2 border-white/10"
                                    : "bg-transparent"
                            }`}
                            onClick={() => toggleAccordion(item.value)}
                        >
                            <AccordionTrigger
                                className={`text-white text-base poppins flex justify-between items-center w-full ${
                                    activeItem === item.value ? "font-bold" : "font-normal"
                                }`}
                            >
                                {item.question}
                                {activeItem === item.value ? (
                                    <ChevronUp className="ml-2" />
                                ) : (
                                    <ChevronDown className="ml-2" />
                                )}
                            </AccordionTrigger>
                            <AccordionContent className="text-[#989898] text-sm poppins">
                                Voxify offers both free and premium subscription plans. The premium plan unlocks advanced features such as custom voice commands, additional integrations, and priority support.
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    );
};
