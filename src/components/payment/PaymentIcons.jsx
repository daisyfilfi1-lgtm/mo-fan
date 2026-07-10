import React from 'react'

export const AlipayIcon = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="16" fill="#1677FF" />
    <path
      d="M21.5 19.3c-1.4.34-2.8.5-4.1.5-2.2 0-4.2-.4-5.9-1.1.6.95 1.5 1.8 2.6 2.4 3.5 1.9 7.9.6 9.8-2.9.4-.7.6-1.5.7-2.3-1 .8-2 1.4-3.1 1.7"
      fill="#FFFFFF"
    />
    <path
      d="M23.8 11.2c-1.4-1.6-3.4-2.6-5.6-2.6-3.9 0-7.1 3.2-7.1 7.1 0 1.1.2 2.1.7 3 1.7.8 3.7 1.2 5.9 1.2 1.3 0 2.7-.2 4.1-.5 1.1-.3 2.1-.9 3.1-1.7.5-2.3-.1-4.5-1.1-6.5"
      fill="#FFFFFF"
    />
    <path
      d="M25.5 18.3c-.1.8-.3 1.6-.7 2.3.3-.8.5-1.6.6-2.5-1 .8-2 1.4-3.1 1.7-1.4.34-2.8.5-4.1.5-2.2 0-4.2-.4-5.9-1.1 1.6 2.7 4.7 4.3 7.9 4.3 2.6 0 4.9-1.1 6.5-2.8"
      fill="#FFFFFF"
      opacity="0.85"
    />
  </svg>
)

export const WechatPayIcon = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="16" fill="#09BB07" />
    <path
      d="M11.3 10.5c-2.5 0-4.5 1.9-4.5 4.2 0 1.3.7 2.5 1.7 3.3l-.4 1.3 1.5-.8c.5.1 1 .2 1.6.2.2 0 .3 0 .5-.1-.1-.4-.2-.7-.2-1.1 0-2.3 2-4.1 4.5-4.1.2 0 .3 0 .5.1-.4-1.7-2.1-3-4.2-3"
      fill="#FFFFFF"
    />
    <path
      d="M19.5 14.8c-2.2 0-3.9 1.6-3.9 3.6 0 2 1.8 3.6 3.9 3.6.5 0 .9-.1 1.4-.2l1.2.7-.3-1.1c.9-.7 1.5-1.7 1.5-2.9 0-2-1.8-3.6-3.9-3.6"
      fill="#FFFFFF"
    />
    <circle cx="10" cy="13.8" r="0.6" fill="#09BB07" />
    <circle cx="12.6" cy="13.8" r="0.6" fill="#09BB07" />
    <circle cx="18.3" cy="17.8" r="0.5" fill="#09BB07" />
    <circle cx="20.6" cy="17.8" r="0.5" fill="#09BB07" />
  </svg>
)

export const SuccessIcon = ({ size = 64 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="30" fill="#00D9C0" />
    <path
      d="M19 32l9 9 17-17"
      stroke="#000000"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
)

export const FailedIcon = ({ size = 64 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="30" fill="#FAFAFA" stroke="#A3A3A3" strokeWidth="2" />
    <path
      d="M23 23l18 18M41 23L23 41"
      stroke="#737373"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
)

export const LoadingIcon = ({ size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ animation: 'spin 1s linear infinite' }}
  >
    <circle cx="24" cy="24" r="20" stroke="#E5E5E5" strokeWidth="4" fill="none" />
    <path
      d="M44 24c0-11-9-20-20-20"
      stroke="#00D9C0"
      strokeWidth="4"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
)
