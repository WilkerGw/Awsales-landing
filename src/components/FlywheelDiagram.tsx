'use client';

import React, { useState, useEffect } from 'react';
import { IconType } from 'react-icons';
// NOVO: Ícones corrigidos e importados corretamente
import { 
  FaLightbulb, 
  FaLink, 
  FaHandshake, 
  FaChartBar, 
  FaSearch, 
  FaShoppingCart 
} from 'react-icons/fa';
// NOVO: Removida a importação duplicada
import { BgSvg01, BgSvg02, BgSvg03, BgSvg04, BgSvg05 } from './flywheel-bg';

// Interface para os dados de cada passo do flywheel
interface FlywheelStep {
  number: string;
  text: string;
  iconComponent: IconType;
  centralIconComponent: IconType;
  // NOVO: Tipo específico para componentes SVG, evitando o 'any'
  bgComponent: React.ComponentType<React.SVGProps<SVGSVGElement>>; 
  altText: string;
  svgWidth: number;
  svgHeight: number;
  svgOffsetX: number;
  svgOffsetY: number;
}

interface FlywheelDiagramProps {
  activeStepId: string | null; // ID do passo ativo vindo do componente pai
}

// NOVO: Dados atualizados com os ícones corretos
const flywheelStepsData: FlywheelStep[] = [
  {
    number: "01", text: "Entende", iconComponent: FaLightbulb, centralIconComponent: FaLightbulb, bgComponent: BgSvg01, altText: "Passo 01 Entende",
    svgWidth: 261, svgHeight: 224, svgOffsetX: 0, svgOffsetY: 0
  },
  {
    number: "02", text: "Conecta", iconComponent: FaLink, centralIconComponent: FaLink, bgComponent: BgSvg02, altText: "Passo 02 Conecta",
    svgWidth: 163, svgHeight: 315, svgOffsetX: 0, svgOffsetY: 0
  },
  {
    number: "03", text: "Ajuda", iconComponent: FaHandshake, centralIconComponent: FaHandshake, bgComponent: BgSvg03, altText: "Passo 03 Ajuda",
    svgWidth: 323, svgHeight: 163, svgOffsetX: 0, svgOffsetY: 0
  },
  {
    number: "04", text: "Vende", iconComponent: FaChartBar, centralIconComponent: FaChartBar, bgComponent: BgSvg04, altText: "Passo 04 Vende",
    svgWidth: 198, svgHeight: 312, svgOffsetX: 0, svgOffsetY: 0
  },
  {
    number: "05", text: "Otimiza", iconComponent: FaSearch, centralIconComponent: FaSearch, bgComponent: BgSvg05, altText: "Passo 05 Otimiza",
    svgWidth: 290, svgHeight: 231, svgOffsetX: 0, svgOffsetY: 0
  },
];


const FlywheelDiagram: React.FC<FlywheelDiagramProps> = ({ activeStepId }) => {
  const [hoveredStepIndex, setHoveredStepIndex] = useState<number | null>(null);
  const [CurrentCentralIconComponent, setCurrentCentralIconComponent] = useState<IconType>(() => FaShoppingCart);

  const stepRadius = 180;
  const mainCircleSize = 450;
  const mainCircleCenterOffset = mainCircleSize / 2;

  // Efeito para atualizar o ícone central e o estado de hover quando o activeStepId externo muda
  useEffect(() => {
    if (activeStepId === null) {
      setCurrentCentralIconComponent(() => FaShoppingCart);
      setHoveredStepIndex(null);
    } else {
      const activeIndex = flywheelStepsData.findIndex(step => step.altText.replace(/ /g, '-').toLowerCase() === activeStepId);
      if (activeIndex !== -1) {
        setCurrentCentralIconComponent(() => flywheelStepsData[activeIndex].centralIconComponent);
        setHoveredStepIndex(activeIndex);
      } else {
        setCurrentCentralIconComponent(() => FaShoppingCart);
        setHoveredStepIndex(null);
      }
    }
  }, [activeStepId]);

  // NOVO: Key para forçar a remontagem do ícone central e reiniciar a animação
  const centralIconKey = CurrentCentralIconComponent.name + (hoveredStepIndex ?? 'default');

  return (
    <div className="flex items-center justify-center relative mt-12 lg:mt-0">
      {/* Círculo Principal do Diagrama */}
      <div className="relative w-[450px] h-[450px] bg-[#181E26] rounded-full flex items-center justify-center border border-[#2A313A] shadow-lg">
        {/* Ícone central que muda no hover */}
        <CurrentCentralIconComponent
          key={centralIconKey}
          className="text-white text-8xl opacity-50 transition-opacity duration-300 ease-in-out"
        />

        {/* Pontos no Anel Externo (cinza esmaecido) */}
        {[...Array(flywheelStepsData.length)].map((_, i) => {
          const pointAngleDeg = (i * (360 / flywheelStepsData.length)) - 90;
          const pointAngleRad = pointAngleDeg * Math.PI / 180;
          const pointX = (stepRadius + 45) * Math.cos(pointAngleRad);
          const pointY = (stepRadius + 45) * Math.sin(pointAngleRad);

          return (
            <div
              key={`point-${i}`}
              className="absolute w-2 h-2 bg-[#4A4F56] rounded-full"
              style={{
                left: `${mainCircleCenterOffset + pointX}px`,
                top: `${mainCircleCenterOffset + pointY}px`,
                transform: 'translate(-50%, -50%)',
              }}
            />
          );
        })}

        {/* Posicionamento dos passos ao redor do círculo */}
        {flywheelStepsData.map((step, index) => {
          const angleDeg = (index * (360 / flywheelStepsData.length)) - 90;
          const angleRad = angleDeg * Math.PI / 180;

          const x = stepRadius * Math.cos(angleRad);
          const y = stepRadius * Math.sin(angleRad);

          const BgComponent = step.bgComponent;
          const IconComponent = step.iconComponent;
          const isActiveStep = hoveredStepIndex === index;

          // Calcula o offset para centralizar o SVG baseado em suas próprias dimensões
          const svgCalculatedLeft = (mainCircleSize - (step.svgWidth || mainCircleSize)) / 2;
          const svgCalculatedTop = (mainCircleSize - (step.svgHeight || mainCircleSize)) / 2;

          return (
            <div
              key={index}
              className={`absolute flex flex-col items-center justify-center w-[100px] h-[100px] text-center group cursor-pointer transition-all duration-300 ease-in-out z-10`}
              style={{
                left: `${mainCircleCenterOffset + x}px`,
                top: `${mainCircleCenterOffset + y}px`,
                transform: 'translate(-50%, -50%)',
              }}
              onMouseEnter={() => {
                setCurrentCentralIconComponent(() => step.centralIconComponent);
                setHoveredStepIndex(index);
              }}
              onMouseLeave={() => {
                if (activeStepId) {
                  const activeIndex = flywheelStepsData.findIndex(s => s.altText.replace(/ /g, '-').toLowerCase() === activeStepId);
                  setCurrentCentralIconComponent(() => activeIndex !== -1 ? flywheelStepsData[activeIndex].centralIconComponent : FaShoppingCart);
                  setHoveredStepIndex(activeIndex !== -1 ? activeIndex : null);
                } else {
                  setCurrentCentralIconComponent(() => FaShoppingCart);
                  setHoveredStepIndex(null);
                }
              }}
            >
              {/* SVG de fundo */}
              <div
                className={`absolute w-[450px] h-[450px] pointer-events-none transition-opacity duration-300 ease-in-out ${isActiveStep ? 'opacity-100 z-0' : 'opacity-0 -z-10'}`}
                style={{
                  left: `${svgCalculatedLeft + (step.svgOffsetX || 0)}px`,
                  top: `${svgCalculatedTop + (step.svgOffsetY || 0)}px`,
                }}
              >
                <BgComponent />
              </div>

              {/* Círculo Azul com Ícone do Passo */}
              <div
                className={`p-3 rounded-full inline-flex items-center justify-center relative z-20 transition-all duration-300 ease-in-out ${isActiveStep ? 'bg-[#1065e3] shadow-blue-glow scale-110' : 'bg-[#0A296A]'}`}
                style={{
                  width: isActiveStep ? '50px' : '40px',
                  height: isActiveStep ? '50px' : '40px',
                }}
              >
                  <IconComponent
                    className={`${isActiveStep ? 'text-white brightness-125' : 'text-[#828E9D] brightness-75'} text-3xl transition-all duration-300 ease-in-out`}
                  />
              </div>

              {/* Texto "01 Entende" (some no hover) */}
              <div className={`flex flex-col items-center mt-2 whitespace-nowrap transition-opacity duration-300 ease-in-out ${isActiveStep ? 'opacity-0' : 'opacity-100'}`}>
                <p className="text-sm font-medium text-[#828E9D]">{step.number}</p>
                <p className="text-base font-semibold text-[#F2F9FE]">{step.text}</p>
              </div>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        .shadow-blue-glow {
          box-shadow: 0 0 15px rgba(16, 101, 227, 0.7);
        }
      `}</style>
    </div>
  );
};

export default FlywheelDiagram;