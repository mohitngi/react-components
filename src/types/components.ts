import type React from "react"

// InputField component types
export interface InputFieldProps {
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  label?: string
  placeholder?: string
  helperText?: string
  errorMessage?: string
  disabled?: boolean
  invalid?: boolean
  loading?: boolean
  variant?: "filled" | "outlined" | "ghost"
  size?: "sm" | "md" | "lg"
  type?: "text" | "password" | "email" | "number"
  showClearButton?: boolean
  showPasswordToggle?: boolean
  className?: string
}

// DataTable component types
export interface Column<T> {
  key: keyof T
  header: string
  sortable?: boolean
  render?: (value: T[keyof T], row: T) => React.ReactNode
}

export interface DataTableProps<T> {
  data: T[]
  columns: Column<T>[]
  loading?: boolean
  selectable?: boolean
  onRowSelect?: (selectedRows: T[]) => void
  className?: string
  statusTabs?: Array<{ label: string; value: string }>
  status?: string
  onStatusChange?: (status: string) => void
}

export type SortDirection = "asc" | "desc" | null
