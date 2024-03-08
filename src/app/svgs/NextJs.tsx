import { SVGProps, FC } from 'react';

const NextJsSVG: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="256"
      height="256"
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <defs>
        <linearGradient id="c" x1="55.633%" x2="83.228%" y1="56.385%" y2="96.08%">
          <stop offset="0%" stop-color="#FFF" />
          <stop offset="100%" stop-color="#FFF" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="d" x1="50%" x2="49.953%" y1="0%" y2="73.438%">
          <stop offset="0%" stop-color="#FFF" />
          <stop offset="100%" stop-color="#FFF" stop-opacity="0" />
        </linearGradient>
        <circle id="a" cx="128" cy="128" r="128" />
      </defs>
      <mask id="b" fill="#fff">
        <use xlinkHref="#a" />
      </mask>
      <g mask="url(#b)">
        <circle cx="128" cy="128" r="128" />
        <path
          fill="url(#c)"
          d="M212.634 224.028 98.335 76.8H76.8v102.357h17.228V98.68L199.11 234.446a128.433 128.433 0 0 0 13.524-10.418Z"
        />
        <path fill="url(#d)" d="M163.556 76.8h17.067v102.4h-17.067z" />
      </g>
    </svg>
  );
}

export default NextJsSVG