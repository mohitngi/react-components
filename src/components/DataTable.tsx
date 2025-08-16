"use client"

import * as React from "react"
import { ChevronUp, ChevronDown, ChevronsUpDown, Loader2 } from "lucide-react"
import { cn } from "../lib/utils"
import { Checkbox } from "@/components/ui/Checkbox"
import type { DataTableProps, SortDirection } from "@/types/components"

const IndeterminateCheckbox = React.forwardRef<
  HTMLButtonElement,
  {
    checked: boolean
    indeterminate?: boolean
    onCheckedChange: (checked: boolean) => void
    "aria-label"?: string
  }
>(({ checked, indeterminate = false, onCheckedChange, ...props }, ref) => {
  const checkboxRef = React.useRef<HTMLButtonElement>(null)

  React.useEffect(() => {
    if (checkboxRef.current) {
      const input = checkboxRef.current.querySelector("input")
      if (input) {
        input.indeterminate = indeterminate
      }
    }
  }, [indeterminate])

  return (
    <Checkbox
      ref={checkboxRef}
      checked={indeterminate ? false : checked}
      onCheckedChange={onCheckedChange}
      {...props}
    />
  )
})
IndeterminateCheckbox.displayName = "IndeterminateCheckbox"

function DataTable<T extends Record<string, any>>({
  data,
  columns,
  loading = false,
  selectable = false,
  onRowSelect,
  className,
  statusTabs,
  status,
  onStatusChange,
}: DataTableProps<T>) {
  const [sortColumn, setSortColumn] = React.useState<keyof T | null>(null)
  const [sortDirection, setSortDirection] = React.useState<SortDirection>(null)
  const [selectedRows, setSelectedRows] = React.useState<Set<number>>(new Set())

  // Status tab state
  const [activeStatus, setActiveStatus] = React.useState(status || (statusTabs?.[0]?.value ?? ""))

  const handleStatusChange = (newStatus: string) => {
    setActiveStatus(newStatus)
    onStatusChange?.(newStatus)
  }
  const sortedData = React.useMemo(() => {
    if (!sortColumn || !sortDirection) return data

    return [...data].sort((a, b) => {
      const aValue = a[sortColumn]
      const bValue = b[sortColumn]

      // Handle null/undefined values
      if (aValue == null && bValue == null) return 0
      if (aValue == null) return sortDirection === "asc" ? -1 : 1
      if (bValue == null) return sortDirection === "asc" ? 1 : -1

      // Handle different data types
      if (typeof aValue === "string" && typeof bValue === "string") {
        const comparison = aValue.localeCompare(bValue)
        return sortDirection === "asc" ? comparison : -comparison
      }

      if (typeof aValue === "number" && typeof bValue === "number") {
        return sortDirection === "asc" ? aValue - bValue : bValue - aValue
      }

      // Fallback to string comparison
      const aStr = String(aValue)
      const bStr = String(bValue)
      const comparison = aStr.localeCompare(bStr)
      return sortDirection === "asc" ? comparison : -comparison
    })
  }, [data, sortColumn, sortDirection])

  // Handle column header click for sorting
  const handleSort = (columnKey: keyof T, sortable = true) => {
    if (!sortable) return

    if (sortColumn === columnKey) {
      // Cycle through: asc -> desc -> null
      if (sortDirection === "asc") {
        setSortDirection("desc")
      } else if (sortDirection === "desc") {
        setSortDirection(null)
        setSortColumn(null)
      }
    } else {
      setSortColumn(columnKey)
      setSortDirection("asc")
    }
  }

  // Handle row selection
  const handleRowSelect = (index: number, checked: boolean) => {
    const newSelectedRows = new Set(selectedRows)
    if (checked) {
      newSelectedRows.add(index)
    } else {
      newSelectedRows.delete(index)
    }
    setSelectedRows(newSelectedRows)

    // Call callback with selected row data
    const selectedData = Array.from(newSelectedRows).map((i) => sortedData[i])
    onRowSelect?.(selectedData)
  }

  // Handle select all
  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      const allIndices = new Set(sortedData.map((_, index) => index))
      setSelectedRows(allIndices)
      onRowSelect?.(sortedData)
    } else {
      setSelectedRows(new Set())
      onRowSelect?.([])
    }
  }

  // Check if all rows are selected
  const isAllSelected = selectedRows.size > 0 && selectedRows.size === sortedData.length
  const isIndeterminate = selectedRows.size > 0 && selectedRows.size < sortedData.length

  // Get sort icon for column
  const getSortIcon = (columnKey: keyof T, sortable = true) => {
    if (!sortable) return null

    if (sortColumn === columnKey) {
      return sortDirection === "asc" ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />
    }
    return <ChevronsUpDown className="h-4 w-4 opacity-50" />
  }

  // Loading state
  if (loading) {
    return (
      <div className={cn("w-full", className)}>
        {statusTabs && statusTabs.length > 0 && (
          <div className="flex gap-2 mb-4">
            {statusTabs.map((tab) => (
              <button
                key={tab.value}
                className={cn(
                  "px-4 py-2 rounded border",
                  activeStatus === tab.value ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                )}
                onClick={() => handleStatusChange(tab.value)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}
        <div className="rounded-md border">
          <div className="flex items-center justify-center p-8">
            <Loader2 className="h-6 w-6 animate-spin mr-2" />
            <span className="text-muted-foreground">Loading...</span>
          </div>
        </div>
      </div>
    )
  }

  // Empty state
  if (!data || data.length === 0) {
    return (
      <div className={cn("w-full", className)}>
        {statusTabs && statusTabs.length > 0 && (
          <div className="flex gap-2 mb-4">
            {statusTabs.map((tab) => (
              <button
                key={tab.value}
                className={cn(
                  "px-4 py-2 rounded border",
                  activeStatus === tab.value ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                )}
                onClick={() => handleStatusChange(tab.value)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}
        <div className="rounded-md border">
          <div className="flex flex-col items-center justify-center p-8 text-center">
            <div className="text-muted-foreground mb-2">No data available</div>
            <div className="text-sm text-muted-foreground">There are no items to display in this table.</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={cn("w-full", className)}>
      {statusTabs && statusTabs.length > 0 && (
        <div className="flex gap-2 mb-4">
          {statusTabs.map((tab) => (
            <button
              key={tab.value}
              className={cn(
                "px-4 py-2 rounded border",
                activeStatus === tab.value ? "bg-primary text-white" : "bg-muted text-muted-foreground"
              )}
              onClick={() => handleStatusChange(tab.value)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}
      <div className="rounded-md border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-muted/50">
                {selectable && (
                  <th className="w-12 p-4">
                    <IndeterminateCheckbox
                      checked={isAllSelected}
                      indeterminate={isIndeterminate}
                      onCheckedChange={handleSelectAll}
                      aria-label="Select all rows"
                    />
                  </th>
                )}
                {columns.map((column) => (
                  <th
                    key={String(column.key)}
                    className={cn(
                      "text-left p-4 font-medium text-muted-foreground",
                      column.sortable && "cursor-pointer hover:text-foreground transition-colors",
                    )}
                    onClick={() => handleSort(column.key, column.sortable)}
                    role={column.sortable ? "button" : undefined}
                    tabIndex={column.sortable ? 0 : undefined}
                    onKeyDown={(e) => {
                      if (column.sortable && (e.key === "Enter" || e.key === " ")) {
                        e.preventDefault()
                        handleSort(column.key, column.sortable)
                      }
                    }}
                    aria-sort={
                      sortColumn === column.key
                        ? sortDirection === "asc"
                          ? "ascending"
                          : "descending"
                        : column.sortable
                          ? "none"
                          : undefined
                    }
                  >
                    <div className="flex items-center gap-2">
                      <span>{column.header}</span>
                      {getSortIcon(column.key, column.sortable)}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sortedData.map((row, index) => (
                <tr
                  key={index}
                  className={cn(
                    "border-b transition-colors hover:bg-muted/50",
                    selectedRows.has(index) && "bg-muted/30",
                  )}
                >
                  {selectable && (
                    <td className="p-4">
                      <Checkbox
                        checked={selectedRows.has(index)}
                        onCheckedChange={(checked) => handleRowSelect(index, checked as boolean)}
                        aria-label={`Select row ${index + 1}`}
                      />
                    </td>
                  )}
                  {columns.map((column) => (
                    <td key={String(column.key)} className="p-4">
                      {column.render ? column.render(row[column.key], row) : String(row[column.key] ?? "")}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Selection summary */}
      {selectable && selectedRows.size > 0 && (
        <div className="mt-2 text-sm text-muted-foreground">
          {selectedRows.size} of {sortedData.length} row(s) selected
        </div>
      )}
    </div>
  )
}

export { DataTable }
