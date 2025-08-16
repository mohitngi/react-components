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

export const Default: Story = {
  args: {
    label: "Default Input",
    placeholder: "Enter text...",
  },
}

export const WithValue: Story = {
  render: (args) => {
    const [value, setValue] = useState("Sample text")
    return <InputField {...args} value={value} onChange={(e) => setValue(e.target.value)} />
  },
  args: {
    label: "Input with Value",
    placeholder: "Enter text...",
  },
}

export const Password: Story = {
  args: {
    label: "Password",
    type: "password",
    placeholder: "Enter password...",
    showPasswordToggle: true,
  },
}

export const WithError: Story = {
  args: {
    label: "Input with Error",
    placeholder: "This field has an error",
    invalid: true,
    errorMessage: "This field is required",
  },
}

export const WithHelperText: Story = {
  args: {
    label: "Input with Helper Text",
    placeholder: "Enter your email",
    helperText: "We'll never share your email with anyone else.",
  },
}

export const Disabled: Story = {
  args: {
    label: "Disabled Input",
    placeholder: "This input is disabled",
    disabled: true,
    value: "Disabled value",
  },
}

export const WithClearButton: Story = {
  render: (args) => {
    const [value, setValue] = useState("Text with clear button")
    return <InputField {...args} value={value} onChange={(e) => setValue(e.target.value)} />
  },
  args: {
    label: "Input with Clear Button",
    placeholder: "Enter text...",
    showClearButton: true,
  },
}

export const Variants: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <InputField variant="outlined" label="Outlined" placeholder="Outlined variant" />
      <InputField variant="filled" label="Filled" placeholder="Filled variant" />
      <InputField variant="ghost" label="Ghost" placeholder="Ghost variant" />
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <InputField size="sm" label="Small" placeholder="Small size" />
      <InputField size="md" label="Medium" placeholder="Medium size" />
      <InputField size="lg" label="Large" placeholder="Large size" />
    </div>
  ),
}
