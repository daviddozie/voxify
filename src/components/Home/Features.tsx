import { Button } from "../ui/button"
import MicIcon from "@/asset/svg/mic.svg"
import Image from "next/image"

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
                                backgroundImage: `url('https://s3-alpha-sig.figma.com/img/c253/94d4/0525c0ab4086a6665aee84f0a4daa999?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZATd8xEXZbygwTNAm1zQ9unVoOUOdARDWGPbOrBAi7kpiCl5EXfrtndyHFRr4bjS23bsIoGcYusNutZXGP52hvI3Yl-n9LFHN4JFg7dB-PJMr1Ve0Bc4L~IaMOYLKIOqB4MWioklfNBApV3TPO2zuWqyHCrzAGtKxxL8Ad3G6sxbfNWZEqJfhGFbbCeCk-6PcJVzb4UiGl2nNwUjlgMMKiTmwRdBpQnXft9c7nMcaXn2d811EEGu5qDLsQMukPsoWzmYxT9FlpIF1gxXhYAy36Avp~fhh4tYHP4y4uVWrZgxZ0jpsoPFvVxJD0u3IZ7PbAcG~od23XdC2m8vkRw1PA__')`,
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
                                backgroundImage: `url('https://s3-alpha-sig.figma.com/img/d51e/2e7c/097b633fb5fa38053409963d754f46c8?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kzyqGyAxvG5w2KeB9uocUQ9qE42wRTkVuX30T23iGyZ9kStN3Y2g6TbzhsZQjSBRVjPN7ov9u7YodsGY5yP9ZIeeDuJRNAt5ATJqrnLQFFz2g4fwHRUVou0D2mqrotOroNDqtXopDiipILX49bG0bY7kW6INi78soG3ezen4PKMpfLWFVnCJS91tJS0QzkCn-3XLY4NJv5L5XIHbqhtr~8xXgM5tfOaqOEv7PrGzh3X~BV2WUrzCh35kdpMuc2SKwYvEv3jLcBNbyM43E0m10csXUYcUIG0CC8aPKc9A5VmwHPvi7uMVp~cQHCpwwegxTvUeuNs2x11iSf0UxBtaWg__')`
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
                                backgroundImage: `url('https://s3-alpha-sig.figma.com/img/d63e/feac/3a57dba45eb9bad71b99942c81316636?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HFWTktmzkb07ocRYKfpjZrRIBhoxCuS~YNsz34cdg3NfOgesribWkegj2hqbULGRtkN4ny72qk0dQvioOWtmZ0x3fHB4IkSyjmnGcY3oA7FKYFmSWIdAmlVN1HUyZlBwaJRAGgHiGLRd5Iukx6yS7j2th~6-t5TVvBkCqSZpAU2L1kpdcxYu6Mja5c4tiFqp7PrnSIvFT-N4H8wodQuUB2otgfW6p~3fiibsrGT29MrimzrwfCvxitO3s2I6WHZNFGneb5aCEwBJx1OxuSOLddw5eQikTrZmDyYx5GjHcoc2Ogc~L-9CTRPNzCFigj6QD9kZ-mLMmaxPrkpWaUj-UQ__')`
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
                                backgroundImage: `url('https://s3-alpha-sig.figma.com/img/7098/98e5/4fefb2cdc6c653b9f565b0918d7f7362?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ssWQCFShNMPglu3-o0dcQOrwVLGDtyEkTq4xeDtSodWfniNLkb1G~f85krXRRPNycXg4m3W5k7T2YV5Xq~h9OkOuMYL~eFiE~XbdXLSWXwGgNfOKJKU9-EZHAP9Uwlnjo7ESf5Lc2JunzLuYplD810FKzHECg8dOeJeb-gtPLu4du2Fu3d79BfnH1LhOgblUZ-wRuPrWgNGvV7mc5EQjfl~sF2Lp-dc232GABgJgrZj2xE8revmrlgw-Mj38ui7m0KKXgRIsJY4~yEzBo-hDE-zNfxk6WrlrNDO4Gne0n5bRqd-rLVqU1Mpm4EsafHdBTcriYajtVtwXfohHzSefSQ__')`,
                            }}
                        >
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}