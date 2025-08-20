# React Component Library

A modern, accessible React component library built with TypeScript, Tailwind CSS, and Storybook. This project demonstrates professional-grade component development with comprehensive documentation and testing.

## 🚀 Live Demo

- **Component Showcase**: [View Live Demo](https://react-components-bay.vercel.app/)
- **Storybook Documentation**: [View Storybook](https://68a0bc5a0b16868f01350b80-sncvnxymlk.chromatic.com/?path=/docs/components-datatable--docs)

## 📦 Components

### InputField
A flexible and accessible input component with multiple variants, states, and interactive features.

**Features:**
- **Variants**: Filled, outlined, ghost styles
- **Sizes**: Small (sm), medium (md), large (lg)
- **States**: Normal, invalid, disabled, loading
- **Interactive Features**: Clear button, password toggle
- **Validation**: Error messages and helper text
- **Accessibility**: Full ARIA support, keyboard navigation
- **TypeScript**: Complete type safety with IntelliSense

**Usage:**
```tsx
// Basic usage with common props
<InputField
  label="Email Address"
  placeholder="Enter your email"
  helperText="We'll never share your email"
  showClearButton
/>
```

### DataTable
A comprehensive data table component with sorting, selection, and state management.

**Features:**
- **Generic TypeScript**: Works with any data structure
- **Column Sorting**: Ascending, descending, neutral states
- **Row Selection**: Single or multiple selection with callbacks
- **States**: Loading, empty, error handling
- **Custom Rendering**: Flexible cell content with render functions
- **Accessibility**: ARIA compliant with keyboard navigation
- **Responsive**: Mobile-friendly design

**Usage:**
```tsx
// Example with data and column configuration
<DataTable
  data={users}
  columns={[
    { 
      key: 'name', 
      header: 'Name', 
      sortable: true 
    },
    { 
      key: 'email', 
      header: 'Email', 
      sortable: true 
    }
  ]}
  selectable
  onRowSelect={(rows) => handleSelection(rows)}
/>
```

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- Package Manager: pnpm (recommended) or npm

### Setup
```bash
# 1. Clone the repository
git clone <repository-url>
cd react-component-library

# 2. Install dependencies
pnpm install   
# OR
npm install     

# 3. Start development server 
pnpm dev       
# OR
npm run dev    
```

### Available Scripts

| Script | pnpm | npm |
|--------|------|-----|
| Start dev server | `pnpm dev` | `npm run dev` |
| Build production | `pnpm build` | `npm run build` |
| Preview production | `pnpm preview` | `npm run preview` |
| Run ESLint | `pnpm lint` | `npm run lint` |
| Start Storybook | `pnpm storybook` | `npm run storybook` |
| Build Storybook | `pnpm build-storybook` | `npm run build-storybook` |
| Serve Storybook | `pnpm storybook:serve` | `npm run storybook:serve` |

### Storybook Development
```bash
# Start Storybook in development mode
pnpm storybook       
# OR
npm run storybook    

# Build Storybook for production
pnpm build-storybook
# OR
npm run build-storybook

# Preview production build locally
pnpm storybook:serve
# OR
npm run storybook:serve
```

## 📚 Documentation

### Storybook Features
Our Storybook implementation includes comprehensive documentation:

- ✅ **Component Overview**: Clear descriptions and feature lists
- ✅ **API Reference**: Complete TypeScript interfaces and prop definitions
- ✅ **Interactive Examples**: Live component demonstrations with controls
- ✅ **Use Cases**: Real-world implementation scenarios
- ✅ **Accessibility**: ARIA compliance and keyboard navigation notes
- ✅ **Best Practices**: Implementation guidelines and common patterns
- ✅ **Theming**: Light/dark mode support and design tokens

### Component Documentation Structure
Each component includes:
- Interactive playground with live controls
- Multiple story variations (variants, states, examples)
- Complete TypeScript API documentation
- Accessibility guidelines and ARIA implementation
- Best practices and usage recommendations
- Real-world form integration examples

## 🎨 Design System

### Design Principles
- **Accessibility First**: WCAG 2.1 AA compliant
- **TypeScript Native**: Full type safety and IntelliSense
- **Design Tokens**: Consistent spacing, colors, and typography
- **Mobile Responsive**: Works seamlessly across all devices
- **Theme Support**: Light and dark mode compatibility

### Tech Stack
- **React 18**: Latest React features and concurrent rendering
- **TypeScript 5**: Full type safety and modern language features
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first styling with design tokens
- **Storybook 7**: Component documentation and visual testing
- **Radix UI**: Accessible component primitives
- **Lucide React**: Beautiful, customizable icons

### Color System
Our components use a carefully crafted color system:
- **Primary**: Brand colors for main actions
- **Secondary**: Supporting colors for secondary actions
- **Muted**: Subtle colors for backgrounds and borders
- **Destructive**: Error states and dangerous actions
- **Semantic Colors**: Success, warning, and info states

## 🧪 Testing & Quality

### Accessibility Testing
- ARIA compliance verification
- Keyboard navigation testing
- Screen reader compatibility
- Color contrast validation

### Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Build the project
pnpm build  
# or 
npm run build

# Deploy to Vercel
npx vercel --prod
```

### Netlify
```bash
# Build the project
pnpm build  
# or 
npm run build

# Deploy dist folder to Netlify
netlify deploy --prod --dir=dist
```

## 📖Storybook Deployment 

#### Chromatic (Recommended)
```bash
# Install Chromatic
npm install --save-dev chromatic

# Deploy to Chromatic
npx chromatic --project-token=<your-token>
```

#### Vercel
```bash
# Build Storybook
npm run build-storybook

# Deploy storybook-static folder to Vercel
```

## 📁 Project Structure

```
├── src/                      # Source code
│   ├── components/          # React components
│   │   ├── InputField.tsx   # InputField component
│   │   ├── DataTable.tsx    # DataTable component
│   │   ├── *.stories.tsx    # Storybook stories
│   │   └── ui/             # Base UI components
│   ├── types/              # TypeScript type definitions
│   │   └── components.ts   # Component interfaces
│   ├── lib/                # Utility functions
│   │   └── utils.ts        # Tailwind utilities
│   ├── App.tsx             # Main application component
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles
├── .storybook/             # Storybook configuration
│   ├── main.ts            # Main configuration
│   └── preview.ts         # Preview configuration
├── stories/                # Additional stories
├── index.html             # HTML entry point
├── vite.config.ts         # Vite configuration
├── tailwind.config.js     # Tailwind configuration
└── tsconfig.json          # TypeScript configuration
```


### Component Development Guidelines
- Follow TypeScript best practices
- Include comprehensive Storybook stories
- Ensure accessibility compliance
- Add proper ARIA attributes
- Test keyboard navigation
- Support both light and dark themes
- Write clear documentation
