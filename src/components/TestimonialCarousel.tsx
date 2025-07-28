'use client';

import React from 'react';

// ... (interface e dados dos testimonials permanecem os mesmos)
interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
    {
    quote: "O que mais me impactou foi a qualidade de entrega deles, vi na AwSales pessoas que entregam muito mais do que prometem, resgatando coisas que pareciam perdidas e adaptando processos que se adaptam a vários tipos de negócios.",
    author: "Daniela",
    role: "Estrategista Mulher em Forma",
    avatar: "/images/daniela.png"
  },
  {
    quote: "Eles são muito bons, sem enrolação e de forma fácil de entender. Bem diretos.",
    author: "Marcelo Politi",
    role: "Founder + CVO da Politi Academy",
    avatar: "/images/marcelo.png"
  },
  {
    quote: "Tivemos um aumento significativo na nossa taxa de entrada no grupo, na taxa de resposta da pesquisa e no comparecimento da aula ao vivo",
    author: "Laiza",
    role: "Estrategista Bettina Rudolph",
    avatar: "/images/laisa.png"
  },
  {
    quote: "Atendimento e iniciativas impecáveis! Estamos super satisfeitos com a solução como um todo.",
    author: "Rafael Parracho",
    role: "Estrategista Perpetuo do Elton Euler",
    avatar: "/images/rafael.png"
  },
];


const TestimonialCarousel: React.FC = () => {
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="bg-black py-20 lg:py-24 text-white overflow-x-hidden">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 lg:mb-16 px-4">
        O que os Players estão dizendo
      </h2>
      <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        
        {/* PISTA DE ANIMAÇÃO COM A CORREÇÃO:
          - Adicionada a classe 'w-max' para forçar o container a ter a largura máxima de seu conteúdo.
        */}
        <div className="flex w-max animate-slide">
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col justify-between flex-shrink-0 w-80 sm:w-96 h-auto bg-[#191D24] rounded-lg shadow-lg p-6 mx-4 border border-gray-800"
            >
              <p className="text-gray-300 text-base leading-relaxed mb-6 italic whitespace-normal">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center mt-auto border-t border-gray-700/50 pt-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-14 h-14 rounded-full mr-4 object-cover"
                />
                <div>
                  <p className="font-semibold text-lg text-white">{testimonial.author}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;