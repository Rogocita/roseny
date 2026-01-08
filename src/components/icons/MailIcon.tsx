import React from "react";
import type { SVGProps } from "react";

export function MailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
        <rect width={20} height={16} x={2} y={4} rx={2}></rect>
      </g>
    </svg>
  );
}
