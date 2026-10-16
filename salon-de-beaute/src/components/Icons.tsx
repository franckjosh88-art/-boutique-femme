interface IconProps {
  className?: string
}

export function ArrowLeft({ className = 'size-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M19 12H5m0 0 6-6m-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ArrowRight({ className = 'size-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M5 12h14m0 0-6-6m6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ChevronDown({ className = 'size-4' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function MenuIcon({ className = 'size-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
    </svg>
  )
}

export function CloseIcon({ className = 'size-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="m6 6 12 12M18 6 6 18" strokeLinecap="round" />
    </svg>
  )
}

export function PhoneIcon({ className = 'size-4' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M3 5.5A1.5 1.5 0 0 1 4.5 4h2.2a1.5 1.5 0 0 1 1.45 1.1l.7 2.1a1.5 1.5 0 0 1-.45 1.6L7.3 10a12 12 0 0 0 6.7 6.7l1.2-1.1a1.5 1.5 0 0 1 1.6-.45l2.1.7A1.5 1.5 0 0 1 20 17.3v2.2a1.5 1.5 0 0 1-1.5 1.5C10.3 21 3 13.7 3 5.5Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function WhatsappIcon({ className = 'size-4' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.74.46 3.44 1.32 4.94L2 22l5.35-1.4a9.8 9.8 0 0 0 4.69 1.2h.01c5.43 0 9.84-4.4 9.84-9.85C21.89 6.4 17.47 2 12.04 2Zm0 17.9h-.01a8.2 8.2 0 0 1-4.16-1.14l-.3-.18-3.09.81.82-3.01-.2-.31a8.13 8.13 0 0 1-1.25-4.34c0-4.51 3.67-8.18 8.19-8.18a8.14 8.14 0 0 1 8.18 8.19c0 4.51-3.67 8.16-8.18 8.16Zm4.49-6.11c-.25-.13-1.46-.72-1.68-.8-.23-.09-.39-.13-.55.12-.17.25-.64.8-.78.97-.14.16-.29.19-.53.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.7-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.43.06-.65.31-.22.25-.85.83-.85 2.03s.87 2.35 1 2.51c.12.17 1.71 2.62 4.15 3.67.58.25 1.03.4 1.39.51.58.19 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.05.14-1.16-.06-.1-.22-.17-.47-.29Z" />
    </svg>
  )
}

export function InstagramIcon({ className = 'size-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function FacebookIcon({ className = 'size-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.87.24-1.46 1.5-1.46H16.6V4.44c-.29-.04-1.27-.12-2.41-.12-2.39 0-4.03 1.46-4.03 4.13v2.55H7.5v3h2.66V21h3.34Z" />
    </svg>
  )
}

export function TiktokIcon({ className = 'size-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.5 3c.4 2.1 1.8 3.5 4 3.7v2.5c-1.5.1-2.9-.3-4.2-1.1v5.9c0 3.6-2.5 5.9-5.6 5.9A5.4 5.4 0 0 1 5.3 14.4c0-3.1 2.5-5.4 5.9-5.3v2.6c-1.9-.2-3.3 1-3.3 2.6 0 1.6 1.2 2.7 2.9 2.6 1.7-.1 3-1.4 3-3.4V3h2.7Z" />
    </svg>
  )
}

export function StarIcon({ className = 'size-4' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="m12 3.6 2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.6-4.8 2.6.9-5.4-3.9-3.8 5.4-.8L12 3.6Z" />
    </svg>
  )
}

export function MapPinIcon({ className = 'size-4' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  )
}

export function ClockIcon({ className = 'size-4' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 1.8" strokeLinecap="round" />
    </svg>
  )
}

export function CheckIcon({ className = 'size-4' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="m5 13 4.5 4.5L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ScissorsIcon({ className = 'size-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      <circle cx="6" cy="6.5" r="2.6" />
      <circle cx="6" cy="17.5" r="2.6" />
      <path d="M8.2 8 20 18M8.2 16 20 6" strokeLinecap="round" />
    </svg>
  )
}

export function SparkleIcon({ className = 'size-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      <path d="M12 3.5c.6 3.4 1.9 4.7 5.3 5.3-3.4.6-4.7 1.9-5.3 5.3-.6-3.4-1.9-4.7-5.3-5.3 3.4-.6 4.7-1.9 5.3-5.3Z" strokeLinejoin="round" />
      <path d="M17.5 15c.3 1.9 1 2.6 2.9 2.9-1.9.3-2.6 1-2.9 2.9-.3-1.9-1-2.6-2.9-2.9 1.9-.3 2.6-1 2.9-2.9Z" strokeLinejoin="round" />
    </svg>
  )
}

export function GoogleIcon({ className = 'size-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M21.6 12.2c0-.7-.06-1.4-.18-2.05H12v3.9h5.4a4.6 4.6 0 0 1-2 3v2.5h3.24c1.9-1.74 2.96-4.3 2.96-7.35Z" />
      <path fill="#34A853" d="M12 22c2.7 0 4.96-.9 6.64-2.43l-3.24-2.5c-.9.6-2.05.96-3.4.96-2.6 0-4.8-1.76-5.6-4.12H3.05v2.6A10 10 0 0 0 12 22Z" />
      <path fill="#FBBC05" d="M6.4 13.91a6 6 0 0 1 0-3.82v-2.6H3.05a10 10 0 0 0 0 9.02l3.35-2.6Z" />
      <path fill="#EA4335" d="M12 5.97c1.47 0 2.8.5 3.84 1.5l2.88-2.88A9.62 9.62 0 0 0 12 2a10 10 0 0 0-8.95 5.49l3.35 2.6C7.2 7.73 9.4 5.97 12 5.97Z" />
    </svg>
  )
}