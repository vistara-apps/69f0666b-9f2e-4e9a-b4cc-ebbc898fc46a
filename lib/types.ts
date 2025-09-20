// User Types
export interface User {
  userId: string
  farcasterId: string
  connectedWalletAddress: string
  savingsBalance: number
  goalProgress: number
  proSubscriptionStatus: boolean
  createdAt: string
}

// Savings Goal Types
export interface SavingsGoal {
  goalId: string
  userId: string
  goalName: string
  targetAmount: number
  currentAmount: number
  startTime: string
  endTime: string
  status: 'active' | 'completed' | 'paused'
  progress: number
}

// Social Savings Circle Types
export interface SocialSavingsCircle {
  circleId: string
  circleName: string
  goalId: string
  memberIds: string[]
  createdAt: string
  isPublic: boolean
  createdBy: string
}

// Savings Rule Types
export interface SavingsRule {
  ruleId: string
  userId: string
  ruleType: 'percentage' | 'fixed' | 'schedule'
  triggerCondition: string
  transferAmount: number
  transferAsset: string
  isEnabled: boolean
  frequency?: string
  dayOfWeek?: string
  percentage?: number
}

// API Response Types
export interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
  error?: string
}

// Yield Types
export interface YieldData {
  protocol: string
  amount: number
  apy: number
  earned: number
}

// Transaction Types
export interface Transaction {
  id: string
  type: 'deposit' | 'withdrawal' | 'yield' | 'rule_execution'
  amount: number
  asset: string
  timestamp: string
  status: 'pending' | 'completed' | 'failed'
}

// Frame Action Types
export interface FrameAction {
  type: 'connect_wallet' | 'create_goal' | 'join_circle' | 'set_rule'
  payload?: any
}

// Component Prop Types
export interface ComponentVariants {
  variant?: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}
