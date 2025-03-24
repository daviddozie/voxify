import { Button } from "../ui/button"
import MicIcon from "@/asset/svg/mic.svg"
import Image from "next/image"
import Record from "@/asset/gif/record.gif"
import Loading from "@/asset/gif/loading.gif"
import Voice from "@/asset/gif/voice.gif"
import Audio from "@/asset/gif/audio.gif"

export const Features = () => {

    const messages = [
        { text: "What’s the temperature", position: "top-[30px] left-0" },
        { text: "What’s the weather like today?", position: "top-[10px] right-0" },
        { text: "Set a timer for 10 minutes.", position: "bottom-[20px] left-0" },
        { text: "Play my favorite playlist", position: "bottom-[50px] right-0" }
    ];

    return (
        <>
            <div className="mb-[60px] px-[100px]">
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
                <div className="mt-[50px] flex gap-6 items-center">
                    <div className="border-2 border-[#242424] p-6 rounded-2xl w-[500px]">
                        <h2 className="text-[20px] font-bold poppins text-white mb-3">Interactive Demonstration Section</h2>
                        <p className="text-[#989898] text-sm font-normal roboto-mono">Explore real-time commands and experience the seamless interaction with our AI Voice Assistant, designed to understand your requests and respond instantly to make your tasks easier and your day more productive</p>
                        <div

                            className="w-full h-[250px] bg-cover bg-center relative"
                            style={{
                                backgroundImage: `url(${Record})`,
                            }}
                        >
                            <div className="h-full justify-center items-center">
                                <Image width={25} height={34} alt="Mic-Icon" src={MicIcon} className="mx-auto pt-[110px]" />
                            </div>
                            {messages.map((msg, index) => (
                                <div
                                    key={index}
                                    className={`border absolute backdrop-blur-xl text-white border-white/10 p-[10px] rounded-[8px] text-[12px] poppins ${msg.position}`}
                                >
                                    {msg.text}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="border-2 border-[#242424] p-6 rounded-2xl w-[630px]">
                        <h2 className="text-[20px] font-bold poppins text-white mb-3">Natural Conversations</h2>
                        <p className="text-[#989898] text-sm font-normal roboto-mono">Engage with an intelligent assistant designed to listen attentively, understand your needs with precision, and respond naturally—just like having a conversation with a human. Whether you're managing tasks, seeking information, or simply exploring possibilities, our AI adapts to your style and preferences.</p>
                        <div

                            className="w-full h-[248px] bg-cover bg-center relative"
                            style={{
                                backgroundImage: `url(${Loading})`
                            }}
                        >
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center mt-6 gap-6">
                    <div className="border-2 border-[#242424] p-6 rounded-2xl w-[630px]">
                        <h2 className="text-[20px] font-bold poppins text-white mb-3">Advanced Voice Recognition</h2>
                        <p className="text-[#989898] text-sm font-normal roboto-mono">At the heart of Voxify lies cutting-edge voice recognition technology, designed to make your interactions seamless, accurate, and natural. With state-of-the-art AI algorithms, Voxify understands your words, tone, and intent, ensuring every command is executed precisely as you envisioned.</p>
                        <div

                            className="w-full h-[248px] bg-cover bg-center relative"
                            style={{
                                backgroundImage: `url(${Voice})`
                            }}
                        >
                        </div>
                    </div>
                    <div className="border-2 border-[#242424] p-6 rounded-2xl w-[500px]">
                        <h2 className="text-[20px] font-bold poppins text-white mb-3">Hands-Free Convenience</h2>
                        <p className="text-[#989898] text-sm font-normal roboto-mono">From managing your calendar to playing your favourite playlist, Voxify allows you to control your day without lifting a finger. Simply say the word, and let Voxify do the rest.</p>
                        <div

                            className="w-full h-[265px] bg-cover bg-center relative"
                            style={{
                                backgroundImage: `url(${Audio})`,
                            }}
                        >
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}