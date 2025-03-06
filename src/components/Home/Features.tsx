import { Button } from "../ui/button"
import MicIcon from "@/asset/svg/mic.svg"
import Image from "next/image"

export const Features = () => {
    return (
        <>
            <div className="my-[60px]">
                <h2 className="text-[32px] font-bold text-white poppins text-center">Experience the Power of Seamless Interaction</h2>
                <p className="text-sm font-normal text-center text-[#989898] my-4 roboto-mono">Discover how our AI Voice Assistant simplifies tasks, enhances productivity, and connects<br /> you to your world.</p>
                <div className="flex justify-center">
                    <Button
                        className="bg-[#0370EB] text-white font-bold py-4 px-6 roboto-mono rounded-[50px] shadow-none"
                        style={{ boxShadow: "inset 0px 4px 4px 0px #A0C0FF" }}
                    >
                        Explore Features
                    </Button>
                </div>
                <div className="mt-[50px]">
                    <div className="border-2 border-[#242424] p-6 rounded-2xl w-[40%]">
                        <h2 className="text-[20px] font-bold poppins text-white mb-3">Interactive Demonstration Section</h2>
                        <p className="text-[#989898] text-sm font-normal roboto-mono">Explore real-time commands and experience the seamless interaction with our AI Voice Assistant, designed to understand your requests and respond instantly to make your tasks easier and your day more productive</p>
                        <div

                            className="w-full h-[179px] bg-cover bg-center mt-8"
                            style={{
                                backgroundImage: `url('https://s3-alpha-sig.figma.com/img/c253/94d4/0525c0ab4086a6665aee84f0a4daa999?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZATd8xEXZbygwTNAm1zQ9unVoOUOdARDWGPbOrBAi7kpiCl5EXfrtndyHFRr4bjS23bsIoGcYusNutZXGP52hvI3Yl-n9LFHN4JFg7dB-PJMr1Ve0Bc4L~IaMOYLKIOqB4MWioklfNBApV3TPO2zuWqyHCrzAGtKxxL8Ad3G6sxbfNWZEqJfhGFbbCeCk-6PcJVzb4UiGl2nNwUjlgMMKiTmwRdBpQnXft9c7nMcaXn2d811EEGu5qDLsQMukPsoWzmYxT9FlpIF1gxXhYAy36Avp~fhh4tYHP4y4uVWrZgxZ0jpsoPFvVxJD0u3IZ7PbAcG~od23XdC2m8vkRw1PA__')`,
                            }}
                        >
                            <div className="h-full justify-center items-center">
                                <Image width={25} height={34} alt="Mic-Icon" src={MicIcon} className="mx-auto pt-[70px]"/>
                            </div>
                            <div className="border"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}