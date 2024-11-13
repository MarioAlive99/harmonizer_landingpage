import img1 from "../assets/diseno_industrial.jpg";
import img2 from "../assets/ing_ind.jpg";

const HeroSection = () => {
  return (
    <div className=" flex flex-col items-center mt-6 lg:mt-20">
        <h1 className=" text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
            Herramientas para 
            <span className=" bg-gradient-to-r from-orange-500 to-pink-800 text-transparent bg-clip-text">{" "} Ingenieros Industriales</span>
        </h1>
        <p className=" mt-10 text-lg text-center text-neutral-500 max-w-4xl">
            Optimiza procesos, mejora la eficiencia y facilita la toma de decisiones en entorno de manufacturas 
            y operaciones. Ofrece soluciones avanzadas de analisis, simulación y planificación, permitiendo una
            gestión agil de recursos y armonizar la producción en cada etapa.
        </p>
        <div className=" flex justify-center my-10">
            <a href="#" className=" bg-gradient-to-r from-orange-500 to-pink-800 py-3 px-4 mx-3 rounded-md">
                ¡Comienza gratis!
            </a>
            <a href="#" className=" py-3 px-4 mx-3 rounded-md border">
                Documentación
            </a>
        </div>
        <div className=" flex mt-10 justify-center">
            <img src={img1} alt="Diseño Industrial para Harmonizer" className=" rounded-lg w-1/2 border border-orange-700 border-pink-400 mx-2 my-4" />
            <img src={img2} alt="Ingenieria Industrial" className="rounded-lg w-1/2 border border-orange-700 border-pink-400 mx-2 my-4" />
        </div>
    </div>
  )
}

export default HeroSection