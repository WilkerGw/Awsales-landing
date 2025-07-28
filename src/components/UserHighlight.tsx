// components/UserHighlight.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { UserData } from "../types/user";
import { useInView } from "react-intersection-observer";

interface UserHighlightProps {
  userData: UserData;
}

export default function UserHighlight({ userData }: UserHighlightProps) {
  const {
    imageSrc,
    imageAlt,
    category,
    name,
    description,
    stats,
    buttonText,
    followers,
  } = userData;

  const { ref: contentRef, inView: contentIsVisible } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: imageRef, inView: imageIsVisible } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    // ALTERADO: A classe 'overflow-hidden' foi removida daqui.
    <div className="bg-black text-white py-16 lg:py-24 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center w-full max-w-7xl mx-auto bg-transparent rounded-lg">
        
        {/* SEÇÃO DO CONTEÚDO (TEXTO) */}
        <div
          ref={contentRef}
          className={`md:w-1/2 p-6 flex flex-col items-center md:items-start text-center md:text-left transition-all duration-700 ease-out ${
            contentIsVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {/* ... todo o resto do conteúdo de texto permanece igual ... */}
           {/* Categoria (Badge) */}
           <div className="mb-6">
            <span className="bg-gray-800/50 text-white/70 text-sm py-2 px-4 rounded-lg shadow-lg border border-blue-700/20">
              {category}
            </span>
          </div>

          {/* Nome (Título Responsivo) */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {name}
          </h1>

          {/* Descrição */}
          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
            {description}
          </p>

          {/* Estatísticas */}
          <div className="space-y-3 mb-8 w-full">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex items-center justify-center md:justify-start"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0"
                >
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.035 18.667l-4.667-4.667 1.401-1.401 3.266 3.267 7.667-7.667 1.401 1.401-9.068 9.067z" />
                </svg>
                <span className="text-gray-200">{stat}</span>
              </div>
            ))}
          </div>

          {/* Botão e Seguidores (Layout Responsivo) */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <Link
              href="https://awsales.yayforms.link/DpQj0D2"
              target="_blank"
              className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"></path>
              </svg>
              <span>{buttonText}</span>
            </Link>
            <span className="text-gray-400 text-sm">{followers} Seguidores</span>
          </div>
        </div>

        {/* SEÇÃO DA IMAGEM */}
        <div
          ref={imageRef}
          className={`md:w-1/2 p-4 flex items-center justify-center mt-10 md:mt-0 transition-all duration-700 ease-out delay-200 ${
            imageIsVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-8 scale-95"
          }`}
        >
          <div className="w-full max-w-sm md:max-w-md lg:max-w-lg">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={500}
              height={500}
              className="rounded-2xl w-full h-auto object-cover shadow-2xl shadow-blue-500/10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}