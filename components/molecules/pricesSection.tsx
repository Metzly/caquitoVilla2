import Image from "next/image";
import SubTitle from "../atoms/subTitle";

export default function PricesSection({ estadia, info, imgRuta } : {estadia: string, info: string, imgRuta: string}) {
    return (
        <div className="flex justify-center my-8 px-5">
            <div className="relative flex flex-row items-center w-full max-w-5xl h-auto">
                <div className="z-10 bg-white shadow-lg w-2/5 p-8 -mr-16">
                    <h1 className="text-base md:text-lg font-bold">{estadia}</h1>
                    <p className="text-sm md:text-base">
                        {info}
                    </p>
                </div>
                <div className="w-2/3">
                    <Image src={imgRuta} width={700} height={500} alt="piscina" className="rounded-md" />
                </div>
            </div>
        </div>
        
    );
}
