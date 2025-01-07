import { GetStaticProps } from 'next';
import fs from 'fs';
import path from 'path';
import Image from "next/image"
import Slideshow from "../atoms/carrusel"

export default function InfoSection(){
    return(
        <div className="px-14 text-center md:text-justify md:px-44 max-[400px]:px-10 max-[400px]:text-base">
            <div className="flex justify-center">
                <Image src="/img/logo_villa.png" width={400} height={150} alt="logo" />
            </div>
            <div>
                <p>Bienvenidos a nuestra exclusiva villa, el lugar ideal para disfrutar momentos inolvidables en familia o con amigos. Ubicada en <a href="https://maps.apple.com/?ll=18.650238,-69.622008&q=San%20Antonio%20de%20Guerra&t=m" className='underline decoration-myGreen decoration-2' >San Antonio de Guerra</a> un entorno tranquilo y rodeada de belleza natural, tiene más de 3 ríos cercas y un club a 5 minutos donde hay un restaurante, bar y parques; esta propiedad ofrece todas las comodidades que necesitas: cuenta con una cocina totalmente equipada, tres habitaciones con aire acondicionado y más de tres baños, asegurando comodidad para todos los huéspedes. <br /> <br />
                Para el entretenimiento y la diversión, la villa dispone de mesas de dominó, una parrilla para asados al aire libre, una piscina refrescante y un jacuzzi para relajarte. Combina lujo y funcionalidad en un entorno que hará de cada momento un recuerdo especial.</p>
            </div>
        </div>
    )
}