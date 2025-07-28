import Image from 'next/image';
import Link from 'next/link'; // Importe o componente Link do Next.js para navegação otimizada

const Navbar = () => {
  return (
    <nav className="relative flex items-center justify-between py-4 px-6 md:px-10 lg:px-15 bg-black shadow-md h-17 border-b-1 border-white/10">
      {/* Logotipo */}
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/images/logo.png" // Certifique-se de colocar sua imagem PNG na pasta public/images/
            alt="Awsales Logo"
            width={300} // Largura original aproximada do srcset dividido pelo DPR
            height={300} // Altura original aproximada do srcset dividido pelo DPR
            priority // Carrega a imagem com alta prioridade para o LCP
            className='w-22 h-auto'
          />
        </Link>
      </div>

      {/* Links de Navegação (Exemplo) */}


      {/* Botão "Começar Agora" */}
       <Link
              href="https://awsales.yayforms.link/DpQj0D2"
              target='_blank' // Ou para a rota de cadastro/início
              className=" fixed top-4 right-4  bg-black                  text-white                py-1                      px-4   w-auto         rounded-full             shadow-lg                hover:shadow-xl          hover:scale-105           transition-all           duration-300             border                    border-blue-700/20           z-100                 overflow-hidden           before:content-['']       before:absolute   before:top-0   before:left-1/2   before:-translate-x-1/2   before:w-3/4   before:h-1   before:bg-blue-400        before:blur-sm            before:opacity-75         before:rounded-full       "
            >
              {/* Stroke e Glow (efeitos visuais inspirados no original) */}
              <div
                className="absolute inset-0 rounded-[27px] opacity-100 group-hover:opacity-0 transition-opacity duration-300"
                style={{
                  background:
                    "radial-gradient(20.7% 50% at 0% 0%, rgb(46, 85, 158) 0%, rgba(255, 255, 255, 0) 100%)",
                }}
              ></div>
              <div
                className="absolute inset-0 rounded-[27px] blur-[15px] opacity-100 group-hover:opacity-0 transition-opacity duration-300"
                style={{
                  background:
                    "radial-gradient(25% 50% at 0% 0%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)",
                }}
              ></div>

              {/* Fill (cor de fundo principal) */}
              <div className="absolute inset-0 rounded-[26px] bg-red group-hover:bg-gray-800 transition-colors duration-300"></div>

              <div className="relative flex items-center z-10 space-x-2">
                {/* Ícone (SVG convertido para React JSX) */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  focusable="false"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-current text-gray-200" // Cor do ícone
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"></path>
                </svg>
                <span className="text-gray-200 text-base">Começar Agora</span>
              </div>
            </Link>
    </nav>
  );
};

export default Navbar;