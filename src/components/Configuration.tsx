// NOVO: Adicionado para converter em um Client Component
"use client";

import React from "react";
// NOVO: Importado o hook para detecção de scroll
import { useInView } from "react-intersection-observer";
import Image from "next/image"; // Importe o componente Image

const icons = [
  { src: "/images/icon1.png", alt: "Icon 1", hoverClass: "hover-blue" },
  { src: "/images/icon2.png", alt: "Icon 2", hoverClass: "hover-green" },
  { src: "/images/icon3.png", alt: "Icon 3", hoverClass: "hover-red" },
  { src: "/images/icon4.png", alt: "Icon 4", hoverClass: "hover-purple" },
  { src: "/images/icon5.png", alt: "Icon 5", hoverClass: "hover-orange" },
  { src: "/images/icon6.png", alt: "Icon 6", hoverClass: "hover-yellow" },
  { src: "/images/icon7.png", alt: "Icon 7", hoverClass: "hover-pink" },
  { src: "/images/icon8.png", alt: "Icon 8", hoverClass: "hover-teal" },
  { src: "/images/icon9.png", alt: "Icon 9", hoverClass: "hover-indigo" },
  { src: "/images/icon10.png", alt: "Icon 10", hoverClass: "hover-lime" },
  { src: "/images/icon11.png", alt: "Icon 11", hoverClass: "hover-cyan" },
  { src: "/images/icon12.png", alt: "Icon 12", hoverClass: "hover-brown" },
  { src: "/images/icon13.png", alt: "Icon 13", hoverClass: "hover-deep-purple" },
  { src: "/images/icon14.png", alt: "Icon 14", hoverClass: "hover-amber" },
  { src: "/images/icon15.png", alt: "Icon 15", hoverClass: "hover-light-blue" },
  { src: "/images/icon16.png", alt: "Icon 16", hoverClass: "hover-emerald" },
];

const Configuration = () => {
  // NOVO: Hooks para observar cada elemento da seção
  const { ref: titleRef, inView: titleIsVisible } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: paragraphRef, inView: paragraphIsVisible } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: gridRef, inView: gridIsVisible } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="flex flex-col justify-center items-center bg-black py-20 lg:py-24 text-white gap-8">
      
      <h1
        ref={titleRef}
        className={`text-3xl md:text-5xl text-center font-bold px-4 transition-all duration-700 ease-out ${
          titleIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        Configuração simples e rápida
      </h1>
      
      <p
        ref={paragraphRef}
        className={`text-gray-400 text-base leading-relaxed text-center max-w-md mx-auto px-4 mb-8 transition-all duration-700 ease-out delay-200 ${
          paragraphIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        O nosso processo plug-and-play garante uma implementação rápida e extremamente simples.
      </p>

      <div
        ref={gridRef}
        className={`flex flex-wrap justify-center items-center gap-4 max-w-5xl px-4 transition-all duration-700 ease-out delay-300 ${
          gridIsVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        {icons.map((icon, index) => (
          <Image
            key={index}
            src={icon.src}
            alt={icon.alt}
            width={80}
            height={80}
            className={`icon-item hover-effect ${icon.hoverClass} w-16 h-16 sm:w-20 sm:h-20`}
          />
        ))}
      </div>
    </section>
  );
};

export default Configuration;