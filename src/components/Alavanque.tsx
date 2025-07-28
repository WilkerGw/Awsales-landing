import React from "react";
import Link from "next/link";

const Alavanque = () => {
  return (
    // SEÇÃO PRINCIPAL:
    // - Trocado 'min-h-screen' por preenchimento vertical 'py-24 lg:py-32'.
    // - Padding horizontal responsivo 'px-4 sm:p-8'.
    <section className="relative flex flex-col items-center justify-center bg-black text-white overflow-hidden py-24 lg:py-32 px-4 sm:p-8">
      
      {/* Elemento de background animado (já responsivo via globals.css) */}
      <div className="animated-half-circle"></div>

      {/* Conteúdo da seção (com z-10 para ficar sobre a animação) */}
      <div className="flex flex-col items-center justify-center relative z-10 text-center max-w-4xl">
        
        {/* TÍTULO: Fontes responsivas e mais impactantes */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10">
          Alavanque sua empresa de forma responsável na era dos Agentes IA
        </h1>

        {/* BOTÃO CTA:
          - Tamanho aumentado ('px-8 py-4', 'text-lg') para maior destaque.
          - Efeito de 'scale' no hover para melhor feedback visual.
        */}
        <Link href="https://awsales.yayforms.link/DpQj0D2" target="_blank">
          <button className="cursor-pointer flex items-center justify-center px-8 py-4 text-lg text-white font-semibold rounded-full shadow-lg bg-gradient-to-r from-blue-900 to-blue-500 hover:bg-gradient-to-t hover:from-blue-500 hover:to-blue-900 transition-all duration-300 ease-in-out transform hover:scale-105">
            Começar Agora
            <svg
              className="ml-2 w-5 h-5"
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
    </section>
  );
};

export default Alavanque;