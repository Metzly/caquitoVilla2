import Slideshow from "@/components/atoms/carrusel";
import SubTitle from "@/components/atoms/subTitle";
import InfoSection from "@/components/molecules/infoSection";
import NavBar from "@/components/molecules/navBar"
import PricesSection from "@/components/molecules/pricesSection";
import PricesViewCel from "@/components/molecules/pricesViewCel";
import Image from "next/image";

const images = [
  '/pool.jpg',
  '/Caquito.png'
];

export default function Home() {
  return (
    <div>
      <div className="h-screen content-center md:hidden">
        <Slideshow images={images}/>    
        <InfoSection />    
      </div>

      <div className="h-screen content-center hidden md:block">
        <Slideshow images={images}/>   
      </div>

      <div id="info" className="h-screen content-center hidden md:block">
        <InfoSection />
      </div>

      <div id="prices" className="h-auto hidden md:block">
        <div className="text-center mb-10">
          <h2 className="font-mumbai-sticker text-6xl text-teal-600">Precios</h2>
        </div>
        <PricesSection estadia="DayPass" info="La tarifa por la estadía es de 10,000 DOP por un periodo de 8 horas, desde las 11:00 a.m. hasta las 7:00 p.m. Cada hora adicional tiene un costo de 1,000 DOP. La capacidad máxima es de 15 personas, cada persona adicional tiene un cargo de 500 DOP. Los visitantes tienen acceso a todas las áreas de la casa (cocina, baños, etc.), con la excepción de las habitaciones." />
        <PricesSection estadia="Amanecida (por noche)" info="La tarifa para la estadía nocturna es de 15,000 DOP, desde las 11:00 a.m. hasta las 3:00 p.m. del día siguiente. La capacidad es para 10 personas, y los visitantes tienen acceso a todas las áreas de la casa." />
      </div>   

      <div id="prices" className="h-screen py-4 mt-24 md:hidden content-center bg-black/80">
        <div className="text-center mb-10">
          <h2 className="font-mumbai-sticker text-6xl text-teal-600">Precios</h2>
        </div>
        <PricesViewCel estadia="DayPass" info="La tarifa por la estadía es de 10,000 DOP por un periodo de 8 horas, desde las 11:00 a.m. hasta las 7:00 p.m. Cada hora adicional tiene un costo de 1,000 DOP. La capacidad máxima es de 15 personas, cada persona adicional tiene un cargo de 500 DOP. Los visitantes tienen acceso a todas las áreas de la casa (cocina, baños, etc.), con la excepción de las habitaciones." />
        <PricesViewCel estadia="Amanecida (por noche)" info="La tarifa para la estadía nocturna es de 15,000 DOP, desde las 11:00 a.m. hasta las 3:00 p.m. del día siguiente. La capacidad es para 10 personas, y los visitantes tienen acceso a todas las áreas de la casa." />
      </div> 

      <div id="rules" className="my-14 md:mt-20 md:mb-14 text-center content-center px-14">
        <SubTitle title="Nuestras reglas" />
          <ul className="list-inside list-decimal space-y-2 mt-10">
            <li>No se permite el uso de armas de fuego ni armas blancas en la propiedad.</li>
            <li>Respetar el horario de estadía.</li>
            <li>Dejar todo en orden (limpio).</li>
            <li>Depositar la basura en los zafacones correspondientes.</li>
            <li>Cualquier daño ocasionado a la propiedad deberá ser informado al anfitrión y será sancionado.</li>
            <li>La seguridad de la piscina es responsabilidad de cada huésped; no dejar a los niños sin supervisión.</li>
            <li>Respetar el mobiliario y los equipos de la propiedad; su mal uso puede ser penalizado.</li>
          </ul>
      </div>
    </div>
  );
}