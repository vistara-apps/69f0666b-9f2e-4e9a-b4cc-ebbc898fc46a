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
          <h1 className="text-2xl font-bold text-white">Dashboard</h1>
          <p className="text-gray-400">Track your crypto savings progress</p>
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
            <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
              <Wallet className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Total Savings</p>
              <p className="text-xl font-semibold text-white">
                ${totalSavings.toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Total Yield Earned</p>
              <p className="text-xl font-semibold text-white">
                ${totalYield.toFixed(2)}
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-yellow-600/20 rounded-lg flex items-center justify-center">
              <Target className="h-5 w-5 text-yellow-600" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Active Goals</p>
              <p className="text-xl font-semibold text-white">
                {activeGoals}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 bg-gray-800 rounded-lg p-1">
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
                ? 'bg-blue-600 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <tab.icon className="h-4 w-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="opacity-100 transition-opacity duration-300">
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <ProgressVisualizer 
              goals={mockGoals}
              variant="chart"
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Recent Goals</h3>
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
              <h3 className="text-lg font-semibold text-white">Your Goals</h3>
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
              <h3 className="text-lg font-semibold text-white mb-4">Yield Sources</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Aave Lending</span>
                  <span className="text-green-600 font-medium">$156.23</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Compound</span>
                  <span className="text-green-600 font-medium">$89.44</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
