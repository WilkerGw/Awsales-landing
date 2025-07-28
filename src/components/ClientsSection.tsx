// components/ClientsSection.tsx
"use client";

import Image from "next/image";
import React from "react";
// NOVO: Importamos o hook useInView
import { useInView } from "react-intersection-observer";

const clients = [
  { name: "Brasil Paralelo", image: "/images/brasil.png" },
  { name: "Elton Euler", image: "/images/elton.jpg" },
  { name: "Filippe Holzer", image: "/images/felipi.jpeg" },
  { name: "Joel Jota", image: "/images/joel.webp" },
  { name: "G4 Educação", image: "/images/g4.jpg" },
  { name: "Maíra Cardi", image: "/images/maira-cardi.jpg" },
  { name: "Bettina Rudolph", image: "/images/betina.jpeg" },
  { name: "Natalia Beauty", image: "/images/natalia.jpg" },
  { name: "Hashtag Treinamentos", image: "/images/hashtag.jpg" },
  { name: "Édipo Tolentino", image: "/images/edipo.jpg" },
  { name: "Barbara Bruna", image: "/images/barbara.jpg" },
  { name: "Matheus Jerke", image: "/images/matheus.jpg" },
];

const ClientsSection = () => {
  
  // NOVO: Configurando o 'useInView' para o título e para o carrossel.
  const { ref: titleRef, inView: titleIsVisible } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: marqueeRef, inView: marqueeIsVisible } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative bg-black text-white flex flex-col items-center py-20 lg:py-24 w-full overflow-hidden">
      <header className="text-center w-full">
        {/* ALTERADO: Adicionamos a 'ref' e as classes de transição condicional ao título */}
        <h3
          ref={titleRef}
          className={`text-lg md:text-xl text-[#828E9D] font-medium leading-relaxed max-w-3xl mx-auto mb-12 transition-all duration-700 ease-out ${
            titleIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          Os agentes de Inteligência Artificial usados pelos principais{" "}
          <span className="text-[#F2F9FE] font-bold">players brasileiros.</span>
        </h3>

        {/* CARROSSEL DE CLIENTES (MARQUEE) */}
        {/* ALTERADO: Adicionamos a 'ref' e as classes de transição condicional ao container do carrossel */}
        <div
          ref={marqueeRef}
          className={`relative w-full overflow-hidden transition-opacity duration-1000 ease-out delay-200 ${
            marqueeIsVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Adicionando gradientes nas laterais para um efeito de fade suave */}
          <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10"></div>
          
          <div className="whitespace-nowrap py-4">
            <div className="inline-flex space-x-8 animate-marquee">
              {/* Duplicamos a lista de clientes para criar o efeito de loop infinito contínuo */}
              {clients.concat(clients).map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-48 md:w-56 bg-transparent rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="relative w-full h-60 mb-3 rounded-lg overflow-hidden">
                    <Image
                      src={client.image}
                      width={500}
                      height={500}
                      alt={client.name}
                      className="rounded-lg w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-base font-semibold text-gray-200 text-left truncate">
                    {client.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* A animação do marquee permanece a mesma */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ClientsSection;