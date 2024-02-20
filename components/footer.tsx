import { Link } from "@nextui-org/link";
import { Divider} from "@nextui-org/divider"
import { Logo } from "@/components/icons";

export const Footer = () => {
    return(
        <>
            <main className="flex flex-col mt-[20px] mb-[40px] ml-[290px]">
            <div className="flex grow flex-col gap-4 md:flex-row">
                
                <div className="flex flex-col mt-4 md:w-1/4 ml-[40px] ">
                    <a className="flex justify-start items-center gap-1" href="/">
                        <Logo/>
                        <p className="font-bold text-inherit">Medirafiki</p>
                    </a>
                    <p className="ml-[4px]"> © {new Date().getFullYear()}. All Rights Reserved.</p>
                </div>
                <Divider orientation="vertical"/>
                <div className="flex flex-col mt-4 md:w-1/3 ">
                    <h1 className="text-2xl font-bold mb-2">Quick Links</h1>
                    <Link href="/">Home</Link>
                    <Link href="/">Who we are</Link>
                    <Link href="/">Our philosophy</Link>
                </div>
                <Divider orientation="vertical"/>
                <div className="flex flex-col mt-4 md:w-1/4 ">
                    <h1 className="text-2xl font-bold mb-2">Contact us</h1>
                    <p>+254748674860 / +254700779399</p>
                    <Link href="mailto:info@medirafiki.ourjamii.com">info@medirafiki.ourjamii.com</Link>
                    <p>Nakuru, Kenya</p>
                </div>
                <Divider orientation="vertical"/>
                <div className="flex flex-col mt-4 md:w-1/4 mr-[80px]">
                    <h1 className="text-2xl font-bold mb-2">Social</h1>
                    <Link href="https://twitter.com">Twitter</Link>
                    <Link href="https://facebook.com">Facebook</Link>
                    <Link href="https://linkedin.com">LinkedIn</Link>
                </div>
            </div>
         </main>
            <Divider orientation="horizontal" />
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
        </>
    )
}