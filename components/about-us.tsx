import { Link } from "@nextui-org/link"
import { Image } from "@nextui-org/image"

export const  About = () => {
    return(
        <main className="flex  flex-col ">
            <div className="flex grow flex-col gap-4 md:flex-row">
                
                <div className="flex p-6 md:w-3/5  ">
                    {/* Add Hero Images Here */}
                    <Image
                        src="/doctor.jpg"
                        
                        className="hidden md:block"
                        alt="Screenshots of the dashboard project showing desktop version"
                    />
                    <Image
                        src="/hero-mobile.png"
                        width={560}
                        height={620}
                        className="block md:hidden"
                        alt="Screenshot of the dashboard project showing mobile version"
                    />
                </div>
                <div className="flex flex-col mt-4 md:w-2/5 ">
                    <h1 className="text-5xl font-bold mb-2">What we offer in reproductive health</h1>
                    <p className="text-lg mt-[20px]">Medical eligibility criteria.</p>
                    <p className="text-lg mt-[20px]">Methods insights.</p>
                    <p className="text-lg mt-[20px]">How-To-Guides.</p>
                    <p className="text-lg mt-[20px]">Effectiveness Rating.</p>
                    <p className="text-lg mt-[20px]">Side Effects.</p>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-8 rounded">Explore</button>
                </div>
            </div>
         </main>
    );

}