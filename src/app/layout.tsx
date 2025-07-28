import './globals.css';
import type { Metadata } from 'next';
import { Inter, DM_Sans, Poppins, Manrope, Figtree } from 'next/font/google';

// Configurando as fontes usando next/font/google
// Certifique-se de que os pesos e estilos correspondem ao que você precisa
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-dm-sans',
});
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '700'],
  style: ['normal', 'italic'],
  variable: '--font-poppins',
});
const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal'],
  variable: '--font-manrope',
});
const figtree = Figtree({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '900'],
  style: ['normal'],
  variable: '--font-figtree',
});

// Metadados da página
export const metadata: Metadata = {
  title: 'Awsales - AI Agents for Business',
  description:
    'Aumente a margem de lucro do seu negócio em apenas 14 dias. Substitua times comerciais ineficientes e automações complexas pela solução mais incrivel e poderosa para converter aqueles leads que precisam de um empurrãozinho a mais para fechar a compra.',
  icons: {
    icon: [
      { url: '/images/p2MVUqbHRlLMZN3ea01CUFN0IpA.png', media: '(prefers-color-scheme: light)' },
      { url: '/images/p2MVUqbHRlLMZN3ea01CUFN0IpA.png', media: '(prefers-color-scheme: dark)' },
    ],
  },
  openGraph: {
    type: 'website',
    title: 'Awsales - AI Agents for Business',
    description:
      'Aumente a margem de lucro do seu negócio em apenas 14 dias. Substitua times comerciais ineficientes e automações complexas pela solução mais incrivel e poderosa para converter aqueles leads que precisam de um empurrãozinho a mais para fechar a compra.',
    images: ['https://framerusercontent.com/images/gix4ao11aI7cKY4nse39DFpbC5M.svg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Awsales - AI Agents for Business',
    description:
      'Aumente a margem de lucro do seu negócio em apenas 14 dias. Substitua times comerciais ineficientes e automações complexas pela solução mais incrivel e poderosa para converter aqueles leads que precisam de um empurrãozinho a mais para fechar a compra.',
    images: ['https://framerusercontent.com/images/gix4ao11aI7cKY4nse39DFpbC5M.svg'],
  },
  robots: 'max-image-preview:large',
  metadataBase: new URL('https://awsales.io/'), // Para o canonical URL
  alternates: {
    canonical: '/', // Define a URL canônica para a raiz
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${dmSans.variable} ${poppins.variable} ${manrope.variable} ${figtree.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}