import { Image } from "@nextui-org/image"

export const  Hero = () => {
    return(
        <main className="flex  flex-col ">
            <div className="flex grow flex-col gap-4 md:flex-row">
                <div className="flex flex-col mt-4 md:w-2/5 ">
                    <h1 className="text-5xl font-bold mb-2">Discover Your Ideal Contraceptive Method</h1>
                    <p className="text-lg mt-[20px]">We simplify the journey to finding your perfect contraceptive match, providing clear and concise insights into a diverse range of methods. Take control of your reproductive well-being, explore various contraceptive methods now and make informed choices for a healthier future.</p>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-8 rounded">Discover</button>
                </div>
                <div className="flex p-6 md:w-3/5  ">
                    {/* Add Hero Images Here */}
                    <Image
                        src="/medicine.jpg"
                        
                        className="hidden md:block"
                        alt="Medicine"
                    />
                    
                </div>
            </div>
         </main>
    );

}