'use client'

import { useState } from 'react'
import { Zap, Calendar, Percent, DollarSign, Clock, Repeat } from 'lucide-react'

interface SavingsRuleFormProps {
  goalName: string
  onComplete: () => void
  variant?: 'base' | 'advanced'
}

export function SavingsRuleForm({ goalName, onComplete, variant = 'base' }: SavingsRuleFormProps) {
  const [ruleType, setRuleType] = useState<'percentage' | 'fixed' | 'schedule'>('percentage')
  const [ruleData, setRuleData] = useState({
    triggerType: 'incoming',
    amount: '',
    percentage: '',
    frequency: 'weekly',
    dayOfWeek: 'monday',
    asset: 'ETH'
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle rule creation
    onComplete()
  }

  const ruleTypes = [
    {
      id: 'percentage',
      name: 'Percentage Based',
      description: 'Save a percentage of incoming transactions',
      icon: Percent
    },
    {
      id: 'fixed',
      name: 'Fixed Amount',
      description: 'Save a fixed amount regularly',
      icon: DollarSign
    },
    {
      id: 'schedule',
      name: 'Scheduled Transfer',
      description: 'Transfer on specific days/times',
      icon: Calendar
    }
  ]

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="card">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
            <Zap className="h-5 w-5 text-accent" />
          </div>
          <div>
            <h3 className="font-semibold text-text-primary">Automation Rules</h3>
            <p className="text-sm text-text-secondary">
              Set up automatic savings for "{goalName}"
            </p>
          </div>
        </div>

        {/* Rule Type Selection */}
        <div className="space-y-4 mb-6">
          <h4 className="font-medium text-text-primary">Choose Rule Type</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {ruleTypes.map((type) => (
              <button
                key={type.id}
                type="button"
                onClick={() => setRuleType(type.id as any)}
                className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                  ruleType === type.id
                    ? 'border-primary bg-primary/10'
                    : 'border-gray-700 bg-surface hover:border-gray-600'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <type.icon className={`h-5 w-5 ${
                    ruleType === type.id ? 'text-primary' : 'text-text-secondary'
                  }`} />
                  <span className={`font-medium ${
                    ruleType === type.id ? 'text-primary' : 'text-text-primary'
                  }`}>
                    {type.name}
                  </span>
                </div>
                <p className="text-sm text-text-secondary">{type.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Rule Configuration */}
        <div className="space-y-4">
          {ruleType === 'percentage' && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Trigger Event
                  </label>
                  <select
                    value={ruleData.triggerType}
                    onChange={(e) => setRuleData({ ...ruleData, triggerType: e.target.value })}
                    className="input-field w-full"
                  >
                    <option value="incoming">Incoming transactions</option>
                    <option value="balance">Balance increase</option>
                    <option value="yield">Yield earned</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Percentage to Save
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={ruleData.percentage}
                      onChange={(e) => setRuleData({ ...ruleData, percentage: e.target.value })}
                      placeholder="10"
                      min="1"
                      max="100"
                      className="input-field w-full pr-10"
                      required
                    />
                    <Percent className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-text-secondary" />
                  </div>
                </div>
              </div>
            </>
          )}

          {ruleType === 'fixed' && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Fixed Amount (USD)
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-text-secondary" />
                    <input
                      type="number"
                      value={ruleData.amount}
                      onChange={(e) => setRuleData({ ...ruleData, amount: e.target.value })}
                      placeholder="100"
                      className="input-field w-full pl-10"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Frequency
                  </label>
                  <select
                    value={ruleData.frequency}
                    onChange={(e) => setRuleData({ ...ruleData, frequency: e.target.value })}
                    className="input-field w-full"
                  >
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                  </select>
                </div>
              </div>
            </>
          )}

          {ruleType === 'schedule' && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Amount (USD)
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-text-secondary" />
                    <input
                      type="number"
                      value={ruleData.amount}
                      onChange={(e) => setRuleData({ ...ruleData, amount: e.target.value })}
                      placeholder="50"
                      className="input-field w-full pl-10"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Frequency
                  </label>
                  <select
                    value={ruleData.frequency}
                    onChange={(e) => setRuleData({ ...ruleData, frequency: e.target.value })}
                    className="input-field w-full"
                  >
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Day of Week
                  </label>
                  <select
                    value={ruleData.dayOfWeek}
                    onChange={(e) => setRuleData({ ...ruleData, dayOfWeek: e.target.value })}
                    className="input-field w-full"
                  >
                    <option value="monday">Monday</option>
                    <option value="tuesday">Tuesday</option>
                    <option value="wednesday">Wednesday</option>
                    <option value="thursday">Thursday</option>
                    <option value="friday">Friday</option>
                    <option value="saturday">Saturday</option>
                    <option value="sunday">Sunday</option>
                  </select>
                </div>
              </div>
            </>
          )}

          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Asset to Save
            </label>
            <select
              value={ruleData.asset}
              onChange={(e) => setRuleData({ ...ruleData, asset: e.target.value })}
              className="input-field w-full"
            >
              <option value="ETH">ETH</option>
              <option value="USDC">USDC</option>
              <option value="WETH">WETH</option>
            </select>
          </div>
        </div>
      </div>

      {/* Rule Preview */}
      <div className="card bg-primary/5 border-primary/20">
        <h4 className="font-medium text-text-primary mb-3 flex items-center gap-2">
          <Repeat className="h-4 w-4 text-primary" />
          Rule Preview
        </h4>
        <p className="text-sm text-text-secondary">
          {ruleType === 'percentage' && ruleData.percentage && (
            `Save ${ruleData.percentage}% of ${ruleData.triggerType} ${ruleData.asset} transactions to "${goalName}"`
          )}
          {ruleType === 'fixed' && ruleData.amount && (
            `Save $${ruleData.amount} worth of ${ruleData.asset} ${ruleData.frequency} to "${goalName}"`
          )}
          {ruleType === 'schedule' && ruleData.amount && (
            `Save $${ruleData.amount} worth of ${ruleData.asset} every ${ruleData.dayOfWeek} to "${goalName}"`
          )}
        </p>
      </div>

      <div className="flex justify-end gap-3">
        <button type="button" className="btn-secondary">
          Save as Draft
        </button>
        <button type="submit" className="btn-primary flex items-center gap-2">
          <Zap className="h-4 w-4" />
          Activate Rule
        </button>
      </div>
    </form>
  )
}
