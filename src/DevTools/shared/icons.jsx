import React from 'react'

export const icons = {
  clock: () => {
    return (
      <svg width='15px' height='17px' viewBox='0 0 14 16'>
        <g id='Octicons' stroke='none' strokeWidth='1' fillRule='evenodd'>
          <g id='clock'>
            <path d='M8,8 L11,8 L11,10 L7,10 C6.45,10 6,9.55 6,9 L6,4 L8,4 L8,8 L8,8 Z M7,2.3 C10.14,2.3 12.7,4.86 12.7,8 C12.7,11.14 10.14,13.7 7,13.7 C3.86,13.7 1.3,11.14 1.3,8 C1.3,4.86 3.86,2.3 7,2.3 L7,2.3 Z M7,1 C3.14,1 0,4.14 0,8 C0,11.86 3.14,15 7,15 C10.86,15 14,11.86 14,8 C14,4.14 10.86,1 7,1 L7,1 Z' id='Shape' />
          </g>
        </g>
      </svg>
    )
  },
  arrow: (settings = {}) => {
    if (settings.direction === 'left') {
      return (
        <svg width='10px' height='16px' viewBox='0 0 10 16'>
          <g id='Octicons' stroke='none' strokeWidth='1' fillRule='evenodd'>
            <g id='arrow-left'>
              <polygon id='Shape' points='6 3 0 8 6 13 6 10 10 10 10 6 6 6' />
            </g>
          </g>
        </svg>
      )
    } else {
      return (
        <svg width='10px' height='16px' viewBox='0 0 10 16'>
          <g id='Octicons' stroke='none' strokeWidth='1' fillRule='evenodd'>
            <g id='arrow-right'>
              <polygon id='Shape' points='10 8 4 3 4 6 0 6 0 10 4 10 4 13' />
            </g>
          </g>
        </svg>
      )
    }
  },
  cycle: () => {
    return (
      <svg width='18px' height='24px' viewBox='0 0 12 16'>
        <g id='Octicons' stroke='none' strokeWidth='1' fillRule='evenodd'>
          <g id='sync'>
            <path d='M10.24,7.4 C10.43,8.68 10.04,10.02 9.04,11 C7.57,12.45 5.3,12.63 3.63,11.54 L4.8,10.4 L0.5,9.8 L1.1,14 L2.41,12.74 C4.77,14.48 8.11,14.31 10.25,12.2 C11.49,10.97 12.06,9.35 11.99,7.74 L10.24,7.4 L10.24,7.4 Z M2.96,5 C4.43,3.55 6.7,3.37 8.37,4.46 L7.2,5.6 L11.5,6.2 L10.9,2 L9.59,3.26 C7.23,1.52 3.89,1.69 1.74,3.8 C0.5,5.03 -0.06,6.65 0.01,8.26 L1.76,8.61 C1.57,7.33 1.96,5.98 2.96,5 L2.96,5 Z' id='Shape' />
          </g>
        </g>
      </svg>
    )
  },
  telescope: () => {
    return (
      <svg width='16px' height='20px' viewBox='0 0 14 16'>
        <g id='Octicons' stroke='none' strokeWidth='1' fillRule='evenodd'>
          <g id='telescope'>
            <path d='M8,9 L11,15 L10,15 L8,11 L8,16 L7,16 L7,10 L5,15 L4,15 L6,10 L8,9 L8,9 Z M7,0 L6,0 L6,1 L7,1 L7,0 L7,0 Z M5,3 L4,3 L4,4 L5,4 L5,3 L5,3 Z M2,1 L1,1 L1,2 L2,2 L2,1 L2,1 Z M0.63,9 C0.41,9.16 0.35,9.44 0.47,9.67 L1.02,10.59 C1.15,10.82 1.43,10.9 1.66,10.79 L3.05,10.13 L1.89,8.13 L0.62,8.99 L0.63,9 Z M8.52,3.61 L2.72,7.56 L3.95,9.7 L10.28,6.67 L8.51,3.61 L8.52,3.61 Z M12.74,4.89 L11.27,2.37 C11.13,2.12 10.8,2.04 10.55,2.2 L9.35,3.03 L11.19,6.23 L12.52,5.59 C12.79,5.46 12.88,5.15 12.74,4.89 L12.74,4.89 Z' id='Shape' />
          </g>
        </g>
      </svg>
    )
  },
  mergeSmall: () => {
    return (
      <svg width='10px' height='13px' viewBox='0 0 12 16'>
        <g id='Octicons' stroke='none' strokeWidth='1' fillRule='evenodd'>
          <g id='git-merge'>
            <path d='M10,7 C9.27,7 8.62,7.41 8.27,8.02 L8.27,8 C7.22,7.98 6,7.64 5.14,6.98 C4.39,6.4 3.64,5.37 3.25,4.54 C3.7,4.18 4,3.62 4,2.99 C4,1.88 3.11,0.99 2,0.99 C0.89,0.99 0,1.89 0,3 C0,3.73 0.41,4.38 1,4.72 L1,11.28 C0.41,11.63 0,12.27 0,13 C0,14.11 0.89,15 2,15 C3.11,15 4,14.11 4,13 C4,12.27 3.59,11.62 3,11.28 L3,7.67 C3.67,8.37 4.44,8.94 5.3,9.36 C6.16,9.78 7.33,9.99 8.27,10 L8.27,9.98 C8.63,10.59 9.27,11 10,11 C11.11,11 12,10.11 12,9 C12,7.89 11.11,7 10,7 L10,7 Z M3.2,13 C3.2,13.66 2.65,14.2 2,14.2 C1.35,14.2 0.8,13.65 0.8,13 C0.8,12.35 1.35,11.8 2,11.8 C2.65,11.8 3.2,12.35 3.2,13 L3.2,13 Z M2,4.2 C1.34,4.2 0.8,3.65 0.8,3 C0.8,2.35 1.35,1.8 2,1.8 C2.65,1.8 3.2,2.35 3.2,3 C3.2,3.65 2.65,4.2 2,4.2 L2,4.2 Z M10,10.2 C9.34,10.2 8.8,9.65 8.8,9 C8.8,8.35 9.35,7.8 10,7.8 C10.65,7.8 11.2,8.35 11.2,9 C11.2,9.65 10.65,10.2 10,10.2 L10,10.2 Z' id='Shape' />
          </g>
        </g>
      </svg>
    )
  },
  merge: () => {
    return (
      <svg width='13px' height='18px' viewBox='0 0 12 16'>
        <g id='Octicons' stroke='none' strokeWidth='1' fillRule='evenodd'>
          <g id='git-merge'>
            <path d='M10,7 C9.27,7 8.62,7.41 8.27,8.02 L8.27,8 C7.22,7.98 6,7.64 5.14,6.98 C4.39,6.4 3.64,5.37 3.25,4.54 C3.7,4.18 4,3.62 4,2.99 C4,1.88 3.11,0.99 2,0.99 C0.89,0.99 0,1.89 0,3 C0,3.73 0.41,4.38 1,4.72 L1,11.28 C0.41,11.63 0,12.27 0,13 C0,14.11 0.89,15 2,15 C3.11,15 4,14.11 4,13 C4,12.27 3.59,11.62 3,11.28 L3,7.67 C3.67,8.37 4.44,8.94 5.3,9.36 C6.16,9.78 7.33,9.99 8.27,10 L8.27,9.98 C8.63,10.59 9.27,11 10,11 C11.11,11 12,10.11 12,9 C12,7.89 11.11,7 10,7 L10,7 Z M3.2,13 C3.2,13.66 2.65,14.2 2,14.2 C1.35,14.2 0.8,13.65 0.8,13 C0.8,12.35 1.35,11.8 2,11.8 C2.65,11.8 3.2,12.35 3.2,13 L3.2,13 Z M2,4.2 C1.34,4.2 0.8,3.65 0.8,3 C0.8,2.35 1.35,1.8 2,1.8 C2.65,1.8 3.2,2.35 3.2,3 C3.2,3.65 2.65,4.2 2,4.2 L2,4.2 Z M10,10.2 C9.34,10.2 8.8,9.65 8.8,9 C8.8,8.35 9.35,7.8 10,7.8 C10.65,7.8 11.2,8.35 11.2,9 C11.2,9.65 10.65,10.2 10,10.2 L10,10.2 Z' id='Shape' />
          </g>
        </g>
      </svg>
    )
  },
  radio: () => {
    return (
      <svg width='16px' height='16px' viewBox='0 0 16 16'>
        <g id='Octicons' stroke='none' strokeWidth='1' fillRule='evenodd'>
          <g id='radio-tower'>
            <path d={`M4.79,6.11 C5.04,5.86 5.04,5.44 4.79,5.19 C4.47,4.86 4.31,4.43 4.31,4 C4.31,3.57 4.47,3.14 4.79,2.81 C5.04,2.55 5.04,2.14 4.79,1.89 C4.67,1.76 4.5,1.7 4.34,1.7 C4.18,1.7 4.01,1.76 3.89,1.89 C3.32,2.47 3.04,3.24 3.04,4 C3.04,4.76 3.33,5.53 3.89,6.11 C4.14,6.36 4.55,6.36 4.79,6.11 L4.79,6.11 Z M2.33,0.52 C2.2,0.39 2.04,0.33 1.87,0.33 C1.71,0.33 1.54,0.39 1.41,0.52 C0.48,1.48 0.01,2.74 0.01,3.99 C0.01,5.25 0.48,6.51 1.41,7.47 C1.66,7.73 2.07,7.73 2.32,7.47 C2.57,7.21 2.57,6.79 2.32,6.53 C1.64,5.83 1.3,4.91 1.3,3.99 C1.3,3.07 1.64,2.15 2.32,1.45 C2.58,1.2 2.58,0.78 2.33,0.52 L2.33,0.52 Z M8.02,5.62 C8.92,5.62 9.64,4.89 9.64,4 C9.64,3.1 8.91,2.38 8.02,2.38 C7.12,2.38 6.4,3.11 6.4,4 C6.39,4.89 7.12,5.62 8.02,5.62 L8.02,5.62 Z M14.59,0.53 C14.34,0.27 13.93,0.27 13.68,0.53 C13.43,0.79 13.43,1.21 13.68,1.47 C14.36,2.17 14.7,3.09 14.7,4.01 C14.7,4.93 14.36,5.84 13.68,6.55 C13.43,6.81 13.43,7.23 13.68,7.49 C13.81,7.62 13.97,7.68 14.14,7.68 C14.3,7.68 14.47,7.62 14.6,7.49 C15.53,6.53 16,5.27 16,4.01 C15.99,2.75 15.52,1.49 14.59,0.53 L14.59,0.53 Z M8.02,6.92 L8.02,6.92 C7.61,6.92 7.19,6.82 6.82,6.62 L3.67,14.99 L5.16,14.99 L6.02,13.99 L10.02,13.99 L10.86,14.99 L12.35,14.99 L9.21,6.62 C8.83,6.82 8.43,6.92 8.02,6.92 L8.02,6.92 Z M8.01,7.4 L9.02,11 L7.02,11 L8.01,7.4 L8.01,7.4 Z M6.02,12.99 L7.02,11.99 L9.02,11.99 L10.02,12.99 L6.02,12.99 L6.02,12.99 Z M11.21,1.89 C10.96,2.14 10.96,2.56 11.21,2.81 C11.53,3.14 11.69,3.57 11.69,4 C11.69,4.43 11.53,4.86 11.21,5.19 C10.96,5.45 10.96,5.86 11.21,6.11 C11.33,6.24 11.5,6.3 11.66,6.3 C11.82,6.3 11.98,6.24 12.11,6.11 C12.68,5.53 12.96,4.76 12.96,4 C12.96,3.24 12.68,2.47 12.11,1.89 C11.86,1.64 11.45,1.64 11.21,1.89 L11.21,1.89 Z`} id='Shape' />
          </g>
        </g>
      </svg>
    )
  },
  zap: () => {
    return (
      <svg width='10px' height='16px' viewBox='0 0 10 16'>
        <g id='Octicons' stroke='none' strokeWidth='1' fillRule='evenodd'>
          <g id='zap'>
            <polygon id='Shape' points='10 7 6 7 9 0 0 9 4 9 1 16' />
          </g>
        </g>
      </svg>
    )
  },
  beaker: () => {
    return (
      <svg width='16px' height='16px' viewBox='0 0 16 16'>
        <g id='Octicons' stroke='none' strokeWidth='1' fillRule='evenodd'>
          <g id='beaker'>
            <path d='M14.3797254,14.59 L10.9997254,7 L10.9997254,3 L11.9997254,3 L11.9997254,2 L2.99972539,2 L2.99972539,3 L3.99972539,3 L3.99972539,7 L0.62972539,14.59 C0.32972539,15.25 0.81972539,16 1.53972539,16 L13.4797254,16 C14.1997254,16 14.6797254,15.25 14.3897254,14.59 L14.3797254,14.59 Z M3.74972539,10 L4.99972539,7 L4.99972539,3 L9.99972539,3 L9.99972539,7 L11.2497254,10 L3.74972539,10 L3.74972539,10 Z M7.99972539,8 L8.99972539,8 L8.99972539,9 L7.99972539,9 L7.99972539,8 L7.99972539,8 Z M6.99972539,7 L5.99972539,7 L5.99972539,6 L6.99972539,6 L6.99972539,7 L6.99972539,7 Z M6.99972539,4 L7.99972539,4 L7.99972539,5 L6.99972539,5 L6.99972539,4 L6.99972539,4 Z M6.99972539,1 L5.99972539,1 L5.99972539,0 L6.99972539,0 L6.99972539,1 L6.99972539,1 Z' id='Shape' />
          </g>
        </g>
      </svg>
    )
  },
  location: () => {
    return (
      <svg width='18' height='18' viewBox='0 0 1792 1792'>
        <path d='M1152 640q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zm256 0q0 109-33 179l-364 774q-16 33-47.5 52t-67.5 19-67.5-19-46.5-52l-365-774q-33-70-33-179 0-212 150-362t362-150 362 150 150 362z' />
      </svg>
    )
  }
}

export default icons
