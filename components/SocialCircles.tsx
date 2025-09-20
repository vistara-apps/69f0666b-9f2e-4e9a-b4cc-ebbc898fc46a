'use client'

import { useState } from 'react'
import { ArrowLeft, Users, Plus, Search, Crown, Target } from 'lucide-react'
import { SocialCircleCard } from './SocialCircleCard'

interface SocialCirclesProps {
  onBack: () => void
}

export function SocialCircles({ onBack }: SocialCirclesProps) {
  const [activeTab, setActiveTab] = useState<'discover' | 'my-circles'>('discover')
  const [searchQuery, setSearchQuery] = useState('')

  // Mock data
  const publicCircles = [
    {
      id: '1',
      name: 'DeFi Builders',
      goalName: 'Emergency Fund',
      memberCount: 12,
      targetAmount: 50000,
      currentAmount: 32500,
      progress: 65,
      isPublic: true,
      createdBy: 'alice.eth'
    },
    {
      id: '2',
      name: 'Crypto Nomads',
      goalName: 'Travel Fund',
      memberCount: 8,
      targetAmount: 25000,
      currentAmount: 18750,
      progress: 75,
      isPublic: true,
      createdBy: 'bob.base'
    }
  ]

  const myCircles = [
    {
      id: '3',
      name: 'Family Savings',
      goalName: 'House Down Payment',
      memberCount: 4,
      targetAmount: 100000,
      currentAmount: 45000,
      progress: 45,
      isPublic: false,
      createdBy: 'you'
    }
  ]

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <button
          onClick={onBack}
          className="w-10 h-10 bg-surface rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
        >
          <ArrowLeft className="h-5 w-5 text-text-primary" />
        </button>
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-text-primary">Social Savings</h1>
          <p className="text-text-secondary">Save together with friends and community</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Create Circle
        </button>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 bg-surface rounded-lg p-1">
        {[
          { id: 'discover', label: 'Discover', icon: Search },
          { id: 'my-circles', label: 'My Circles', icon: Users }
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

      {/* Search Bar */}
      {activeTab === 'discover' && (
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-text-secondary" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search circles by name, goal, or creator..."
            className="input-field w-full pl-10"
          />
        </div>
      )}

      {/* Content */}
      <div className="animate-fade-in">
        {activeTab === 'discover' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-text-primary">Public Circles</h3>
              <span className="text-sm text-text-secondary">
                {publicCircles.length} circles available
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {publicCircles.map((circle) => (
                <SocialCircleCard 
                  key={circle.id} 
                  circle={circle} 
                  variant="public" 
                />
              ))}
            </div>

            {/* Featured Section */}
            <div className="card bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
              <div className="flex items-center gap-3 mb-4">
                <Crown className="h-6 w-6 text-warning" />
                <h3 className="font-semibold text-text-primary">Featured Circle</h3>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-text-primary">Base Builders Collective</h4>
                <p className="text-sm text-text-secondary">
                  Join 50+ builders saving for the next bull run. Goal: $1M collective savings.
                </p>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-sm text-accent">87% complete</span>
                  <button className="btn-primary text-sm py-2 px-4">
                    Join Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'my-circles' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-text-primary">Your Circles</h3>
              <span className="text-sm text-text-secondary">
                {myCircles.length} active circle{myCircles.length !== 1 ? 's' : ''}
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {myCircles.map((circle) => (
                <SocialCircleCard 
                  key={circle.id} 
                  circle={circle} 
                  variant="private" 
                />
              ))}
            </div>

            {myCircles.length === 0 && (
              <div className="card text-center py-12">
                <Users className="h-12 w-12 text-text-secondary mx-auto mb-4" />
                <h3 className="font-medium text-text-primary mb-2">No circles yet</h3>
                <p className="text-text-secondary mb-6">
                  Create or join a savings circle to start saving with others
                </p>
                <button className="btn-primary">
                  Create Your First Circle
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
