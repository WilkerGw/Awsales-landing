"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
// NOVO: Importamos o hook useInView da biblioteca que instalamos
import { useInView } from "react-intersection-observer";

// Dados para o carrossel de texto e imagem principal
const heroCarouselItems = [
  { topText: "Encante Clientes", image: "/images/hero-image-1.png" },
  { topText: "Aumente o Comparecimento", image: "/images/hero-image-2.png" },
  { topText: "Gere mais Leads", image: "/images/hero-image-3.png" },
  { topText: "Aumente suas Vendas", image: "/images/hero-image-4.png" },
];

const HeroSection = () => {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex(
        (prevIndex) => (prevIndex + 1) % heroCarouselItems.length
      );
    }, 4000); // Muda a cada 4 segundos

    return () => clearInterval(interval);
  }, []);

  const currentItem = heroCarouselItems[currentHeroIndex];

  // NOVO: Configurando o 'useInView' para cada elemento que queremos animar.
  // 'triggerOnce: true' faz a animação ocorrer apenas uma vez.
  // 'threshold' define qual porcentagem do elemento precisa estar visível para disparar a animação.
  const { ref: tagRef, inView: tagIsVisible } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: imageRef, inView: imageIsVisible } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: titleRef, inView: titleIsVisible } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: paragraphRef, inView: paragraphIsVisible } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: buttonRef, inView: buttonIsVisible } = useInView({ triggerOnce: true, threshold: 0.1 });


  return (
    // SEÇÃO PRINCIPAL:
    <section className="relative bg-black text-white flex flex-col items-center justify-center overflow-hidden w-full min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      
      {/* Tag de Destaque */}
      {/* ALTERADO: Adicionamos a 'ref' e as classes de transição condicional */}
      <div 
        ref={tagRef}
        className={`bg-[#181E26] text-[#90A2AF] text-sm font-medium px-4 py-1 rounded-full inline-block mb-4 transition-all duration-700 ease-out ${tagIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
      >
        FAÇA COMO OS MELHORES PLAYERS
      </div>

      {/* Efeito de brilho no fundo */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="m-auto w-[600px] h-[600px] bg-[#8CE0FF] rounded-full blur-[50px] opacity-15"></div>
      </div>

      {/* Conteúdo Principal da Hero */}
      <div className="z-10 text-center flex flex-col items-center justify-center w-full">

        {/* IMAGEM RESPONSIVA */}
        {/* ALTERADO: Adicionamos a 'ref' e as classes de transição condicional */}
        {/* A animação do carrossel continua funcionando normalmente */}
        <div 
          ref={imageRef} 
          className={`mt-10 animate-fade-in-scale-up flex items-center justify-center w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 transition-all duration-700 ease-out delay-200 ${imageIsVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
        >
          <Image
            src={currentItem.image}
            alt="AI Agent"
            width={180}
            height={180}
            className="object-contain"
            key={currentItem.image}
            priority
          />
        </div>

        {/* TÍTULO RESPONSIVO */}
        {/* ALTERADO: Adicionamos a 'ref' e as classes de transição condicional */}
        <h1 
          ref={titleRef}
          className={`text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-tight tracking-[-0.04em] mt-8 mb-4 max-w-4xl transition-all duration-700 ease-out delay-300 ${titleIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          <span className="block h-[1.2em] overflow-hidden">
            <span
              className="animate-slide-up-fade"
              key={currentItem.topText}
            >
              {currentItem.topText}
            </span>
          </span>
          <span className="block text-gray-400 text-3xl sm:text-4xl md:text-6xl lg:text-7xl mt-2">
            com{" "}
            <span className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl aurora-text">
              AwSales
            </span>
          </span>
        </h1>
        
        {/* PARÁGRAFO RESPONSIVO */}
        {/* ALTERADO: Adicionamos a 'ref' e as classes de transição condicional */}
        <p 
          ref={paragraphRef}
          className={`text-lg md:text-xl text-[#C8D3E3] leading-relaxed max-w-2xl mt-6 md:mt-8 mb-8 transition-all duration-700 ease-out delay-500 ${paragraphIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          Agentes de IA personalizados para escalar lucro, encantar clientes e
          cortar custos.
        </p>
        
        {/* BOTÃO (Call to Action) */}
        {/* ALTERADO: Adicionamos a 'ref' e as classes de transição condicional */}
        <div 
          ref={buttonRef}
          className={`mt-10 transition-all duration-700 ease-out delay-700 ${buttonIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          <Link href="https://awsales.yayforms.link/DpQj0D2" target="_blank">
            <button className="cursor-pointer flex items-center justify-center px-6 py-3 text-white font-semibold rounded-full shadow-lg bg-gradient-to-r from-blue-900 to-blue-500 hover:bg-gradient-to-t hover:from-blue-500 hover:to-blue-900 transition-all duration-300 ease-in-out transform hover:scale-105">
              Começar Agora
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </Link>
        </div>
      </div>

      {/* Estilos CSS para as animações do carrossel continuam aqui */}
      <style jsx>{`
        /* Animação para o texto (slide e fade) */
        @keyframes slide-up-fade {
          0% {
            opacity: 0;
            transform: translateY(100%);
          }
          20%, 80% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-100%);
          }
        }
        .animate-slide-up-fade {
          display: inline-block;
          animation: slide-up-fade 4s ease-in-out infinite;
        }

        /* Animação para a imagem (fade e scale) */
        @keyframes fade-in-scale-up {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          20%, 80% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(1.2);
          }
        }
        .animate-fade-in-scale-up {
          animation: fade-in-scale-up 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;