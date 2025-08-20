"use client"

import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { InputField } from "./InputField"

const meta: Meta<typeof InputField> = {
  title: "Components/InputField",
  component: InputField,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A versatile input field component with multiple variants, sizes, and states.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["filled", "outlined", "ghost"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    type: {
      control: "select",
      options: ["text", "password", "email", "number"],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Default
export const Default: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div>
        <InputField
          label="With Label"
          placeholder="Type here..."
        />
      </div>
      <div>
        <InputField
          label="With Placeholder"
          placeholder="Enter your text here..."
        />
      </div>
      <div>
        <InputField
          label="With Helper Text"
          placeholder="Enter value"
          helperText="This is helper text"
        />
      </div>
      <div>
        <InputField
          label="With Error"
          placeholder="Invalid input"
          errorMessage="This field is required"
          invalid
        />
      </div>
    </div>
  )
}

// States
export const States: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div>
        <InputField
          label="Disabled"
          placeholder="This input is disabled"
          disabled
          value="Disabled value"
        />
      </div>
      <div>
        <InputField
          label="Invalid Input"
          placeholder="Enter a valid username"
          invalid
          errorMessage="Username must be at least 4 characters"
          value="abc"
        />
      </div>
      <div>
        <InputField
          label="Loading State"
          placeholder="Loading..."
          loading
        />
      </div>
    </div>
  )
}

// Variants
export const Variants: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div>
        <InputField
          variant="outlined"
          label="Outlined (Default)"
          placeholder="Outlined input"
        />
      </div>
      <div>
        <InputField
          variant="filled"
          label="Filled"
          placeholder="Filled input"
        />
      </div>
      <div>
        <InputField
          variant="ghost"
          label="Ghost"
          placeholder="Ghost input"
        />
      </div>
    </div>
  )
}

// Sizes
export const Sizes: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div>
        <InputField
          size="sm"
          label="Small (sm)"
          placeholder="Small input..."
        />
      </div>
      <div>
        <InputField
          size="md"
          label="Medium (md)"
          placeholder="Medium input..."
        />
      </div>
      <div>
        <InputField
          size="lg"
          label="Large (lg)"
          placeholder="Large input..."
        />
      </div>
    </div>
  )
}

// Optional Features
export const OptionalFeatures: Story = {
  render: () => {
    const [clearValue, setClearValue] = useState("")
    const [passwordValue, setPasswordValue] = useState("")
    
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <InputField
            label="Clear Button"
            placeholder="Type to see clear button..."
            value={clearValue}
            onChange={(e) => setClearValue(e.target.value)}
            showClearButton
          />
        </div>
        <div>
          <InputField
            label="Password Toggle"
            type="password"
            placeholder="Enter your password..."
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
            showPasswordToggle
          />
        </div>
      </div>
    )
  }
}
