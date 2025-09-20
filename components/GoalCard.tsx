'use client'

import { Target, Calendar, TrendingUp, CheckCircle } from 'lucide-react'

interface Goal {
  id: string
  name: string
  targetAmount: number
  currentAmount: number
  progress: number
  status: 'active' | 'completed'
  endDate: string
}

interface GoalCardProps {
  goal: Goal
  variant?: 'active' | 'completed'
}

export function GoalCard({ goal, variant = 'active' }: GoalCardProps) {
  const isCompleted = goal.status === 'completed'
  
  return (
    <div className={`card transition-all duration-200 hover:shadow-lg ${
      isCompleted ? 'border-accent/50 bg-accent/5' : 'hover:border-primary/50'
    }`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
            isCompleted 
              ? 'bg-accent/20 text-accent' 
              : 'bg-primary/20 text-primary'
          }`}>
            {isCompleted ? (
              <CheckCircle className="h-5 w-5" />
            ) : (
              <Target className="h-5 w-5" />
            )}
          </div>
          <div>
            <h3 className="font-semibold text-text-primary">{goal.name}</h3>
            <p className="text-sm text-text-secondary">
              ${goal.currentAmount.toLocaleString()} / ${goal.targetAmount.toLocaleString()}
            </p>
          </div>
        </div>
        
        {isCompleted && (
          <div className="text-accent text-sm font-medium">
            Completed!
          </div>
        )}
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-text-secondary">Progress</span>
          <span className="text-sm font-medium text-text-primary">
            {goal.progress}%
          </span>
        </div>
        <div className="w-full bg-bg rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all duration-300 ${
              isCompleted ? 'bg-accent' : 'bg-primary'
            }`}
            style={{ width: `${Math.min(goal.progress, 100)}%` }}
          />
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-1 text-text-secondary">
          <Calendar className="h-4 w-4" />
          {new Date(goal.endDate).toLocaleDateString()}
        </div>
        
        {!isCompleted && (
          <div className="flex items-center gap-1 text-accent">
            <TrendingUp className="h-4 w-4" />
            Earning yield
          </div>
        )}
      </div>
    </div>
  )
}
