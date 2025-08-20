import React from 'react';
import type { Preview } from "@storybook/react";
import '../styles/globals.css';

// Theme decorator
import type { Decorator } from '@storybook/react';

const withTheme: Decorator = (Story, context) => {
  const theme = context.globals.theme || 'light';
  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="bg-background text-foreground min-h-screen p-4">
        <Story />
      </div>
    </div>
  );
};

// Import your theme CSS here if you have one
// import "../path/to/your/theme.css"

// Custom viewports for responsive testing
const customViewports = {
  mobile: {
    name: 'Mobile',
    styles: {
      width: '375px',
      height: '667px',
    },
  },
  tablet: {
    name: 'Tablet',
    styles: {
      width: '768px',
      height: '1024px',
    },
  },
  desktop: {
    name: 'Desktop',
    styles: {
      width: '1440px',
      height: '900px',
    },
  },
}

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
      expanded: true,
      sort: 'requiredFirst',
    },
    viewport: {
      viewports: customViewports,
      defaultViewport: 'responsive',
    },
    layout: 'centered',
    docs: {
      toc: {
        contentsSelector: ".sbdocs-content",
        headingSelector: "h1, h2, h3",
        ignoreSelector: "#storybook-docs",
        title: "Table of Contents",
        disable: false,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#1a1a1a' },
      ],
    },
  },
  globalTypes: {
    theme: {
      description: "Global theme for components",
      defaultValue: "light",
      toolbar: {
        title: "Theme",
        icon: "paintbrush",
        items: [
          { value: "light", title: "Light", left: "" },
          { value: "dark", title: "Dark", left: "" },
        ],
        dynamicTitle: true,
      },
    },
  },
}

// Apply the theme decorator
preview.decorators = [withTheme];

export default preview
