"use client"

import { useState } from "react"
import { InputField } from "./components/InputField"
import { DataTable } from "./components/DataTable"
import type { Column } from "./types/components"

interface User {
  id: number
  name: string
  email: string
  role: string
  status: string
}

const sampleData: User[] = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", status: "Active" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Editor", status: "Active" },
]

const columns: Column<User>[] = [
  { key: "name", header: "Name", sortable: true },
  { key: "email", header: "Email", sortable: true },
  { key: "role", header: "Role", sortable: true },
]

function App() {
  const [inputValue, setInputValue] = useState("")
  const [emailValue, setEmailValue] = useState("")
  const [passwordValue, setPasswordValue] = useState("")
  const [selectedRows, setSelectedRows] = useState<User[]>([])

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">React Component Library</h1>
          <p className="text-gray-600">
            Professional InputField and DataTable components built with React + TypeScript
          </p>
        </header>

        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-6">InputField Component</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block font-semibold mb-2">Default Input</label>
              <InputField
                placeholder="Enter text..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>
            <div>
              <label className="block font-semibold mb-2">Email Input</label>
              <InputField
                type="email"
                placeholder="Enter email..."
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
              />
            </div>
            <div>
              <label className="block font-semibold mb-2">Password Input</label>
              <InputField
                type="password"
                placeholder="Enter password..."
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}
                showPasswordToggle
              />
            </div>
            <div>
              <label className="block font-semibold mb-2">Disabled Input</label>
              <InputField
                placeholder="Cannot edit"
                disabled
              />
            </div>
            <div>
              <label className="block font-semibold mb-2">Error State</label>
              <InputField
                placeholder="Invalid input..."
                invalid
                errorMessage="This field is required"
              />
            </div>
            <div>
              <label className="block font-semibold mb-2">Loading State</label>
              <InputField
                placeholder="Loading..."
                loading
              />
            </div>
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-6">DataTable Component</h2>
          <DataTable
            data={sampleData}
            columns={[{ key: "name", header: "Name", sortable: true }, { key: "email", header: "Email", sortable: true }, { key: "role", header: "Role", sortable: true }, { key: "status", header: "Status" }]}
            selectable
            onRowSelect={setSelectedRows}
          />
        </section>
      </div>
    </div>
  )
}

export default App
