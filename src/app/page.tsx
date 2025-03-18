import { Hero } from "@/components/Home/Hero";
import { Features } from "@/components/Home/Features";
import { HowIsWork } from "@/components/Home/howitworks";
import { FAQ } from "@/components/Home/faq";
import { Testimonials } from "@/components/Home/testimonials";
import { Pricing } from "@/components/Home/pricing";
import { Subcribe } from "@/components/Home/subcribe";
import { Footer } from "@/components/footer";

const Home = () => {
    return (
        <>
            <Hero />
            <Features />
            <HowIsWork />
            <FAQ />
            <Testimonials />
            <Pricing />
            <Subcribe />
            <Footer />
        </>
    )
}

export default Home;
