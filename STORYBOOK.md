# Storybook Documentation Guide

This document provides comprehensive information about our Storybook setup and component documentation.

## 📚 Documentation Checklist

Our Storybook implementation includes all required documentation elements:

### ✅ Component Name & Description
- Clear component titles and purposes
- Feature overviews and capabilities
- Use case descriptions

### ✅ Props & API Definitions
- Complete TypeScript interfaces
- Prop descriptions with types
- Default values and options
- Interactive controls for testing

### ✅ Use Cases & Examples
- Real-world implementation scenarios
- Multiple story variations
- Interactive demonstrations

### ✅ Anatomy/Structure Breakdown
- Component composition details
- Internal structure explanations
- Relationship between parts

### ✅ States & Variants
- All possible component states
- Visual variant demonstrations
- State transition examples

### ✅ Interaction Behavior
- User interaction patterns
- Event handling examples
- Callback demonstrations

### ✅ Accessibility Notes
- ARIA roles and attributes
- Keyboard navigation support
- Screen reader compatibility
- Focus management

### ✅ Responsive Design
- Responsive behavior examples
- Design token usage

### ✅ Best Practices
- Implementation guidelines
- Do's and don'ts
- Performance considerations
- Common pitfalls to avoid

## 🚀 Running Storybook

### Development
```bash
# Using pnpm (recommended)
pnpm storybook

# Or using npm
npm run storybook
```
Starts Storybook development server on http://localhost:6006

### Build
```bash
# Using pnpm (recommended)
pnpm build-storybook

# Or using npm
npm run build-storybook
```
Builds static Storybook for deployment

### Serve Built Version
```bash
# Using pnpm (recommended)
pnpm storybook:serve

# Or using npm
npm run storybook:serve
```
Serves the built Storybook locally

## 📖 Story Structure

### InputField Stories
- **Default**: Basic usage example
- **Variants**: Filled, outlined, ghost styles
- **Sizes**: Small, medium, large demonstrations
- **States**: Normal, invalid, disabled states
- **WithClearButton**: Clear functionality demo
- **PasswordInput**: Password toggle feature
- **AllFeatures**: Comprehensive feature showcase
- **FormExample**: Real-world form integration

### DataTable Stories
- **Default**: Basic table usage
- **WithSelection**: Row selection functionality
- **Loading**: Loading state demonstration
- **Empty**: Empty state handling
- **CustomRendering**: Custom cell rendering
- **ProductTable**: Alternative data example
- **InteractiveExample**: Full feature demonstration

## 🎨 Design System Integration

### Theme Support
- Automatic light/dark mode switching
- Design token integration
- Consistent styling across components

### Accessibility Features
- ARIA compliance testing
- Keyboard navigation verification
- Screen reader compatibility

### Interactive Controls
- Real-time prop manipulation
- State testing capabilities
- Visual feedback for changes

## 📋 Deployment Options

### Chromatic (Recommended)
1. Install Chromatic: `npm install --save-dev chromatic`
2. Build and deploy: `npx chromatic --project-token=<your-token>`

### Vercel
1. Build Storybook: `npm run build-storybook`
2. Deploy the `storybook-static` folder to Vercel

### GitHub Pages
1. Build Storybook: `npm run build-storybook`
2. Deploy `storybook-static` to GitHub Pages

## 🔧 Configuration Details

### Main Configuration (.storybook/main.ts)
- Story file patterns
- Addon configurations
- TypeScript settings
- Documentation generation

### Preview Configuration (.storybook/preview.ts)
- Global decorators
- Theme switching
- Background options
- Control matchers

## 📝 Writing New Stories

When adding new components, follow this structure:

```tsx
import type { Meta, StoryObj } from "@storybook/react"
import { YourComponent } from "./your-component"

const meta: Meta<typeof YourComponent> = {
  title: "Components/YourComponent",
  component: YourComponent,
  parameters: {
    docs: {
      description: {
        component: "Detailed component description..."
      }
    }
  },
  argTypes: {
    // Define controls and descriptions
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof YourComponent>

export const Default: Story = {
  args: {
    // Default props
  }
}
```

This ensures consistent documentation across all components.
