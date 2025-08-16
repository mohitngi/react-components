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
}

export type SortDirection = "asc" | "desc" | null
