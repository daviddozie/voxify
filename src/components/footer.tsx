import Image from "next/image"
import TwitterIcon from "@/asset/svg/twitter.svg"
import FacebookIcon from "@/asset/svg/facebook.svg"
import InstagramIcon from "@/asset/svg/instagram.svg"
import LinkedinIcon from "@/asset/svg/linkedin.svg"

export const Footer = () => {

    const socialIcons = [
        TwitterIcon, FacebookIcon, InstagramIcon, LinkedinIcon
    ] 

    return (
        <>
        <div className="p-[100px]">
            <div>
                <h1 className="roboto-mono text-white font-bold text-[32px]">Voxify</h1>
                <p className="text-white poppins text-sm my-2">Follow us on our social media page</p>
                <div className="flex gap-8 items-center">
                    {socialIcons.map((icon, index) => (
                        <Image key={index} src={icon} width={16} height={16} alt="social-icon"/>
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}