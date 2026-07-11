import React from 'react'

export const AlipayIcon = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M102.41,32C62.38,32,32,64.12,32,103.78V408.23C32,447.86,64.38,480,104.41,480h303.2c40,0,72.39-32.14,72.39-71.77v-3.11c-1.35-.56-115.47-48.57-174.5-76.7-39.82,48.57-91.18,78-144.5,78-90.18,0-120.8-78.22-78.1-129.72,9.31-11.22,25.15-21.94,49.73-28,38.45-9.36,99.64,5.85,157,24.61a309.41,309.41,0,0,0,25.46-61.67H138.34V194h91.13V162.17H119.09V144.42H229.47V99s0-7.65,7.82-7.65h44.55v53H391v17.75H281.84V194h89.08a359.41,359.41,0,0,1-37.72,94.43c27,9.69,49.31,18.88,67.39,24.89,60.32,20,77.23,22.45,79.41,22.7V103.78C480,64.12,447.6,32,407.61,32H102.41ZM152,274.73q-5.81.06-11.67.63c-11.3,1.13-32.5,6.07-44.09,16.23-34.74,30-13.94,84.93,56.37,84.93,40.87,0,81.71-25.9,113.79-67.37-41.36-20-77-34.85-114.4-34.42Z"
      fill="#1677FF"
    />
  </svg>
)

export const WechatPayIcon = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9.27 14.669a.662.662 0 0 1-.88-.269l-.043-.095-1.818-3.998a.473.473 0 0 1 0-.145.327.327 0 0 1 .335-.328.305.305 0 0 1 .196.066l2.18 1.527a.989.989 0 0 0 .546.167.894.894 0 0 0 .342-.066l10.047-4.5a10.73 10.73 0 0 0-8.171-3.526C6.478 3.502 2 7.232 2 11.87a7.83 7.83 0 0 0 3.46 6.296.662.662 0 0 1 .24.727l-.45 1.701a.945.945 0 0 0-.051.24.327.327 0 0 0 .334.334.414.414 0 0 0 .19-.058l2.18-1.265c.16-.098.343-.151.531-.152.099 0 .197.014.29.043 1.063.3 2.161.452 3.265.45 5.525 0 10.01-3.729 10.01-8.33a7.226 7.226 0 0 0-1.097-3.883L9.35 14.625l-.08.044z"
      fill="#09BB07"
    />
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
