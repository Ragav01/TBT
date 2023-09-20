import React from 'react'

export const MenuSquare = (props) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_182_9953)">
        <path d="M1.66669 8.33332H8.33335V1.66666H1.66669V8.33332Z" stroke={props.color} stroke-width="1.5" stroke-linejoin="round"/>
        <path d="M11.6667 8.33332H18.3334V1.66666H11.6667V8.33332Z" stroke={props.color} stroke-width="1.5" stroke-linejoin="round"/>
        <path d="M1.66669 18.3333H8.33335V11.6667H1.66669V18.3333Z" stroke={props.color} stroke-width="1.5" stroke-linejoin="round"/>
        <path d="M11.6667 18.3333H18.3334V11.6667H11.6667V18.3333Z" stroke={props.color} stroke-width="1.5" stroke-linejoin="round"/>
        </g>
        <defs>
        <clipPath id="clip0_182_9953">
        <rect width="20" height="20" fill="white"/>
        </clipPath>
        </defs>
    </svg>
  )
}


const Icons = () => {
  return (
    <div>Icons</div>
  )
}

export default Icons
