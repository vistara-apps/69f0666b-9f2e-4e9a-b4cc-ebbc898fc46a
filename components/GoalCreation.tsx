'use client'

import { useState } from 'react'
import { ArrowLeft, Target, Calendar, DollarSign, Zap } from 'lucide-react'
import { SavingsRuleForm } from './SavingsRuleForm'

interface GoalCreationProps {
  onBack: () => void
}

export function GoalCreation({ onBack }: GoalCreationProps) {
  const [step, setStep] = useState(1)
  const [goalData, setGoalData] = useState({
    name: '',
    targetAmount: '',
    endDate: '',
    description: ''
  })

  const handleGoalSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (goalData.name && goalData.targetAmount) {
      setStep(2)
    }
  }

  const handleRuleComplete = () => {
    // Handle rule creation completion
    onBack()
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <button
          onClick={onBack}
          className="w-10 h-10 bg-surface rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
        >
          <ArrowLeft className="h-5 w-5 text-text-primary" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Create New Goal</h1>
          <p className="text-text-secondary">Set up your savings target and automation rules</p>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="flex items-center gap-4 mb-8">
        <div className={`flex items-center gap-2 ${step >= 1 ? 'text-primary' : 'text-text-secondary'}`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
            step >= 1 ? 'bg-primary text-white' : 'bg-surface text-text-secondary'
          }`}>
            1
          </div>
          <span className="text-sm font-medium">Goal Details</span>
        </div>
        
        <div className="flex-1 h-0.5 bg-gray-700"></div>
        
        <div className={`flex items-center gap-2 ${step >= 2 ? 'text-primary' : 'text-text-secondary'}`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
            step >= 2 ? 'bg-primary text-white' : 'bg-surface text-text-secondary'
          }`}>
            2
          </div>
          <span className="text-sm font-medium">Savings Rules</span>
        </div>
      </div>

      {step === 1 && (
        <form onSubmit={handleGoalSubmit} className="space-y-6">
          <div className="card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                <Target className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-text-primary">Goal Information</h3>
                <p className="text-sm text-text-secondary">Define your savings target</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Goal Name *
                </label>
                <input
                  type="text"
                  value={goalData.name}
                  onChange={(e) => setGoalData({ ...goalData, name: e.target.value })}
                  placeholder="e.g., Emergency Fund, Vacation, New Car"
                  className="input-field w-full"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Target Amount (USD) *
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-text-secondary" />
                    <input
                      type="number"
                      value={goalData.targetAmount}
                      onChange={(e) => setGoalData({ ...goalData, targetAmount: e.target.value })}
                      placeholder="5000"
                      className="input-field w-full pl-10"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Target Date (Optional)
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-text-secondary" />
                    <input
                      type="date"
                      value={goalData.endDate}
                      onChange={(e) => setGoalData({ ...goalData, endDate: e.target.value })}
                      className="input-field w-full pl-10"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Description (Optional)
                </label>
                <textarea
                  value={goalData.description}
                  onChange={(e) => setGoalData({ ...goalData, description: e.target.value })}
                  placeholder="What is this goal for? Any additional details..."
                  rows={3}
                  className="input-field w-full resize-none"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button type="submit" className="btn-primary flex items-center gap-2">
              Continue to Rules
              <Zap className="h-4 w-4" />
            </button>
          </div>
        </form>
      )}

      {step === 2 && (
        <SavingsRuleForm
          goalName={goalData.name}
          onComplete={handleRuleComplete}
          variant="base"
        />
      )}
    </div>
  )
}
