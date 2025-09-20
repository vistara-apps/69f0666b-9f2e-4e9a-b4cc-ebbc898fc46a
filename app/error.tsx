'use client'

import { AlertTriangle, RefreshCw } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center p-4">
      <div className="card max-w-md w-full text-center space-y-6">
        <div className="flex justify-center">
          <AlertTriangle className="h-16 w-16 text-error" />
        </div>
        
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-text-primary">
            Something went wrong!
          </h2>
          <p className="text-text-secondary">
            We encountered an error while loading CryptoGoal. Please try again.
          </p>
        </div>

        <button
          onClick={reset}
          className="btn-primary w-full flex items-center justify-center gap-2"
        >
          <RefreshCw className="h-4 w-4" />
          Try again
        </button>
      </div>
    </div>
  )
}
