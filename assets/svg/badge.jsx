import React from 'react';
const Badge = ({type}) => {
  if(type === 'snow') {
    return (
      <svg
        data-id="141"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-12 text-primary"
      >
        <line x1="2" x2="22" y1="12" y2="12"></line>
        <line x1="12" x2="12" y1="2" y2="22"></line>
        <path d="m20 16-4-4 4-4"></path>
        <path d="m4 8 4 4-4 4"></path>
        <path d="m16 4-4 4-4-4"></path>
        <path d="m8 20 4-4 4 4"></path>
      </svg>
    );
  }
    return (
      <svg
        data-id="63"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-12"
      >
        <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
      </svg>
    );
}



export default Badge;