import NextLink from "next/link";
import { Logo } from "@/components/icons";
import { Link } from "@nextui-org/link";

export const Footer = () => {
    return(
        <div>

            <footer className="w-full flex items-left justify-center py-3">	
                <Link
                    isExternal
                    className="flex items-center gap-1 text-current"
                    href="https://ourjamii.com/"
                    title="ourjamii.co.ke homepage"
                    target="_blank"
                >
                    <span className="text-default-600">Powered by</span>
                    <p className="text-primary">OurJamii</p>
                </Link>

                
            </footer>
            
        </div>
    )
}