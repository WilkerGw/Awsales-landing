// components/flywheel/FlywheelBackgrounds.tsx

// SVG do Passo 01 (Exemplo: icon-lightbulb, Entende)
// viewBox="0 0 261 224" -> w-[261px] h-[224px]
export const BgSvg01 = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 261 224"
    className="absolute w-[261px] h-[224px] transition-opacity duration-300"
  >
    <defs>
      <linearGradient id="gradient01" x1="0.49751243781094523" x2="0.5024875621890548" y1="0" y2="1">
        <stop offset="0" stopColor="rgb(35,37,40)" stopOpacity="1"></stop>
        <stop offset="1" stopColor="rgb(71,75,84)" stopOpacity="1"></stop>
      </linearGradient>
    </defs>
    <path
      d="M 250.934 132.584 C 211.681 42.055 92.938 -14.768 1.723 5.26 C 2.706 35.35 2.194 41.931 4.14 116.676 C 65.134 100.17 118.007 128.478 144.83 170.509 C 206.73 267.502 285.786 212.962 250.934 132.584 Z"
      fill="url(#gradient01)"
    ></path>
  </svg>
);

// SVG do Passo 02 (Exemplo: icon-link, Conecta)
// viewBox="0 0 163 315" -> w-[163px] h-[315px]
export const BgSvg02 = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 163 315"
    className="absolute w-[163px] h-[315px] transition-opacity duration-300"
  >
    <defs>
      <linearGradient id="gradient02" x1="0.49751243781094523" x2="0.5024875621890548" y1="0" y2="1">
        <stop offset="0" stopColor="rgb(50,53,60)" stopOpacity="1"></stop>
        <stop offset="1" stopColor="rgb(50,53,60)" stopOpacity="1"></stop>
      </linearGradient>
    </defs>
    <path
      d="M 100.386 287.694 C 171.682 220.059 177.818 71.25 130.277 1.25 C 102.543 12.49 101.514 24.739 32.456 52.197 C 68.254 103.365 59.748 162.429 29.523 201.841 C -40.227 292.795 37.084 347.744 100.386 287.694 Z"
      fill="url(#gradient02)"
    ></path>
  </svg>
);

// SVG do Passo 03 (Exemplo: icon-handshake, Ajuda)
// viewBox="0 0 323 163" -> w-[323px] h-[163px]
export const BgSvg03 = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 323 163"
    className="absolute w-[323px] h-[163px] transition-opacity duration-300"
  >
    <defs>
      <linearGradient id="gradient03" x1="0" x2="1" y1="0.47117841522163767" y2="0.5288215847783623">
        <stop offset="0" stopColor="rgb(50,53,60)" stopOpacity="1"></stop>
        <stop offset="1" stopColor="rgb(33,33,38)" stopOpacity="1"></stop>
      </linearGradient>
    </defs>
    <path
      d="M 45.486 136.932 C 132.406 184.054 261.121 157.621 320.616 87.736 C 301.233 64.893 296.736 59.217 248.978 2.179 C 211.12 51.334 152.778 61.011 105.648 44.251 C -3.116 5.575 -31.686 95.095 45.486 136.932 Z"
      fill="url(#gradient03)"
    ></path>
  </svg>
);

// SVG do Passo 04 (Exemplo: icon-chart, Vende)
// viewBox="0 0 198 312" -> w-[198px] h-[312px]
export const BgSvg04 = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 198 312"
    className="absolute w-[198px] h-[312px] transition-opacity duration-300"
  >
    <defs>
      <linearGradient id="gradient04" x1="0.49751243781094523" x2="0.5024875621890548" y1="0" y2="1">
        <stop offset="0" stopColor="rgb(60,64,73)" stopOpacity="1"></stop>
        <stop offset="1" stopColor="rgb(33,33,38)" stopOpacity="1"></stop>
      </linearGradient>
    </defs>
    <path
      d="M 4.916 63.29 C -15.056 160.407 49.22 274.722 135.181 309.876 C 151.667 284.437 155.12 279.38 196.476 216.468 C 137.206 195.534 111.058 142.054 113.313 92.09 C 118.514 -23.213 22.648 -22.936 4.916 63.29 Z"
      fill="url(#gradient04)"
    ></path>
  </svg>
);

// SVG do Passo 05 (Exemplo: icon-magnifying-glass, Otimiza)
// viewBox="0 0 290 231" -> w-[290px] h-[231px]
export const BgSvg05 = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 290 231"
    className="absolute w-[290px] h-[231px] transition-opacity duration-300"
  >
    <defs>
      <linearGradient id="gradient05" x1="0.49751243781094523" x2="0.5024875621890548" y1="0" y2="1">
        <stop offset="0" stopColor="rgb(64,68,77)" stopOpacity="1"></stop>
        <stop offset="1" stopColor="rgb(37,37,39)" stopOpacity="1"></stop>
      </linearGradient>
    </defs>
    <path
      d="M 1.908 207.519 C 11.447 115.19 111.383 7.308 211.865 1.594 C 301.08 -3.478 326.339 90.288 211.865 115.19 C 162.26 125.981 117.742 165.962 112.655 229.424 C 112.634 229.417 112.614 229.41 112.594 229.403 C 115.659 120.85 28.073 117.367 5.073 193.336 C 4.986 193.306 1.995 207.547 1.908 207.519 Z"
      fill="url(#gradient05)"
    ></path>
  </svg>
);