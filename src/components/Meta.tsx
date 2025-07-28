// NOVO: Adicionado para converter em um Client Component
"use client";

import React from "react";
import Image from "next/image";
// NOVO: Importado o hook para detecção de scroll
import { useInView } from "react-intersection-observer";

const Meta = () => {
  // NOVO: Hook para observar o card principal
  const { ref: cardRef, inView: cardIsVisible } = useInView({
    triggerOnce: true,
    threshold: 0.3, // A animação começa quando 30% do card estiver visível
  });

  return (
    <section className="flex items-center justify-center h-auto md:h-auto bg-custom-dark-blue p-4 bg-black">
      {/* ALTERADO: Adicionada ref e classes de animação ao card */}
      <div
        ref={cardRef}
        className={`
        relative
        flex
        flex-col
        items-center
        justify-center
        text-center
        p-8
        lg:p-16
        rounded-3xl
        shadow-2xl
        max-w-4xl
        w-full
        backdrop-filter
        backdrop-blur-sm
        bg-white
        bg-opacity-80
        meta-gradient-box
        border-t border-l border-white border-opacity-20
        transition-all duration-1000 ease-out ${
          /* Animação de fade e escala */
          cardIsVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }
      `}
      >
        <div className="mb-6">
          <Image
            src="/images/metaNova.png"
            alt="Meta Business Partners Logo"
            width={500}
            height={500}
            className="w-150"
          />
        </div>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
          Somos <span className="font-bold">Meta Business Partner</span> – o que
          significa acesso antecipado às tecnologias mais poderosas do WhatsApp,
          suporte direto com a Meta e expertise validada globalmente.
        </p>
      </div>
    </section>
  );
};

export default Meta;