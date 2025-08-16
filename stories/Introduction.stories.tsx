import type { Meta } from '@storybook/react';
import { Title, Subtitle, Description, Primary, Controls, Stories } from '@storybook/blocks';

export default {
  title: 'Introduction',
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>React Component Library</Subtitle>
          <Description>
            Welcome to our React Component Library! This collection showcases two powerful, accessible,
            and customizable components built with modern React patterns.
          </Description>
          
          <h2>Components</h2>
          
          <h3>InputField</h3>
          <p>A flexible input component that handles various states, variants, and user interactions.</p>
          
          <h3>DataTable</h3>
          <p>A comprehensive data table with sorting, selection, and state management.</p>
          
          <h2>Design System</h2>
          <p>Our components follow a consistent design system built on:</p>
          <ul>
            <li>Tailwind CSS v4</li>
            <li>shadcn/ui</li>
            <li>Design Tokens</li>
            <li>Dark Mode support</li>
          </ul>
          
          <h2>Getting Started</h2>
          <ol>
            <li>Explore Components: Browse the component stories in the sidebar</li>
            <li>Try Interactions: Use the controls panel to modify props</li>
            <li>View Code: Check the "Docs" tab for implementation details</li>
            <li>Copy Examples: Use the code snippets in your projects</li>
          </ol>
          
          <Primary />
          <Controls />
          <Stories />
        </>
      ),
    },
  },
} as Meta;

// This is a workaround to make the story show up in the sidebar
export const Default = () => null;
