// components/InteractiveCircle.jsx
'use client';

import React, { useState, useEffect } from 'react';
import {
  MdOutlineHelpOutline,
  MdBarChart,
  MdLightbulbOutline,
  MdShoppingCart,
} from 'react-icons/md';
import { FaHandshake } from 'react-icons/fa';

// Os ícones permanecem os mesmos
const IconComponents = {
  entende: (props) => <MdLightbulbOutline {...props} />,
  conecta: (props) => <FaHandshake {...props} />,
  ajuda: (props) => <MdOutlineHelpOutline {...props} />,
  vende: (props) => <MdShoppingCart {...props} />,
  otimiza: (props) => <MdBarChart {...props} />,
};

const items = [
  { name: 'Passo 01', title: 'Entende', id: 'entende', deg: 0, icon: IconComponents.entende },
  { name: 'Passo 02', title: 'Conecta', id: 'conecta', deg: 72, icon: IconComponents.conecta },
  { name: 'Passo 03', title: 'Ajuda', id: 'ajuda', deg: 144, icon: IconComponents.ajuda },
  { name: 'Passo 04', title: 'Vende', id: 'vende', deg: 216, icon: IconComponents.vende },
  { name: 'Passo 05', title: 'Otimiza', id: 'otimiza', deg: 288, icon: IconComponents.otimiza },
];

const InteractiveCircle = () => {
  // 1. MUDANÇA DE ESTADO: de 'hoveredItem' para 'activeIndex'
  const [activeIndex, setActiveIndex] = useState(0);

  // 2. EFEITO PARA ANIMAÇÃO AUTOMÁTICA
  useEffect(() => {
    const interval = setInterval(() => {
      // Atualiza o índice, voltando ao início quando chega ao fim da lista
      setActiveIndex(prevIndex => (prevIndex + 1) % items.length);
    }, 4000); // A cada 4 segundos

    return () => clearInterval(interval); // Limpa o intervalo
  }, []);

  const outerCircleRadius = 250;
  const itemPlacementRadius = 180;
  const textPlacementRadius = 280;

  // 3. O item central agora é baseado no activeIndex
  const currentCentralItem = items[activeIndex];
  const rotationOffset = activeIndex * (360 / items.length);

  return (
    <div className="relative w-[500px] h-[500px] flex items-center justify-center font-sans">
      {/* Círculo central */}
      <div className="absolute w-[200px] h-[200px] rounded-full bg-gray-900/50 border-2 border-gray-800/80 backdrop-blur-md z-0 shadow-inner flex items-center justify-center">
        {currentCentralItem && (
          <div className="flex flex-col items-center text-blue-400 animate-fade-in" key={activeIndex}>
            {React.createElement(currentCentralItem.icon, {
              className: "w-24 h-24 transition-all duration-300",
            })}
            <p className="mt-2 text-xl font-bold text-white">{currentCentralItem.title}</p>
          </div>
        )}
      </div>

      {/* Círculo externo (borda) */}
      <div className="absolute w-full h-full rounded-full border border-gray-700"></div>

      {/* Ícones, Textos e Pontos (agora com posição animada) */}
      {items.map((item, index) => {
        // 4. CÁLCULO DA POSIÇÃO DINÂMICA
        const currentDeg = item.deg - rotationOffset;
        const angleRad = (currentDeg - 90) * (Math.PI / 180);

        // Posições para os três elementos (ícones, textos, pontos)
        const iconX = outerCircleRadius + itemPlacementRadius * Math.cos(angleRad);
        const iconY = outerCircleRadius + itemPlacementRadius * Math.sin(angleRad);
        const textX = outerCircleRadius + textPlacementRadius * Math.cos(angleRad);
        const textY = outerCircleRadius + textPlacementRadius * Math.sin(angleRad);
        const dotX = outerCircleRadius + outerCircleRadius * Math.cos(angleRad);
        const dotY = outerCircleRadius + outerCircleRadius * Math.sin(angleRad);

        const isActive = activeIndex === index;

        return (
          <React.Fragment key={item.id}>
            {/* Ponto na borda */}
            <div
              className="absolute w-2 h-2 rounded-full bg-gray-700"
              style={{
                left: `${dotX - 4}px`,
                top: `${dotY - 4}px`,
                transition: 'left 0.7s ease-in-out, top 0.7s ease-in-out', // Animação
              }}
            ></div>

            {/* Ícone */}
            <div
              className={`absolute w-24 h-24 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg ${isActive ? 'bg-blue-900/60 scale-110' : 'bg-gray-800'}`}
              style={{
                left: `${iconX - 48}px`,
                top: `${iconY - 48}px`,
                zIndex: isActive ? 10 : 1,
                transition: 'all 0.7s ease-in-out', // Animação de posição e estilo
              }}
            >
              {item.icon && React.createElement(item.icon, {
                className: `w-10 h-10 ${isActive ? 'text-blue-400' : 'text-gray-400'} transition-colors duration-300`,
              })}
            </div>

            {/* Texto */}
            <div
              className={`absolute text-center font-semibold whitespace-nowrap ${isActive ? 'text-blue-400' : 'text-gray-400'} transition-all duration-700`}
              style={{
                left: `${textX}px`,
                top: `${textY}px`,
                transform: 'translate(-50%, -50%)',
                transition: 'left 0.7s ease-in-out, top 0.7s ease-in-out, color 0.3s', // Animação
              }}
            >
              <p className="text-sm">{item.name}</p>
              <p className="text-lg font-bold">{item.title}</p>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default InteractiveCircle;