import { Button } from "../ui/button"
import Image from "next/image"
import Crystal from "@/asset/gif/crystal.gif"
import Network from "@/asset/gif/network.gif"
import Global from "../../../public/global.png"

export const HowIsWork = () => {
    return (
        <>
            <div className="mt-[80px] px-[100px]">
                <div className="flex justify-center">
                    <Button className="bg-white/10 backdrop-blur-lg border-white/10 border p-[10px] text-sm font-normal roboto-mono rounded-[24px]">
                        Why Choose Voxify?
                    </Button>
                </div>
                <h2 className="text-[32px] font-bold text-white poppins my-3 text-center">Experience the Difference with Voxify</h2>
                <p className="text-sm font-normal text-center text-[#989898] roboto-mono">Voxify is more than just an AI voice assistant—it’s your personal companion, designed to <br /> make life easier, more organized, and stress-free.</p>
                <div className="mt-[50px] flex gap-6">
                    <div className="w-[378px]">
                        <div

                            className="h-[248px] bg-cover bg-center relative rounded-sm"
                            style={{
                                backgroundImage: `url(${Crystal})`
                            }}
                        >
                        </div>
                        <h2 className="font-bold poppins text-[20px] my-2 text-white">Privacy You Can Trust</h2>
                        <p className="text-[#989898] text-sm roboto-mono">Your data is safe with Voxify. We use state-of-the-art encryption to ensure your personal information remains secure and accessible only to you.</p>
                    </div>
                    <div className="w-[378px]">
                        <div

                            className="h-[248px] bg-cover bg-center relative rounded-sm"
                            style={{
                                backgroundImage: `url(${Network})`
                            }}
                        >
                            <div className="flex items-center h-full">
                                <Image width={271} height={233} alt="integration" src="/integration.png" className="mx-auto" />
                            </div>
                        </div>
                        <h2 className="font-bold poppins text-[20px] my-2 text-white">Seamless Integrations</h2>
                        <p className="text-[#989898] text-sm roboto-mono">Voxify works effortlessly with your favorite apps and smart devices. Connect it with your email, calendar, smart home gadgets, and more for a unified experience.</p>
                    </div>
                    <div className="w-[378px]">
                        <div

                            className="h-[248px] bg-cover bg-center relative rounded-sm"
                            style={{
                                backgroundImage: `url(${Global})`
                            }}
                        >
                            <div className="flex items-center h-full">
                                <Image width={151} height={149} alt="globe" src="/globe.png" className="mx-auto" />
                            </div>
                            <Image width={32} height={32} alt="globe-user1" src="/globe-user1.png" className="mx-auto absolute top-[30px] left-[100px]" />
                            <Image width={32} height={32} alt="globe-user2" src="/globe-user2.png" className="mx-auto absolute top-[30px] right-[100px]" />
                            <Image width={32} height={32} alt="globe-user3" src="/globe-user3.png" className="mx-auto absolute top-[120px] right-[40px]" />
                            <Image width={32} height={32} alt="globe-user4" src="/globe-user4.png" className="mx-auto absolute bottom-[10px] right-[160px]" />
                            <Image width={32} height={32} alt="globe-user5" src="/globe-user5.png" className="mx-auto absolute top-[120px] left-[60px]" />
                        </div>
                        <h2 className="font-bold poppins text-[20px] my-2 text-white">Loved by People Around the Globe</h2>
                        <p className="text-[#989898] text-sm roboto-mono">From bustling cities to quiet suburbs, Voxify is transforming lives across the world. Professionals use it to stay on top of their schedules.</p>
                    </div>
                </div>
            </div>
        </>
    )
} 