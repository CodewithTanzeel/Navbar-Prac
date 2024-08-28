import { Menu } from "lucide-react";
import Link from "next/link";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import About from "@/app/About";


function Header() {
    return (
        <header className="flex justify-between items-center p-2 bg-gray-200">
            {/* Logo - left side */}
            <h1 className="text-4xl font-bold text-yellow-500">H.</h1>

            {/* Navigation - Right side */}
            <nav>

                <Sheet>
                    <SheetTrigger className="md:hidden">
                        <Menu />
                    </SheetTrigger>
                    <SheetContent>
                        <ul>
                            <li>
                                <Link href="/page.tsx">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </SheetContent>
                </Sheet>

                <ul className="gap-x-4 hidden md:flex">
                    <li>
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        
                        <Link href="/About">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/Contact">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;