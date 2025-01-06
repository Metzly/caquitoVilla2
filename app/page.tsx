import Slideshow from "@/components/atoms/carrusel";
import SubTitle from "@/components/atoms/subTitle";
import InfoSection from "@/components/molecules/infoSection";
import PricesSection from "@/components/molecules/pricesSection";
import PricesViewCel from "@/components/molecules/pricesViewCel";

const images = [
  '/slideshow/Caquito.png',
  '/slideshow/slide2.jpg',
  '/slideshow/slide3.jpg',
  '/slideshow/slide4.jpg',
  '/slideshow/slide5.jpg',
  '/slideshow/slide6.jpg',
  '/slideshow/slide7.jpg',
  '/slideshow/slide8.jpg',
  '/slideshow/slide9.jpg',
  '/slideshow/slide10.jpg',
  '/slideshow/slide11.jpg',
  '/slideshow/slide12.jpg'
];

export default function Home() {
  return (
    <div>
      <div className="h-screen content-center md:hidden">
        <Slideshow images={images}/>    
        <div id="infoCel">
          <InfoSection />
        </div>    
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
        <PricesSection estadia="DayPass" info="La tarifa por la estadía es de 10,000 DOP por un periodo de 8 horas, desde las 11:00 a.m. hasta las 7:00 p.m. Cada hora adicional tiene un costo de 1,000 DOP. La capacidad máxima es de 15 personas, cada persona adicional tiene un cargo de 500 DOP. Los visitantes no tienen acceso al interior de la casa, solo al exterior (baños, piscina, área social, parrilla)." imgRuta= "/slideshow/slide4.jpg" />
        <PricesSection estadia="Amanecida (por noche)" info="La tarifa para la estadía nocturna es de 15,000 DOP, desde las 11:00 a.m. hasta las 3:00 p.m. del día siguiente. La capacidad es para 8 personas, y los visitantes tienen acceso a todas las áreas de la casa." imgRuta= "/slideshow/slide7.jpg" />
      </div>   

      <div id="pricesCel" className="h-screen py-4 mt-44 md:hidden content-center bg-[url('/img/bgPrices.jpg')] bg-cover max-[400px]:mt-52 max-[350px]:mt-56">
        <div className="text-center mb-10">
          <h2 className="font-mumbai-sticker text-6xl">Precios</h2>
        </div>
        <PricesViewCel estadia="DayPass" info="La tarifa por la estadía es de 10,000 DOP por un periodo de 8 horas, desde las 11:00 a.m. hasta las 7:00 p.m. Cada hora adicional tiene un costo de 1,000 DOP. La capacidad máxima es de 15 personas, cada persona adicional tiene un cargo de 500 DOP. Los visitantes no tienen acceso al interior de la casa, solo al exterior (baños, piscina, área social, parrilla)." />
        <PricesViewCel estadia="Amanecida (por noche)" info="La tarifa para la estadía nocturna es de 15,000 DOP, desde las 11:00 a.m. hasta las 3:00 p.m. del día siguiente. La capacidad es para 8 personas, y los visitantes tienen acceso a todas las áreas de la casa." />
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
