"use client";

import React, { useState } from "react";
import Image from "next/image";
import { features } from "../data/featuresData";
import { Feature } from "../types";
import SidebarMenu from "./SidebarMenu";

const FeatureSection: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<string>(features[0].id);

  const currentFeature: Feature | undefined = features.find(
    (f) => f.id === activeFeature
  );

  return (
    <section className="bg-black text-gray-100 py-20 lg:py-24 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Título Responsivo */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center font-bold max-w-4xl mb-12 lg:mb-16">
          Independente do objetivo do seu funil, a AwSales tem uma campanha feita
          para você
        </h1>

        {/* Menu (agora horizontal no mobile, vertical no desktop) */}
        <div className="w-full lg:hidden mb-8">
          <SidebarMenu
            items={features}
            activeItemId={activeFeature}
            onItemClick={setActiveFeature}
          />
        </div>

        {/* Layout principal: Sidebar à esquerda e conteúdo à direita no DESKTOP */}
        <div className="flex flex-col items-center justify-center lg:flex-row w-full gap-8 lg:gap-12">
          
          {/* Sidebar para Desktop (escondida no mobile) */}
          <div className="hidden lg:block lg:w-1/3">
            <SidebarMenu
              items={features}
              activeItemId={activeFeature}
              onItemClick={setActiveFeature}
            />
          </div>

          {/* Área de Conteúdo da Funcionalidade */}
          <div className="w-full lg:w-2/3">
            {currentFeature && (
              // Animação de fade-in ao mudar de feature
              <div key={activeFeature} className="animate-fade-in flex flex-col md:flex-row items-center bg-gray-950/50 p-6 md:p-8 rounded-2xl gap-8 ">
                
                {/* Imagem Responsiva */}
                <div className="w-full md:w-1/2 flex-shrink-0">
                  <Image
                    src={currentFeature.mainImage}
                    alt={currentFeature.title}
                    width={500}
                    height={400}
                    className="rounded-lg shadow-xl w-full h-auto object-contain"
                  />
                </div>

                {/* Textos da Funcionalidade */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                  <div className="inline-block bg-gray-800 text-white/80 text-sm py-1 px-4 rounded-lg shadow-lg border border-blue-800/30 mb-4">
                    {currentFeature.title}
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl text-white font-bold mb-4 leading-tight">
                    {currentFeature.subtitle}
                  </h2>
                  
                  <p className="text-gray-400 text-base leading-relaxed">
                    {currentFeature.description}
                  </p>
                </div>

              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;