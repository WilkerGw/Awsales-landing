// components/AboutAwSalesSection.tsx
"use client";

import Image from "next/image";
import InteractiveCircle from "./InteractiveCircle";
// NOVO: Importamos o hook useInView
import { useInView } from "react-intersection-observer";

const AboutAwSalesSection = () => {
  // NOVO: Hooks para observar cada elemento que será animado em cascata
  const { ref: titleRef, inView: titleIsVisible } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: paragraphRef, inView: paragraphIsVisible } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: cardRef, inView: cardIsVisible } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: circleRef, inView: circleIsVisible } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    // REMOVIDO: A classe 'overflow-hidden' foi removida para evitar problemas em telas móveis.
    <section className="relative bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Coluna da Esquerda: Título, Texto e Card */}
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* ALTERADO: Adicionamos a ref e as classes de animação */}
          <h2
            ref={titleRef}
            className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-8 leading-tight tracking-tight transition-all duration-700 ease-out ${
              titleIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            Afinal, o que é <br />
            <span className="aurora-text">AwSales?</span>
          </h2>
          {/* ALTERADO: Adicionamos a ref e as classes de animação com delay */}
          <p
            ref={paragraphRef}
            className={`text-lg md:text-xl text-[#C8D3E3] leading-relaxed max-w-xl mb-12 transition-all duration-700 ease-out delay-200 ${
              paragraphIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            A Awsales é uma I.A conversacional que aumenta a margem de lucro do
            seu <span className="font-bold text-white">negócio</span> em{" "}
            <span className="font-bold text-white">apenas 14 dias.</span>
          </p>
          {/* ALTERADO: Adicionamos a ref e as classes de animação com mais delay */}
          <div
            ref={cardRef}
            className={`bg-[#181E26] border border-[#2A313A] rounded-2xl p-6 md:p-8 max-w-md w-full text-left shadow-lg transition-all duration-700 ease-out delay-300 ${
              cardIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            <div className="flex items-center mb-4">
              <Image src="/images/chat.png" alt="Chat Bubble" width={40} height={40} className="mr-3 flex-shrink-0" />
              <p className="text-sm text-[#828E9D] font-semibold">
                Nossa inteligência Artificial funciona através de um ciclo
                virtuoso chamado Flywheel Conversacional.
              </p>
            </div>
            <p className="text-base text-[#F2F9FE] leading-relaxed">
              Ela entende o que seu cliente deseja, se conecta de forma
              autêntica, o ajuda de maneira genuína e vende. Tudo de forma
              automática e em prol da sua empresa e seus clientes.
            </p>
          </div>
        </div>

        {/* Coluna da Direita: Círculo Interativo */}
        <div className="lg:w-1/2 w-full mt-12 lg:mt-0 flex items-center justify-center">
          {/* ALTERADO: Adicionamos a ref e as classes de animação */}
          <div
            ref={circleRef}
            className={`transform scale-[0.6] sm:scale-75 md:scale-85 lg:scale-100 transition-all duration-700 ease-out delay-200 ${
              circleIsVisible ? 'opacity-100 scale-1' : 'opacity-0 scale-90'
            }`}
          >
            <InteractiveCircle />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutAwSalesSection;