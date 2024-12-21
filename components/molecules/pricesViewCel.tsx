import Image from "next/image";
import SubTitle from "../atoms/subTitle";

export default function PricesViewCel({ estadia, info } : {estadia: string, info: string}) {
    return (
        <div className="my-8 px-5">
            <div className="flex justify-center h-auto">
                <div className="bg-white shadow-lg w-3/4 p-8 rounded-br-lg">
                    <h1 className="text-base font-bold">{estadia}</h1>
                    <p className="text-sm">
                        {info}
                    </p>
                </div>
            </div>
        </div>
        
    );
}
