'use client'

import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

interface Goal {
  id: string
  name: string
  targetAmount: number
  currentAmount: number
  progress: number
  status: 'active' | 'completed'
}

interface ProgressVisualizerProps {
  goals: Goal[]
  variant?: 'bar' | 'chart' | 'gamified'
}

export function ProgressVisualizer({ goals, variant = 'bar' }: ProgressVisualizerProps) {
  const chartData = goals.map(goal => ({
    name: goal.name.length > 10 ? goal.name.substring(0, 10) + '...' : goal.name,
    current: goal.currentAmount,
    target: goal.targetAmount,
    progress: goal.progress
  }))

  const pieData = goals.map((goal, index) => ({
    name: goal.name,
    value: goal.currentAmount,
    color: index === 0 ? '#3B82F6' : '#10B981'
  }))

  if (variant === 'chart') {
    return (
      <div className="card">
        <h3 className="text-lg font-semibold text-text-primary mb-4">Goals Progress</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Bar Chart */}
          <div>
            <h4 className="text-sm font-medium text-text-secondary mb-3">Progress Overview</h4>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <XAxis 
                    dataKey="name" 
                    tick={{ fill: '#9CA3AF', fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis 
                    tick={{ fill: '#9CA3AF', fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Bar dataKey="current" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="target" fill="#1F2937" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Pie Chart */}
          <div>
            <h4 className="text-sm font-medium text-text-secondary mb-3">Savings Distribution</h4>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (variant === 'gamified') {
    return (
      <div className="card">
        <h3 className="text-lg font-semibold text-text-primary mb-4">Your Savings Journey</h3>
        <div className="space-y-4">
          {goals.map((goal, index) => (
            <div key={goal.id} className="relative">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  goal.status === 'completed' 
                    ? 'bg-accent text-white' 
                    : 'bg-primary/20 text-primary'
                }`}>
                  {goal.status === 'completed' ? '🏆' : '🎯'}
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-text-primary">{goal.name}</h4>
                  <div className="w-full bg-bg rounded-full h-3 mt-2">
                    <div
                      className={`h-3 rounded-full transition-all duration-300 ${
                        goal.status === 'completed' ? 'bg-accent' : 'bg-primary'
                      }`}
                      style={{ width: `${Math.min(goal.progress, 100)}%` }}
                    />
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-text-primary">{goal.progress}%</p>
                  <p className="text-xs text-text-secondary">
                    ${goal.currentAmount.toLocaleString()}
                  </p>
                </div>
              </div>
              {index < goals.length - 1 && (
                <div className="w-0.5 h-8 bg-gray-700 ml-6 mt-2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="card">
      <h3 className="text-lg font-semibold text-text-primary mb-4">Progress Overview</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <XAxis 
              dataKey="name" 
              tick={{ fill: '#9CA3AF', fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis 
              tick={{ fill: '#9CA3AF', fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <Bar dataKey="current" fill="#3B82F6" radius={[4, 4, 0, 0]} />
            <Bar dataKey="target" fill="#1F2937" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
