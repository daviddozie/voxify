import { Button } from "../ui/button"
import Image from "next/image"

export const HowIsWork = () => {
    return (
        <>
            <div className="mt-[80px]">
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
                                backgroundImage: `url('https://s3-alpha-sig.figma.com/img/29b1/46ab/c2891e14a77d7e86ce417e558fe043a8?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=iX9d12q9n0p~3GMftrBX0s2L7xsdYKaTOrnvyAt0nq7bWjmkvQIV5JSCMmfJRlvbMY9vHu3Ou7I~z-eAsE2dVfWCwPp4b31cI3Ogm~Y3wtaArCplL4zo5CozPIO7vvFzTL1UJuvlqAK7ZPLSSHAcI3~3OsqUFqZ8z~RoD9Dk8YEgSQOm7TCxAqXBpieOQQfyBKIvuhn0Ss8gnB5Pe0xx1kxawhNWRqSUUvmIRR74f4ycY3JgDfVUhEiiFF41ISKYCMxmYCyDdw9gvynbPF6vELjls79SpIdhPUM8YzxaaWhQEGXCcYUwbCyogu62lSnSZEpHDiD5ARYxFFn46FnyQQ__')`
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
                                backgroundImage: `url('https://s3-alpha-sig.figma.com/img/9aec/d1ef/5efc563c0cd149f85e6896e4b432bcf9?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QIs9qEeSMRTWTckBaixci9eNP5PNg0kw~9T6TumGrkikqJ3DIZS7n5YSnj07v-nkus5gZAAenSchKKH~TrnMSG0vBPVJYX~3HdO~6bfk2XYgamG-gQ4R9FsLvfnkAwux9ixByA7gfywtPnwduCVryMbb-bRB1EDNCTgPfUiNuRm~q~S933KLi1oPGqguyEdTqcsvNjiW4Su7rgIiae9aaGv~ZRwyjEoMuDTvu7RoecZtIznvojdACnJK2OvtTVSYm0BJkeBASJRVIHD8QRi5vw4ofIWglFXFK0oPa6CJzfyDn2UX65Qh5KSQAFaMeoNc5yBJhMDRIv5YIawnlMRiog__')`
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
                                backgroundImage: `url('https://s3-alpha-sig.figma.com/img/53f3/37e1/22057a5fc1f87390235fdd42d94ceed7?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qlvebGT~gJACtpvUKhI0R0zC8owSLmpS2wHPYDUb-YKAs57Y6-WXjrcwo5K0Zv7QpSsVOHgsibfvX-qDQdJe0htJq5q2m~f9usAizV~xjeLE29CEThov7SW5q6-U1sDW7m3SXWMC94e105MhEXWR0aq1oQN93J~a3puntrfyHiFAAxo1W~nXJtRl4G4yXtR3OEZl64a4gOwMLEfD9LMRalmK26Xyx1SFxRO91mJO-~4oqUfMKPh7gMd4qvi0htbMM3q8FhWJdTkGk7M3vxsu2orikbcljI-kFMx2C53azLuIdLt3RZqRAVr9TYO74FlhpVADgdMc8TxtvK9GR-AiuQ__')`
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