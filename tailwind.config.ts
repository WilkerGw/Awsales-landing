// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        // Keyframe para a animação de varredura cônica (borda animada)
        'conic-sweep': {
          '0%': { transform: 'rotate(0deg)' }, // Inicia a rotação em 0 graus
          '100%': { transform: 'rotate(360deg)' }, // Completa uma rotação de 360 graus
        },
        // Keyframe para a animação de pulso/aparecimento
        'pulse-once': {
          '0%': { opacity: '0', transform: 'scale(0.8)' }, // Começa invisível e menor
          '50%': { opacity: '1', transform: 'scale(1)' },    // Totalmente visível e tamanho normal
          '100%': { opacity: '0', transform: 'scale(1.2)' }, // Desaparece e fica um pouco maior (efeito de expansão)
        },
      },
      animation: {
        // Mapeia o keyframe 'conic-sweep' para uma classe de animação do Tailwind
        'conic-sweep': 'conic-sweep 4s linear infinite', // Duração de 4s, linear, infinita
        // Mapeia o keyframe 'pulse-once' para uma classe de animação do Tailwind
        'pulse-once': 'pulse-once 0.5s ease-out forwards', // 0.5s duração, ease-out timing, forwards para manter o estado final
      },
    },
  },
  plugins: [],
};

export default config;
