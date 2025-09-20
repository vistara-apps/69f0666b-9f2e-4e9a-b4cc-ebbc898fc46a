'use client'

import { ReactNode } from 'react'

interface AppShellProps {
  children: ReactNode
  variant?: 'default' | 'compact'
}

export function AppShell({ children, variant = 'default' }: AppShellProps) {
  const containerClass = variant === 'compact' 
    ? 'min-h-screen bg-bg px-2 py-2'
    : 'min-h-screen bg-bg px-4 sm:px-6 lg:px-8 py-4'

  return (
    <div className={containerClass}>
      <div className="w-full max-w-screen-xl mx-auto">
        {children}
      </div>
    </div>
  )
}
