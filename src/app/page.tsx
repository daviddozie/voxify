import { Hero } from "@/components/Home/Hero";
import { Features } from "@/components/Home/Features";
import { HowIsWork } from "@/components/Home/howitworks";
import { FAQ } from "@/components/Home/faq";

const Home = () => {
    return (
        <>
            <Hero />
            <Features />
            <HowIsWork />
            <FAQ />
        </>
    )
}

export default Home;
