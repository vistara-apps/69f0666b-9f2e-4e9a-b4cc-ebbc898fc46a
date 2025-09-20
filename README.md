# CryptoGoal - Base Mini App

Automate your crypto savings, visualize your progress, and earn yield effortlessly.

## Features

- **Smart Rule-Based Crypto Transfers**: Automate savings with custom rules
- **Yield Generation**: Earn passive income on saved crypto assets
- **Visual Progress Tracking**: Gamified savings experience with progress visualization
- **Social Savings Goals**: Save together with friends and community
- **Base Wallet Integration**: Seamless integration with Base ecosystem

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (Ethereum L2)
- **Wallet**: Base Wallet via MiniKit
- **UI**: Tailwind CSS with custom design system
- **Charts**: Recharts for data visualization
- **Icons**: Lucide React
- **TypeScript**: Full type safety

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd cryptogoal
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your OnchainKit API key to `.env.local`:
   ```
   NEXT_PUBLIC_ONCHAINKIT_API_KEY=your_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Main application page
│   ├── providers.tsx      # MiniKit and OnchainKit providers
│   └── globals.css        # Global styles and Tailwind
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── AppShell.tsx      # Main app container
│   ├── Dashboard.tsx     # Main dashboard view
│   ├── OnboardingFlow.tsx # User onboarding
│   └── ...               # Feature-specific components
├── lib/                  # Utilities and types
│   ├── types.ts          # TypeScript type definitions
│   ├── utils.ts          # Utility functions
│   └── constants.ts      # App constants
└── public/               # Static assets
```

## Key Components

### OnboardingFlow
Handles user wallet connection and initial setup with Base Wallet integration.

### Dashboard
Main application interface showing savings goals, yield data, and progress tracking.

### GoalCreation & SavingsRuleForm
Allow users to create savings goals and set up automated transfer rules.

### SocialCircles
Social savings features for community-based goal achievement.

### ProgressVisualizer
Charts and gamified progress tracking for user engagement.

## Base Mini App Integration

This app is built as a Base Mini App using:

- **MiniKitProvider**: Handles Base Wallet connection and chain configuration
- **OnchainKit**: Provides identity and wallet components
- **Base Network**: All transactions occur on Base (Chain ID: 8453)

## Design System

The app uses a custom design system with:

- **Dark Theme**: Primary background with surface cards
- **Color Palette**: Blue primary, green accent, with semantic colors
- **Typography**: Inter font with consistent sizing scale
- **Spacing**: 4px base unit with consistent spacing scale
- **Components**: Reusable UI components with variants

## Development

### Adding New Features

1. Create components in the `components/` directory
2. Add types to `lib/types.ts`
3. Update constants in `lib/constants.ts`
4. Follow the existing design system patterns

### Styling Guidelines

- Use Tailwind CSS classes
- Follow the design token system
- Ensure mobile-first responsive design
- Use semantic color names from the design system

### TypeScript

- All components use TypeScript with proper typing
- Interface definitions in `lib/types.ts`
- Strict type checking enabled

## Deployment

The app is designed to be deployed as a Base Mini App. Ensure:

1. Environment variables are properly configured
2. OnchainKit API key is set
3. Base network configuration is correct
4. All dependencies are installed

## Contributing

1. Follow the existing code style and patterns
2. Add proper TypeScript types for new features
3. Ensure mobile responsiveness
4. Test wallet integration thoroughly

## License

MIT License - see LICENSE file for details.
