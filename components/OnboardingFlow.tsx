'use client'

import { useState } from 'react'
import { useMiniKit } from '@coinbase/minikit'
import { useAuthenticate } from '@coinbase/onchainkit/minikit'
import { Wallet, Target, Users, TrendingUp, ArrowRight } from 'lucide-react'
import { LoadingSpinner } from './ui/LoadingSpinner'

interface OnboardingFlowProps {
  onComplete: () => void
  variant?: 'wallet-connect' | 'goal-setup'
}

export function OnboardingFlow({ onComplete, variant = 'wallet-connect' }: OnboardingFlowProps) {
  const { context } = useMiniKit()
  const { user } = useAuthenticate()
  const [isConnecting, setIsConnecting] = useState(false)
  const [step, setStep] = useState(0)

  const handleConnectWallet = async () => {
    setIsConnecting(true)
    try {
      // Wallet connection will be handled by MiniKit
      // This is a placeholder for the actual connection logic
      await new Promise(resolve => setTimeout(resolve, 2000))
      setStep(1)
    } catch (error) {
      console.error('Wallet connection failed:', error)
    } finally {
      setIsConnecting(false)
    }
  }

  const features = [
    {
      icon: Target,
      title: 'Smart Savings Rules',
      description: 'Automate your crypto savings with custom rules and triggers'
    },
    {
      icon: TrendingUp,
      title: 'Earn Yield',
      description: 'Generate passive income on your saved crypto assets'
    },
    {
      icon: Users,
      title: 'Social Goals',
      description: 'Save together with friends and stay motivated'
    }
  ]

  if (step === 0) {
    return (
      <div className="max-w-md mx-auto space-y-8 py-8">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-xl mx-auto flex items-center justify-center">
            <Wallet className="h-10 w-10 text-white" />
          </div>
          
          <h1 className="text-3xl font-bold gradient-text">
            Welcome to CryptoGoal
          </h1>
          
          <p className="text-text-secondary text-balance">
            Automate your crypto savings, visualize your progress, and earn yield effortlessly.
          </p>
        </div>

        {/* Features */}
        <div className="space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-surface/50">
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-text-primary">{feature.title}</h3>
                <p className="text-sm text-text-secondary">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Connect Button */}
        <button
          onClick={handleConnectWallet}
          disabled={isConnecting}
          className="btn-primary w-full flex items-center justify-center gap-2"
        >
          {isConnecting ? (
            <>
              <LoadingSpinner size="sm" />
              Connecting...
            </>
          ) : (
            <>
              <Wallet className="h-5 w-5" />
              Connect Base Wallet
            </>
          )}
        </button>

        <p className="text-xs text-text-secondary text-center">
          By connecting, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    )
  }

  if (step === 1) {
    return (
      <div className="max-w-md mx-auto space-y-8 py-8">
        <div className="text-center space-y-4">
          <div className="w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-xl mx-auto flex items-center justify-center">
            <Target className="h-10 w-10 text-white" />
          </div>
          
          <h2 className="text-2xl font-bold text-text-primary">
            You're all set!
          </h2>
          
          <p className="text-text-secondary">
            Your Base wallet is connected. Ready to start your crypto savings journey?
          </p>
        </div>

        <div className="card space-y-4">
          <h3 className="font-semibold text-text-primary">Quick Start Tips:</h3>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
              Set your first savings goal
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
              Create automated savings rules
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
              Join social savings circles
            </li>
          </ul>
        </div>

        <button
          onClick={onComplete}
          className="btn-primary w-full flex items-center justify-center gap-2"
        >
          Get Started
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    )
  }

  return null
}
