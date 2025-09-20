import { LoadingSpinner } from '../components/ui/LoadingSpinner'

export default function Loading() {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center">
      <div className="text-center space-y-4">
        <LoadingSpinner size="lg" />
        <p className="text-text-secondary">Loading CryptoGoal...</p>
      </div>
    </div>
  )
}
