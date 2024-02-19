import { Link } from "@nextui-org/link";
import { Divider } from "@nextui-org/divider"

export const Benefits = () => {
    return(
        <main className="flex flex-col mt-[20px]">
            <div className="flex grow flex-col gap-4 md:flex-row">
                
                <div className="flex flex-col mt-4 md:w-1/2  ">
                <h1 className="text-2xl font-bold mb-2">Benefits of family planning</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non tempus risus.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non tempus risus.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non tempus risus.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non tempus risus.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non tempus risus.</p>
                </div>
                <Divider orientation="vertical"/>
                <div className="flex flex-col mt-4 md:w-1/2 ">
                    <h1 className="text-2xl font-bold mb-2">Common types of contraceptive methods</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non tempus risus.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non tempus risus.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non tempus risus.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non tempus risus.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non tempus risus.</p>
                </div>
            </div>
         </main>
    )
}