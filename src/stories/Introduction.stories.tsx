import type { Meta, StoryObj } from '@storybook/react';

const Introduction = () => (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>React Component Library</h1>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '2rem' }}>
        Welcome to the React Component Library. This is a collection of reusable UI components
        built with React, TypeScript, and Tailwind CSS.
      </p>
      
      <h1 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Development Guide</h1>
      <p style={{ marginBottom: '1rem' }}>To work with components in this library:</p>
      <ol style={{ marginBottom: '2rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>Browse components in the sidebar</li>
        <li style={{ marginBottom: '0.5rem' }}>View different variants and states in the Canvas tab</li>
        <li>Use the Controls panel to interact with component props</li>
      </ol>
      
      <h2 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Available Components</h2>
      <ul style={{ marginBottom: '2rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>InputField</strong> - A versatile input component with multiple variants and states</li>
        <li><strong>DataTable</strong> - A feature-rich table component with sorting and selection</li>
      </ul>
      
      <h2 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Requirements</h2>
      <ul style={{ marginBottom: '2rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>React 18 or later</li>
        <li style={{ marginBottom: '0.5rem' }}>TypeScript 4.9 or later</li>
        <li>Tailwind CSS 3.0 or later</li>
      </ul>
    </div>
  );

const meta = {
  title: 'Introduction',
  component: Introduction,
  parameters: {
    viewMode: 'docs',
    previewTabs: { 
      canvas: { hidden: true } 
    },
  },
} satisfies Meta<typeof Introduction>;

type Story = StoryObj<typeof Introduction>;

export const Default: Story = {};

export default meta;
