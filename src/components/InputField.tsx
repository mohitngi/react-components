"use client"

import * as React from "react"
import { Eye, EyeOff, X } from "lucide-react"
import { cn } from "../lib/utils"
import type { InputFieldProps } from "@/types/components"

const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      value,
      onChange,
      label,
      placeholder,
      helperText,
      errorMessage,
      disabled = false,
      invalid = false,
  loading = false,
      variant = "outlined",
      size = "md",
      type = "text",
      showClearButton = false,
      showPasswordToggle = false,
      className,
      ...props
    },
    ref,
  ) => {
    const [showPassword, setShowPassword] = React.useState(false)
    const [internalValue, setInternalValue] = React.useState(value || "")
    const [isFocused, setIsFocused] = React.useState(false)

    // Update internal value when prop changes
    React.useEffect(() => {
      setInternalValue(value || "")
    }, [value])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value
      setInternalValue(newValue)
      onChange?.(e)
    }

    const handleClear = () => {
      const syntheticEvent = {
        target: { value: "" },
        currentTarget: { value: "" },
      } as React.ChangeEvent<HTMLInputElement>
      setInternalValue("")
      onChange?.(syntheticEvent)
    }

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword)
    }

    const inputType = type === "password" && showPassword ? "text" : type

    // Size variants
    const sizeClasses = {
      sm: "h-8 px-2 text-sm",
      md: "h-10 px-3 text-sm",
      lg: "h-12 px-4 text-base",
    }

    // Variant styles
    const variantClasses = {
      filled: cn(
        "bg-muted border-transparent",
        "focus:bg-background focus:border-ring",
        invalid && "bg-destructive/10 border-destructive focus:border-destructive",
        disabled && "bg-muted/50",
      ),
      outlined: cn(
        "bg-background border-input",
        "focus:border-ring",
        invalid && "border-destructive focus:border-destructive",
        disabled && "bg-muted/20",
      ),
      ghost: cn(
        "bg-transparent border-transparent",
        "focus:bg-muted focus:border-ring",
        invalid && "focus:bg-destructive/5 focus:border-destructive",
        disabled && "bg-transparent",
      ),
    }

    const labelSizeClasses = {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base",
    }

    const helperTextSizeClasses = {
      sm: "text-xs",
      md: "text-xs",
      lg: "text-sm",
    }

    const hasError = invalid || !!errorMessage
    const inputId = React.useId()
    const helperTextId = React.useId()
    const errorId = React.useId()

    return (
      <div className={cn("space-y-1", className)}>
        {label && (
          <label
            htmlFor={inputId}
            className={cn("font-medium text-foreground", labelSizeClasses[size], disabled && "text-muted-foreground")}
          >
            {label}
          </label>
        )}

        <div className="relative">
          <input
            ref={ref}
            id={inputId}
            type={inputType}
            value={internalValue}
            onChange={handleChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            disabled={disabled || loading}
            aria-invalid={hasError}
            aria-describedby={cn(helperText && helperTextId, hasError && errorId)}
            className={cn(
              // Base styles
              "w-full rounded-md border transition-colors",
              "placeholder:text-muted-foreground",
              "focus:outline-none focus:ring-2 focus:ring-ring/20",
              "disabled:cursor-not-allowed disabled:opacity-50",

              // Size styles
              sizeClasses[size],

              // Variant styles
              variantClasses[variant],

              // Padding adjustments for icons
              (showClearButton || showPasswordToggle || type === "password" || loading) && "pr-10",
              showClearButton && showPasswordToggle && "pr-16",
            )}
            {...props}
          />

          {/* Loading icon */}
          {loading && (
            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400">
              <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
              </svg>
            </span>
          )}

          {/* Clear button */}
          {showClearButton && internalValue && !disabled && !loading && (
            <button
              type="button"
              onClick={handleClear}
              className={cn(
                "absolute right-2 top-1/2 -translate-y-1/2",
                "p-1 rounded-sm opacity-70 hover:opacity-100",
                "focus:outline-none focus:ring-2 focus:ring-ring/20",
                showPasswordToggle && "right-8",
              )}
              aria-label="Clear input"
            >
              <X className="h-4 w-4" />
            </button>
          )}

          {/* Password toggle */}
          {(showPasswordToggle || type === "password") && !loading && (
            <button
              type="button"
              onClick={togglePasswordVisibility}
              disabled={disabled}
              className={cn(
                "absolute right-2 top-1/2 -translate-y-1/2",
                "p-1 rounded-sm opacity-70 hover:opacity-100",
                "focus:outline-none focus:ring-2 focus:ring-ring/20",
                "disabled:cursor-not-allowed disabled:opacity-30",
              )}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          )}
        </div>

        {/* Helper text and error message */}
        {(helperText || hasError) && (
          <div className="space-y-1">
            {helperText && !hasError && (
              <p id={helperTextId} className={cn("text-muted-foreground", helperTextSizeClasses[size])}>
                {helperText}
              </p>
            )}
            {hasError && (
              <p id={errorId} className={cn("text-destructive font-medium", helperTextSizeClasses[size])} role="alert">
                {errorMessage}
              </p>
            )}
          </div>
        )}
      </div>
    )
  },
)

InputField.displayName = "InputField"

export { InputField }
