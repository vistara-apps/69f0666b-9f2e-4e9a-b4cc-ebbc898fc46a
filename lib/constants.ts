// App Configuration
export const APP_CONFIG = {
  name: 'CryptoGoal',
  description: 'Automate your crypto savings, visualize your progress, and earn yield effortlessly.',
  version: '1.0.0',
  supportEmail: 'support@cryptogoal.app',
} as const

// Supported Assets
export const SUPPORTED_ASSETS = [
  { symbol: 'ETH', name: 'Ethereum', decimals: 18 },
  { symbol: 'USDC', name: 'USD Coin', decimals: 6 },
  { symbol: 'WETH', name: 'Wrapped Ethereum', decimals: 18 },
  { symbol: 'DAI', name: 'Dai Stablecoin', decimals: 18 },
] as const

// DeFi Protocols
export const DEFI_PROTOCOLS = [
  { name: 'Aave V3', apy: 4.2, risk: 'low' },
  { name: 'Compound', apy: 3.8, risk: 'low' },
  { name: 'Yearn Finance', apy: 5.1, risk: 'medium' },
] as const

// Savings Rule Types
export const RULE_TYPES = [
  {
    id: 'percentage',
    name: 'Percentage Based',
    description: 'Save a percentage of incoming transactions',
  },
  {
    id: 'fixed',
    name: 'Fixed Amount',
    description: 'Save a fixed amount regularly',
  },
  {
    id: 'schedule',
    name: 'Scheduled Transfer',
    description: 'Transfer on specific days/times',
  },
] as const

// Frequency Options
export const FREQUENCY_OPTIONS = [
  { value: 'daily', label: 'Daily' },
  { value: 'weekly', label: 'Weekly' },
  { value: 'monthly', label: 'Monthly' },
] as const

// Days of Week
export const DAYS_OF_WEEK = [
  { value: 'monday', label: 'Monday' },
  { value: 'tuesday', label: 'Tuesday' },
  { value: 'wednesday', label: 'Wednesday' },
  { value: 'thursday', label: 'Thursday' },
  { value: 'friday', label: 'Friday' },
  { value: 'saturday', label: 'Saturday' },
  { value: 'sunday', label: 'Sunday' },
] as const

// Goal Categories
export const GOAL_CATEGORIES = [
  { id: 'emergency', name: 'Emergency Fund', icon: '🛡️' },
  { id: 'vacation', name: 'Vacation', icon: '✈️' },
  { id: 'house', name: 'House Down Payment', icon: '🏠' },
  { id: 'car', name: 'New Car', icon: '🚗' },
  { id: 'education', name: 'Education', icon: '🎓' },
  { id: 'retirement', name: 'Retirement', icon: '🏖️' },
  { id: 'investment', name: 'Investment', icon: '📈' },
  { id: 'other', name: 'Other', icon: '🎯' },
] as const

// Animation Durations
export const ANIMATION_DURATION = {
  fast: 150,
  base: 200,
  slow: 300,
} as const

// API Endpoints
export const API_ENDPOINTS = {
  goals: '/api/goals',
  rules: '/api/rules',
  circles: '/api/circles',
  yield: '/api/yield',
  transactions: '/api/transactions',
} as const

// Local Storage Keys
export const STORAGE_KEYS = {
  user: 'cryptogoal_user',
  preferences: 'cryptogoal_preferences',
  onboarding: 'cryptogoal_onboarding_complete',
} as const

// Error Messages
export const ERROR_MESSAGES = {
  wallet_connection: 'Failed to connect wallet. Please try again.',
  transaction_failed: 'Transaction failed. Please check your wallet and try again.',
  insufficient_balance: 'Insufficient balance to complete this transaction.',
  network_error: 'Network error. Please check your connection and try again.',
  invalid_amount: 'Please enter a valid amount.',
  goal_creation_failed: 'Failed to create goal. Please try again.',
  rule_creation_failed: 'Failed to create savings rule. Please try again.',
} as const

// Success Messages
export const SUCCESS_MESSAGES = {
  wallet_connected: 'Wallet connected successfully!',
  goal_created: 'Savings goal created successfully!',
  rule_created: 'Savings rule activated successfully!',
  circle_joined: 'Successfully joined savings circle!',
  transaction_completed: 'Transaction completed successfully!',
} as const

// Feature Flags
export const FEATURE_FLAGS = {
  social_circles: true,
  yield_farming: true,
  ai_coach: false, // Pro feature
  advanced_rules: false, // Pro feature
} as const
