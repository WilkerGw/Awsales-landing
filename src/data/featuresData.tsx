// src/data/featuresData.ts
import React from 'react';
import { Feature } from '../types'; // Ajuste o caminho se sua interface estiver em outro lugar

// Importe os ícones que você escolheu das respectivas bibliotecas
// Os prefixos (Fa, Fi, Md) indicam a biblioteca (Font Awesome, Feather Icons, Material Design)
import { FaUsers, FaShoppingCart, FaInfoCircle, FaPlayCircle, FaHeadset } from 'react-icons/fa';
// Exemplo se você quiser usar Material Design para alguns:
// import { MdAddCircle, MdInfoOutline, MdPlayCircleOutline, MdChatBubbleOutline } from 'react-icons/md';
// Exemplo se você quiser usar Feather Icons para alguns:
// import { FiUsers } from 'react-icons/fi';

export const features: Feature[] = [
  {
    id: 'leads',
    // Substituindo o SVG pelo componente de ícone do react-icons
    // Você pode passar props como `className` e `size` diretamente para o componente do ícone
    icon: <FaUsers className="w-4 h-4" />, // Ou <FiUsers className="w-4 h-4" />
    mainImage: '/images/leads-new.png',
    title: 'Leads',
    subtitle: 'Maximize a captação de leads dos seus lançamentos',
    description: 'Nossa IA gera leads mais baratos e qualificados, convertendo uma audiência que outros canais não conseguiriam converter. Desde o primeiro momento do lançamento, cada lead tem uma experiência personalizada, garantindo maior aproximação e mais conversões.',
  },
  {
    id: 'vendas',
    // Substituindo o SVG pelo componente de ícone do react-icons
    icon: <FaShoppingCart className="w-4 h-4" />, // Ou <MdAddCircle className="w-4 h-4" />
    mainImage: '/images/sale-new.png',
    title: 'Vendas',
    subtitle: 'Recupere e amplie vendas online',
    description: 'Conte com agentes de IA especializados em retomar e converter oportunidades, impulsionando ativamente as vendas dos seus produtos digitais. Eles vão além da simples venda, oferecendo uma experiência de pré-compra personalizada que encanta o usuário.',
  },
  {
    id: 'onboarding',
    // Substituindo o SVG pelo componente de ícone do react-icons
    icon: <FaInfoCircle className="w-4 h-4" />, // Ou <MdInfoOutline className="w-4 h-4" />
    mainImage: '/images/heart-new.png',
    title: 'Onboarding',
    subtitle: 'Encante seus clientes desde o primeiro contato',
    description: 'Nossos agentes de IA criam uma experiência de boas-vindas única e personalizada. Eles orientam novos clientes de maneira acolhedora, garantindo que cada passo do onboarding do seu produto seja simples, claro e repleto de valor.',
  },
  {
    id: 'lives',
    // Substituindo o SVG pelo componente de ícone do react-icons
    icon: <FaPlayCircle className="w-4 h-4" />, // Ou <MdPlayCircleOutline className="w-4 h-4" />
    mainImage: '/images/live-hero.png',
    title: 'Lives',
    subtitle: 'Aumente a participação e o engajamento das suas lives',
    description: 'Nossos agentes de IA irão garantir que seu público não apenas se inscreva, mas também compareça aos seus eventos ao vivo. Eles enviam lembretes estratégicos e interagem com os inscritos aumentando significativamente a presença em suas transmissões.',
  },
  {
    id: 'atendimento',
    // Substituindo o SVG pelo componente de ícone do react-icons
    icon: <FaHeadset className="w-4 h-4" />, // Ou <MdChatBubbleOutline className="w-4 h-4" />
    mainImage: '/images/atendimento-new.png',
    title: 'Atendimento',
    subtitle: 'Suporte ágil e personalizado 24/7 para fidelizar clientes',
    description: 'Nossos agentes de IA oferecem respostas rápidas e personalizadas, solucionando dúvidas e problemas em tempo real. Com um atendimento proativo e humanizado, você eleva a experiência do cliente, gera satisfação imediata e constrói fidelidade – tudo isso por um custo muito menor do que manter uma equipe humana.',
  },
];