import { NavBar } from "../navbar";
import { Button } from "../ui/button";

export const Hero = () => {
    const ratings = [
        "“Highly Recommended”",
        "“One Of My Favorite Tool”",
        "“Very Integrative AI Assistant”",
    ];

    return (
        <>
            <NavBar />
            <div className="relative mt-[100px] flex flex-col items-center text-center">
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 h-[250px] bg-blue-500 blur-[120px] opacity-30"></div>
                <div className="flex gap-6 justify-between max-w-[60%] mx-auto">
                    {ratings.map((rate, index) => (
                        <div key={index}>
                            <p className="text-center">⭐⭐⭐⭐⭐</p>
                            <p className="text-sm text-white roboto-mono font-[300]">{rate}</p>
                        </div>
                    ))}
                </div>
                <div className="relative">
                    <div className="absolute inset-0 w-[50%] h-[160%] bg-blue-500 blur-[90px] opacity-40 mx-auto"></div>
                    <h1 className="relative poppins font-bold text-white text-[65px]">
                        Introducing the AI voice <br /> assistant.
                    </h1>
                </div>
                <p className="text-sm roboto-mono font-normal text-[#989898]">
                    Always ready to assist you with ease, simplify your daily tasks,
                    provide personalized recommendations, and keep you <br /> seamlessly
                    connected to what matters most.
                </p>
                <div
                    className="w-full h-[600px] bg-cover bg-center mt-8"
                    style={{
                        backgroundImage: `url('https://s3-alpha-sig.figma.com/img/f36c/6edd/1318b6d55d2f2107d9f2dee8e6579d6c?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jkRx76eOuNZAj7QhYZ-yeEUG2kkvSM2Hn9-LJHfQAJd4aBMRYFEuE-kUhXC3wVeEL9DezqPP32-jaI1pv8KZc2I-9vUBCwJeDXBmCN0WWrfKrsi4BdIPFFBlTAKMERaHbU2xN5Jc-vmeDf7K8dIC4PKkal1IzIUg-GmGOBUKUCojg0ZDJRxmQVy1Tunuj9ZeF28hy59~RTJ2roosbZuoSMAau9xijRpmYXJEts0pEBcPUTi4Ut6Xd6bmAUlzR0UJAStVLsw-bB~UtmXm0hVgXWB~jULic~Bbo2O571pYCWPsaOdt1UhOggtccbIQz0LdLiye7Dqndsr2qit2T-v4sg__')`,
                    }}
                >
                    <div className="flex items-center gap-[9px] mx-auto w-full justify-center mt-6">
                        <Button
                            className="bg-[#0370EB] text-white font-bold py-4 px-6 roboto-mono rounded-[50px] shadow-none"
                            style={{ boxShadow: "inset 0px 4px 4px 0px #A0C0FF" }}
                        >
                            Get Started
                        </Button>
                        <Button className="text-white bg-transparent border border-[#0370EB] rounded-[50px] py-4 px-6 roboto-mono">
                            Explore Now
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};
