import { Image } from "@nextui-org/image"

export const  About = () => {
    return(
        <main className="flex flex-col mt-[20px]">
            <div className="flex grow flex-col gap-4 md:flex-row">
                
                <div className="flex md:w-3/5  ">
                    {/* Add Images Here */}
                    <Image
                        src="/doctor.jpg"
                        
                        className="hidden md:block"
                        alt="Doctor"
                    />
                    
                </div>
                <div className="flex flex-col mt-4 md:w-2/5 ">
                    <h1 className="text-5xl font-bold mb-2">What we offer in reproductive health</h1>
                    <ul>
                        <li className="text-lg mt-[20px]">Medical eligibility criteria.</li>
                        <p className="text-lg mt-[20px]">Methods insights.</p>
                        <p className="text-lg mt-[20px]">How-To-Guides.</p>
                        <p className="text-lg mt-[20px]">Effectiveness Rating.</p>
                        <p className="text-lg mt-[20px]">Side Effects.</p>
                    </ul>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-8 rounded">Explore</button>
                </div>
            </div>
         </main>
    );

}