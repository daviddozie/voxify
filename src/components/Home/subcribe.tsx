import { Input } from "../ui/input"
import { Button } from "../ui/button"

export const Subcribe = () => {
    return (
        <>
            <div className="mx-[100px] pt-[120px] relative pb-[100px]">
                <h1 className="font-semibold text-white poppins text-[36px] text-center">Subscribe to Voxify today, you<br /> don’t want to miss out </h1>
                <p className="text-[#989898] roboto-mono text-sm text-center mt-4 mb-6">Unlock the power of seamless voice interaction and let Voxify simplify your everyday tasks<br />—subscribe now to experience the future of AI assistance</p>
                <div className="w-[600px] gap-2 flex mx-auto z-10 absolute">
                    <Input
                        placeholder="Enter your Email"
                        className="bg-white w-full text-[#6C757D] text-base poppins placeholder:text-[#6C757D] h-[56px] p-4 rounded-[50px]"
                    />
                    <Button
                        className="bg-[#0370EB] text-white text-base font-bold py-4 px-6 roboto-mono rounded-[50px] shadow-none"
                        style={{ boxShadow: "inset 0px 4px 4px 0px #A0C0FF" }}
                    >
                        Subscribe Now
                    </Button>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#001f3f] to-transparent pointer-events-none rounded-[20px]"></div>
            </div>
            
        </>
    )
}