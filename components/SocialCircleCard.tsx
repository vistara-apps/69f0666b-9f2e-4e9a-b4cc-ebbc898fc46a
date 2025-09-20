'use client'

import { Users, Target, TrendingUp, Lock, Globe } from 'lucide-react'

interface SocialCircle {
  id: string
  name: string
  goalName: string
  memberCount: number
  targetAmount: number
  currentAmount: number
  progress: number
  isPublic: boolean
  createdBy: string
}

interface SocialCircleCardProps {
  circle: SocialCircle
  variant?: 'public' | 'private'
}

export function SocialCircleCard({ circle, variant = 'public' }: SocialCircleCardProps) {
  const isPrivate = variant === 'private'
  
  return (
    <div className={`card transition-all duration-200 hover:shadow-lg ${
      isPrivate ? 'border-accent/30 bg-accent/5' : 'hover:border-primary/50'
    }`}>
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
            isPrivate 
              ? 'bg-accent/20 text-accent' 
              : 'bg-primary/20 text-primary'
          }`}>
            <Users className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-semibold text-text-primary">{circle.name}</h3>
            <div className="flex items-center gap-2">
              <span className="text-sm text-text-secondary">{circle.memberCount} members</span>
              {circle.isPublic ? (
                <Globe className="h-3 w-3 text-text-secondary" />
              ) : (
                <Lock className="h-3 w-3 text-text-secondary" />
              )}
            </div>
          </div>
        </div>
        
        <div className="text-right">
          <p className="text-sm text-text-secondary">Progress</p>
          <p className="font-semibold text-text-primary">{circle.progress}%</p>
        </div>
      </div>

      {/* Goal Info */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <Target className="h-4 w-4 text-text-secondary" />
          <span className="text-sm font-medium text-text-primary">{circle.goalName}</span>
        </div>
        <p className="text-sm text-text-secondary">
          ${circle.currentAmount.toLocaleString()} / ${circle.targetAmount.toLocaleString()}
        </p>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="w-full bg-bg rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all duration-300 ${
              isPrivate ? 'bg-accent' : 'bg-primary'
            }`}
            style={{ width: `${Math.min(circle.progress, 100)}%` }}
          />
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-text-secondary">
          Created by {circle.createdBy}
        </div>
        
        <div className="flex items-center gap-2">
          {!isPrivate && (
            <button className="btn-secondary text-sm py-2 px-4">
              Join Circle
            </button>
          )}
          {isPrivate && (
            <div className="flex items-center gap-1 text-accent text-sm">
              <TrendingUp className="h-4 w-4" />
              Earning yield
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
