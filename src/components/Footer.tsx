import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='bg-black text-white font-mono flex flex-col items-center justify-center gap-6 p-8 text-center'>
      {/* Logo */}
      <Image 
        src="/images/logo.png" 
        alt="Logo da Empresa" 
        width={1440} 
        height={100} 
        className='w-48 lg:w-64 h-auto' // Largura responsiva e altura automática
      />

      {/* Aviso Legal */}
      <p className='max-w-md md:max-w-2xl lg:max-w-4xl text-sm'>
        <strong>AVISO LEGAL:</strong> Os números de vendas indicados acima são meus números pessoais de vendas. Entenda que meus resultados não são típicos, não estou sugerindo que você os duplicará (ou fará qualquer coisa nesse sentido). Estou usando essas referências apenas para fins de exemplo. Seus resultados variarão e dependerão de muitos fatores ... incluindo, entre outros, seu histórico, experiência e ética no trabalho. Todos os negócios envolvem riscos, além de esforços e ações consistentes. Se você não estiver disposto a aceitar isso, <strong>NÃO ENTRE NESTE FUNIL.</strong>
      </p>

      {/* Links e Informações */}
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-sm">
        <p>Politica de Privacidade</p>
        <p className='hidden md:block'>|</p> {/* O separador aparece apenas em telas médias e maiores */}
        <p>Termos de Uso</p>
        <p className='hidden md:block'>|</p> {/* O separador aparece apenas em telas médias e maiores */}
        <p>CNPJ: 37.552.089/0001-09</p>
      </div>

      {/* Direitos Autorais */}
      <p className='text-xs mt-4'>© 2023 Mamba Culture - Todos os Direitos Reservados</p>
    </footer>
  );
}

export default Footer;