'use client'

import { useState, useEffect } from 'react'
import { useMiniKit } from '@coinbase/minikit'
import { useAuthenticate } from '@coinbase/onchainkit/minikit'
import { AppShell } from '../components/AppShell'
import { OnboardingFlow } from '../components/OnboardingFlow'
import { Dashboard } from '../components/Dashboard'
import { GoalCreation } from '../components/GoalCreation'
import { SocialCircles } from '../components/SocialCircles'
import { LoadingSpinner } from '../components/ui/LoadingSpinner'

type AppView = 'onboarding' | 'dashboard' | 'create-goal' | 'social' | 'settings'

export default function Home() {
  const { context } = useMiniKit()
  const { user } = useAuthenticate()
  const [currentView, setCurrentView] = useState<AppView>('onboarding')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false)
      if (user) {
        setCurrentView('dashboard')
      }
    }, 1000)

    return () => clearTimeout(timer)
  }, [user])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    )
  }

  const renderCurrentView = () => {
    switch (currentView) {
      case 'onboarding':
        return <OnboardingFlow onComplete={() => setCurrentView('dashboard')} />
      case 'dashboard':
        return <Dashboard onNavigate={setCurrentView} />
      case 'create-goal':
        return <GoalCreation onBack={() => setCurrentView('dashboard')} />
      case 'social':
        return <SocialCircles onBack={() => setCurrentView('dashboard')} />
      default:
        return <Dashboard onNavigate={setCurrentView} />
    }
  }

  return (
    <AppShell>
      <div className="animate-fade-in">
        {renderCurrentView()}
      </div>
    </AppShell>
  )
}
