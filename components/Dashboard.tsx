'use client'

import { useState } from 'react'
import { Plus, Target, Users, Settings, TrendingUp, Wallet, Award } from 'lucide-react'
import { GoalCard } from './GoalCard'
import { YieldDisplay } from './YieldDisplay'
import { ProgressVisualizer } from './ProgressVisualizer'

interface DashboardProps {
  onNavigate: (view: string) => void
}

export function Dashboard({ onNavigate }: DashboardProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'goals' | 'yield'>('overview')

  // Mock data
  const mockGoals = [
    {
      id: '1',
      name: 'Emergency Fund',
      targetAmount: 5000,
      currentAmount: 2750,
      progress: 55,
      status: 'active' as const,
      endDate: '2024-12-31'
    },
    {
      id: '2',
      name: 'Vacation Fund',
      targetAmount: 3000,
      currentAmount: 3000,
      progress: 100,
      status: 'completed' as const,
      endDate: '2024-06-15'
    }
  ]

  const totalSavings = mockGoals.reduce((sum, goal) => sum + goal.currentAmount, 0)
  const totalYield = 245.67
  const activeGoals = mockGoals.filter(goal => goal.status === 'active').length

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Dashboard</h1>
          <p className="text-text-secondary">Track your crypto savings progress</p>
        </div>
        
        <button
          onClick={() => onNavigate('create-goal')}
          className="btn-primary flex items-center gap-2"
        >
          <Plus className="h-4 w-4" />
          New Goal
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
              <Wallet className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-text-secondary text-sm">Total Savings</p>
              <p className="text-xl font-semibold text-text-primary">
                ${totalSavings.toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-accent" />
            </div>
            <div>
              <p className="text-text-secondary text-sm">Total Yield Earned</p>
              <p className="text-xl font-semibold text-text-primary">
                ${totalYield.toFixed(2)}
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-warning/20 rounded-lg flex items-center justify-center">
              <Target className="h-5 w-5 text-warning" />
            </div>
            <div>
              <p className="text-text-secondary text-sm">Active Goals</p>
              <p className="text-xl font-semibold text-text-primary">
                {activeGoals}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 bg-surface rounded-lg p-1">
        {[
          { id: 'overview', label: 'Overview', icon: Target },
          { id: 'goals', label: 'Goals', icon: Award },
          { id: 'yield', label: 'Yield', icon: TrendingUp }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-md transition-colors duration-200 ${
              activeTab === tab.id
                ? 'bg-primary text-white'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            <tab.icon className="h-4 w-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="animate-fade-in">
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <ProgressVisualizer 
              goals={mockGoals}
              variant="chart"
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-text-primary">Recent Goals</h3>
                {mockGoals.slice(0, 2).map((goal) => (
                  <GoalCard key={goal.id} goal={goal} variant="active" />
                ))}
              </div>
              
              <YieldDisplay 
                currentYield={totalYield}
                projectedYield={totalYield * 1.2}
                variant="current"
              />
            </div>
          </div>
        )}

        {activeTab === 'goals' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-text-primary">Your Goals</h3>
              <button
                onClick={() => onNavigate('social')}
                className="btn-secondary flex items-center gap-2"
              >
                <Users className="h-4 w-4" />
                Social Goals
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mockGoals.map((goal) => (
                <GoalCard key={goal.id} goal={goal} variant={goal.status} />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'yield' && (
          <div className="space-y-6">
            <YieldDisplay 
              currentYield={totalYield}
              projectedYield={totalYield * 1.2}
              variant="projected"
            />
            
            <div className="card">
              <h3 className="text-lg font-semibold text-text-primary mb-4">Yield Sources</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Aave Lending</span>
                  <span className="text-accent font-medium">$156.23</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Compound</span>
                  <span className="text-accent font-medium">$89.44</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
