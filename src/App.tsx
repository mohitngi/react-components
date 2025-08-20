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
  // State for variant examples
  const [outlinedValue, setOutlinedValue] = useState("")
  const [filledValue, setFilledValue] = useState("")
  const [ghostValue, setGhostValue] = useState("")
  
  // State for size examples
  const [smallValue, setSmallValue] = useState("")
  const [mediumValue, setMediumValue] = useState("")
  const [largeValue, setLargeValue] = useState("")
  
  // State for optional features
  const [clearButtonValue, setClearButtonValue] = useState("")
  const [passwordValue, setPasswordValue] = useState("")
  const [helperTextValue, setHelperTextValue] = useState("")

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
          
          {/* Variants */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Variants</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block font-medium mb-2">Outlined (Default)</label>
                <InputField
                  placeholder="Outlined variant..."
                  variant="outlined"
                  value={outlinedValue}
                  onChange={(e) => setOutlinedValue(e.target.value)}
                />
              </div>
              <div>
                <label className="block font-medium mb-2">Filled</label>
                <InputField
                  placeholder="Filled variant..."
                  variant="filled"
                  value={filledValue}
                  onChange={(e) => setFilledValue(e.target.value)}
                />
              </div>
              <div>
                <label className="block font-medium mb-2">Ghost</label>
                <InputField
                  placeholder="Ghost variant..."
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
                <label className="block font-medium mb-2">Small (sm)</label>
                <InputField
                  placeholder="Small input..."
                  size="sm"
                  value={smallValue}
                  onChange={(e) => setSmallValue(e.target.value)}
                />
              </div>
              <div>
                <label className="block font-medium mb-2">Medium (md)</label>
                <InputField
                  placeholder="Medium input..."
                  size="md"
                  value={mediumValue}
                  onChange={(e) => setMediumValue(e.target.value)}
                />
              </div>
              <div>
                <label className="block font-medium mb-2">Large (lg)</label>
                <InputField
                  placeholder="Large input..."
                  size="lg"
                  value={largeValue}
                  onChange={(e) => setLargeValue(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Optional Features */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Optional Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block font-medium mb-2">With Clear Button</label>
                <InputField
                  placeholder="Type to show clear button..."
                  value={clearButtonValue}
                  onChange={(e) => setClearButtonValue(e.target.value)}
                  showClearButton
                />
              </div>
              <div>
                <label className="block font-medium mb-2">Password Toggle</label>
                <InputField
                  type="password"
                  placeholder="Enter password..."
                  value={passwordValue}
                  onChange={(e) => setPasswordValue(e.target.value)}
                  showPasswordToggle
                />
              </div>
              <div>
                <label className="block font-medium mb-2">With Helper Text</label>
                <InputField
                  placeholder="With helper text..."
                  value={helperTextValue}
                  onChange={(e) => setHelperTextValue(e.target.value)}
                  helperText="This is a helpful message"
                />
              </div>
            </div>
          </div>

          {/* States */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">States</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block font-medium mb-2">Disabled</label>
                <InputField
                  placeholder="Cannot edit"
                  disabled
                  value="Disabled input"
                />
              </div>
              <div>
                <label className="block font-medium mb-2">Error State</label>
                <InputField
                  placeholder="Invalid input..."
                  invalid
                  errorMessage="This field is required"
                  value="Invalid value"
                />
              </div>
              <div>
                <label className="block font-medium mb-2">Loading State</label>
                <InputField
                  placeholder="Loading..."
                  loading
                  value="Loading state"
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
