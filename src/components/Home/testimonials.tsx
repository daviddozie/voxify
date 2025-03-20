import { Button } from "../ui/button";
import { CardSlider } from "../slide";

const Rates = [
  { quantity: "95+", label: "Satisfaction Rate" },
  { quantity: "1m", label: "Over 1 Million Tasks Completed" },
  { quantity: "20+", label: "Available in 20+ Languages" },
]

export const Testimonials = () => {

  return (
    <>
      <div className="py-[60px] bg-[#040411] px-[100px] relative">
        <div className="flex justify-center">
          <Button className="bg-white/10 py-[10px] px-[15px] backdrop-blur-lg border-white/10 border text-sm font-normal roboto-mono rounded-[24px]">
            Testimonial
          </Button>
        </div>
        <h2 className="text-[32px] font-bold text-white poppins my-3 text-center">
          Join Thousands Who Simplify Their<br /> Lives with Voxify
        </h2>
        <p className="text-sm font-normal text-center text-[#989898] roboto-mono">
          Discover how Voxify transforms daily tasks into effortless moments.
        </p>
       <CardSlider />
        <div className="flex items-center gap-[150px] justify-center">
          {Rates.map((rate, index) => (
            <div key={index}>
              <h2 className="font-bold text-center text-[32px] text-white poppins">{rate.quantity}</h2>
              <p className="text-[12px] roboto-mono text-[#989898] ">{rate.label}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
