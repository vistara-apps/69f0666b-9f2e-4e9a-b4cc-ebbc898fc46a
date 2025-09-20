'use client'

import { TrendingUp, DollarSign, Calendar } from 'lucide-react'

interface YieldDisplayProps {
  currentYield: number
  projectedYield: number
  variant?: 'current' | 'projected'
}

export function YieldDisplay({ currentYield, projectedYield, variant = 'current' }: YieldDisplayProps) {
  const yieldGrowth = ((projectedYield - currentYield) / currentYield * 100).toFixed(1)
  
  return (
    <div className="card">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
          <TrendingUp className="h-5 w-5 text-accent" />
        </div>
        <div>
          <h3 className="font-semibold text-text-primary">Yield Overview</h3>
          <p className="text-sm text-text-secondary">Your passive income growth</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Current Yield */}
        <div className="flex items-center justify-between p-4 bg-bg rounded-lg">
          <div className="flex items-center gap-3">
            <DollarSign className="h-5 w-5 text-accent" />
            <div>
              <p className="text-sm text-text-secondary">Total Earned</p>
              <p className="text-xl font-semibold text-text-primary">
                ${currentYield.toFixed(2)}
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-text-secondary">APY</p>
            <p className="text-lg font-medium text-accent">4.2%</p>
          </div>
        </div>

        {variant === 'projected' && (
          <div className="flex items-center justify-between p-4 bg-primary/10 rounded-lg border border-primary/20">
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm text-text-secondary">Projected (30 days)</p>
                <p className="text-xl font-semibold text-text-primary">
                  ${projectedYield.toFixed(2)}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-text-secondary">Growth</p>
              <p className="text-lg font-medium text-accent">+{yieldGrowth}%</p>
            </div>
          </div>
        )}

        {/* Yield Sources */}
        <div>
          <h4 className="font-medium text-text-primary mb-3">Active Protocols</h4>
          <div className="space-y-2">
            <div className="flex justify-between items-center py-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm text-text-secondary">Aave V3</span>
              </div>
              <span className="text-sm font-medium text-text-primary">$156.23</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm text-text-secondary">Compound</span>
              </div>
              <span className="text-sm font-medium text-text-primary">$89.44</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
