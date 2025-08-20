import type { Meta, StoryObj } from "@storybook/react"
import { DataTable } from "./DataTable"
import type { Column } from "@/types/components"

interface User {
  id: number
  name: string
  email: string
  role: string
  status: "active" | "inactive"
}

const sampleData: User[] = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "active" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", status: "active" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Editor", status: "inactive" },
  { id: 4, name: "Alice Brown", email: "alice@example.com", role: "User", status: "active" },
  { id: 5, name: "Charlie Wilson", email: "charlie@example.com", role: "Admin", status: "inactive" },
]

const columns: Column<User>[] = [
  { key: "name", header: "Name", sortable: true },
  { key: "email", header: "Email", sortable: true },
  { key: "role", header: "Role", sortable: true },
  { key: "status", header: "Status", sortable: true }
]

const meta: Meta<typeof DataTable> = {
  title: "Components/DataTable",
  component: DataTable,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "A powerful data table component with sorting and selection capabilities.",
      },
    },
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    data: sampleData,
    columns,
  },
}

export const WithSelection: Story = {
  args: {
    data: sampleData,
    columns,
    selectable: true,
    onRowSelect: (selectedRows: User[]) => {
      console.log("Selected rows:", selectedRows)
    },
  },
}

export const Loading: Story = {
  args: {
    data: sampleData,
    columns,
    loading: true,
  },
}

export const Empty: Story = {
  args: {
    data: [],
    columns,
  },
}
