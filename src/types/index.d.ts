// src/types/index.d.ts (ou src/types/features.d.ts)

// Definindo o tipo para os ícones SVG, que são elementos JSX.
// React.ReactNode é um tipo abrangente que inclui elementos JSX, strings, números, etc.
import UserHighlight from '../components/UserHighlight';
type FeatureIcon = React.ReactNode;

export interface Feature {
  id: string;
  icon: FeatureIcon; // Agora usa o tipo definido para o ícone
  mainImage: string;
  title: string;
  subtitle: string;
  description: string;
}


// pages/index.jsx ou pages/index.js

export default function HomePage() {
  const bettinaData = {
    imageSrc: 'http://googleusercontent.com/file_content/0', // URL da imagem da Bettina
    imageAlt: 'Bettina Rudolph, uma das maiores referências no meio digital do Brasil',
    category: 'QUEM USA',
    name: 'Bettina Rudolph',
    description:
      'Considerada uma das maiores referências no meio digital do Brasil, utilizou nossos agentes de IA em seu lançamento através do WhatsApp.',
    stats: [
      'Aumento de 63% de comparecimento nas lives.',
      '90% de entrada nos grupos do WhatsApp.',
    ],
    buttonText: 'Começar agora',
    followers: '1.466.398',
  };

  return (
    <div>
      {/* Você pode ter outros elementos aqui */}
      <UserHighlight {...bettinaData} />
      {/* Você pode ter outros elementos aqui */}
    </div>
  );
}