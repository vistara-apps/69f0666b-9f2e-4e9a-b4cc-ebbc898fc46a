'use client'

import { useState, useEffect } from 'react'
// Removed useMiniKit import as it's not available in OnchainKit
import { AppShell } from '../components/AppShell'
import { OnboardingFlow } from '../components/OnboardingFlow'
import { Dashboard } from '../components/Dashboard'
import { GoalCreation } from '../components/GoalCreation'
import { SocialCircles } from '../components/SocialCircles'
import { LoadingSpinner } from '../components/ui/LoadingSpinner'

type AppView = 'onboarding' | 'dashboard' | 'create-goal' | 'social' | 'settings'

export default function Home() {
  // Simplified authentication - removed useMiniKit and useAuthenticate as they're not available in OnchainKit
  const [currentView, setCurrentView] = useState<AppView>('onboarding')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false)
      // For demo purposes, always start with onboarding
      // In a real app, you'd check for existing wallet connection
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    )
  }

  const handleNavigate = (view: string) => {
    setCurrentView(view as AppView)
  }

  const renderCurrentView = () => {
    switch (currentView) {
      case 'onboarding':
        return <OnboardingFlow onComplete={() => setCurrentView('dashboard')} />
      case 'dashboard':
        return <Dashboard onNavigate={handleNavigate} />
      case 'create-goal':
        return <GoalCreation onBack={() => setCurrentView('dashboard')} />
      case 'social':
        return <SocialCircles onBack={() => setCurrentView('dashboard')} />
      default:
        return <Dashboard onNavigate={handleNavigate} />
    }
  }

  return (
    <AppShell>
      <div className="opacity-100 transition-opacity duration-300">
        {renderCurrentView()}
      </div>
    </AppShell>
  )
}
