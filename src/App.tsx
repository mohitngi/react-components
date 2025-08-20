"use client"

import { useState } from "react"
import { InputField } from "./components/InputField"
import { DataTable } from "./components/DataTable"

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


function App() {
  // State for input values
  const [outlinedValue, setOutlinedValue] = useState("")
  const [filledValue, setFilledValue] = useState("")
  const [ghostValue, setGhostValue] = useState("")
  const [clearButtonValue, setClearButtonValue] = useState("")
  const [passwordValue, setPasswordValue] = useState("")

  const tableColumns = [
    { key: "name" as const, header: "Name", sortable: true },
    { key: "email" as const, header: "Email", sortable: true },
    { key: "role" as const, header: "Role", sortable: true },
    { key: "status" as const, header: "Status" }
  ]

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
          
          {/* Default with all features */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Default</h3>
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
          </div>
          
          {/* States */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">States</h3>
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
          </div>
          
          {/* Variants */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Variants</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <InputField
                  label="Outlined (Default)"
                  placeholder="Type something..."
                  variant="outlined"
                  value={outlinedValue}
                  onChange={(e) => setOutlinedValue(e.target.value)}
                />
              </div>
              <div>
                <InputField
                  label="Filled"
                  placeholder="Type something..."
                  variant="filled"
                  value={filledValue}
                  onChange={(e) => setFilledValue(e.target.value)}
                />
              </div>
              <div>
                <InputField
                  label="Ghost"
                  placeholder="Type something..."
                  variant="ghost"
                  value={ghostValue}
                  onChange={(e) => setGhostValue(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Sizes */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Sizes</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <InputField
                  label="Small (sm)"
                  placeholder="Small input..."
                  size="sm"
                />
              </div>
              <div>
                <InputField
                  label="Medium (md)"
                  placeholder="Medium input..."
                  size="md"
                />
              </div>
              <div>
                <InputField
                  label="Large (lg)"
                  placeholder="Large input..."
                  size="lg"
                />
              </div>
              <div>
                <InputField
                  label="ExtraLarge (xl)"
                  placeholder="ExtraLarge input..."
                  size="xl"
                />
              </div>
            </div>
          </div>

          {/* Optional Features */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Optional Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <InputField
                  label="Clear Button"
                  placeholder="Type to see clear button..."
                  value={clearButtonValue}
                  onChange={(e) => setClearButtonValue(e.target.value)}
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
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-6">DataTable Component</h2>
          
          {/* Default State */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Default State</h3>
            <DataTable
              data={sampleData}
              columns={tableColumns}
            />
          </div>
          
          {/* With Selection */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">With Selection</h3>
            <DataTable
              data={sampleData}
              columns={tableColumns}
              selectable
              onRowSelect={(rows) => console.log('Selected rows:', rows)}
            />
          </div>
          
          {/* Loading State */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Loading State</h3>
            <DataTable
              data={sampleData}
              columns={tableColumns}
              loading={true}
            />
          </div>
          
          {/* Empty State */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Empty State</h3>
            <DataTable
              data={[]}
              columns={tableColumns}
            />
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
