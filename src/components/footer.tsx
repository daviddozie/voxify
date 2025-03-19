import Image from "next/image";
import TwitterIcon from "@/asset/svg/twitter.svg";
import FacebookIcon from "@/asset/svg/facebook.svg";
import InstagramIcon from "@/asset/svg/instagram.svg";
import LinkedinIcon from "@/asset/svg/linkedin.svg";

export const Footer = () => {
  const socialIcons = [
    { icon: TwitterIcon, alt: "Twitter" },
    { icon: FacebookIcon, alt: "Facebook" },
    { icon: InstagramIcon, alt: "Instagram" },
    { icon: LinkedinIcon, alt: "LinkedIn" },
  ];

  const footerNav = [
    {
      label: "Company",
      list: ["Home", "Features", "How it works", "FAQ", "Testimonials"],
    },
    {
      label: "Privacy & Security",
      list: ["Privacy Policy", "Security Policy", "Term and Conditions"],
    },
  ];

  return (
    <footer className="px-[100px] pt-[100px] pb-[70px] flex justify-between items-center">
      <div>
        <h1 className="roboto-mono text-white font-bold text-[32px]">Voxify</h1>
        <p className="text-white poppins text-sm my-2">
          Follow us on our social media pages
        </p>
        <div className="flex gap-8 items-center py-6">
          {socialIcons.map((social, index) => (
            <Image
              key={index}
              src={social.icon}
              width={16}
              height={16}
              alt={social.alt}
            />
          ))}
        </div>
        <p className="text-white poppins">&copy; {new Date().getFullYear()} All rights reserved</p>
      </div>

      {/* Footer Navigation Section */}
      <div className="flex gap-16">
        {footerNav.map((nav, index) => (
          <div key={index}>
            <h2 className="poppins text-base font-bold text-white">{nav.label}</h2>
            <ul className="text-white mt-4">
              {nav.list.map((item, index) => (
                <li key={index} className="py-2 poppins text-sm font-[300]">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};
