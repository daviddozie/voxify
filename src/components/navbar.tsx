import Link from "next/link"
import { Button } from "./ui/button"

interface NavBarProps {
    section?: string;
}

export const NavBar = ({ section }: NavBarProps) => {

    const nav = [
        "Home", "Features", "Howitwoks", "FAQ", "Testimonials"
    ] 

    return (
        <>
            <header className="border flex justify-between items-center border-white/10 py-[10px] px-6 rounded-[100px] bg-white/10 backdrop-blur-lg">
                <Link href="/" className="text-[20px] font-bold roboto-mono text-white">Voxify</Link>
                <nav>
                    <ul className="flex gap-6">
                        {nav.map((nav, index) => (
                            <li className="roboto-mono text-sm font-normal text-white/90" key={index}>
                                <a href={`#${section}`}>{nav}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div>
                    <Button className="text-white bg-transparent rounded-[50px] py-4 px-6 roboto-mono">Login</Button>
                    <Button className="text-white bg-[#0370EB] rounded-[50px] py-4 px-6 roboto-mono">Get Started</Button>
                </div>
            </header>
        </>
    )
}