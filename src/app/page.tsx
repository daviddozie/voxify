import { Hero } from "@/components/Home/Hero";
import { Features } from "@/components/Home/Features";
import { HowIsWork } from "@/components/Home/howitworks";
import { FAQ } from "@/components/Home/faq";
import { Testimonials } from "@/components/Home/testimonials";

const Home = () => {
    return (
        <>
            <Hero />
            <Features />
            <HowIsWork />
            <FAQ />
            <Testimonials />
        </>
    )
}

export default Home;
