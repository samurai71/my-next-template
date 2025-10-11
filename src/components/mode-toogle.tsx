/**
 * ModeToggle
 *
 * A small client-side theme toggle button that switches between "light" and "dark"
 * using the `useTheme` hook from `next-themes`.
 *
 * Behavior
 * - Reads the current theme via `useTheme()` and calls `setTheme` to toggle:
 *   `setTheme(theme === "light" ? "dark" : "light")`.
 * - Renders a circular icon button (`Button` with `variant="ghost"` and `size="icon"`).
 * - Shows a Sun icon in light mode and a Moon icon in dark mode using Tailwind
 *   utility classes (`dark:hidden` and `hidden dark:block`).
 *
 * Accessibility
 * - The trigger is a native button with `aria-label="theme toggle"` for screen readers.
 * - Keyboard and pointer accessible since it is a semantic button element.
 *
 * Requirements
 * - Must be rendered on the client (`"use client"`).
 * - Requires the `ThemeProvider` from `next-themes` (or equivalent) higher in the tree
 *   so `useTheme` is available and theme changes persist.
 *
 * Side effects
 * - Calls `setTheme`, which may persist theme preference to local storage (behavior
 *   depends on next-themes configuration).
 *
 * Props
 * - This component does not accept props.
 *
 * Example
 * ```tsx
 * // Place inside a layout/header that is wrapped by next-themes' ThemeProvider
 * <ModeToggle />
 * ```
 *
 * @returns {JSX.Element} A button element that toggles the application theme.
 */
'use client'

import * as React from 'react'

import { useTheme } from 'next-themes'

import { Moon, Sun } from 'lucide-react'

import { Button } from '@/components/ui/button'

/**
 * ModeToggle
 *
 * A small client-side theme toggle button that switches between "light" and "dark"
 * using the `useTheme` hook from `next-themes`.
 *
 * Behavior
 * - Reads the current theme via `useTheme()` and calls `setTheme` to toggle:
 *   `setTheme(theme === "light" ? "dark" : "light")`.
 * - Renders a circular icon button (`Button` with `variant="ghost"` and `size="icon"`).
 * - Shows a Sun icon in light mode and a Moon icon in dark mode using Tailwind
 *   utility classes (`dark:hidden` and `hidden dark:block`).
 *
 * Accessibility
 * - The trigger is a native button with `aria-label="theme toggle"` for screen readers.
 * - Keyboard and pointer accessible since it is a semantic button element.
 *
 * Requirements
 * - Must be rendered on the client (`"use client"`).
 * - Requires the `ThemeProvider` from `next-themes` (or equivalent) higher in the tree
 *   so `useTheme` is available and theme changes persist.
 *
 * Side effects
 * - Calls `setTheme`, which may persist theme preference to local storage (behavior
 *   depends on next-themes configuration).
 *
 * Props
 * - This component does not accept props.
 *
 * Example
 * ```tsx
 * // Place inside a layout/header that is wrapped by next-themes' ThemeProvider
 * <ModeToggle />
 * ```
 *
 * @returns {JSX.Element} A button element that toggles the application theme.
 */

/**
 * ModeToggle
 *
 * A small client-side theme toggle button that switches between "light" and "dark"
 * using the `useTheme` hook from `next-themes`.
 *
 * Behavior
 * - Reads the current theme via `useTheme()` and calls `setTheme` to toggle:
 *   `setTheme(theme === "light" ? "dark" : "light")`.
 * - Renders a circular icon button (`Button` with `variant="ghost"` and `size="icon"`).
 * - Shows a Sun icon in light mode and a Moon icon in dark mode using Tailwind
 *   utility classes (`dark:hidden` and `hidden dark:block`).
 *
 * Accessibility
 * - The trigger is a native button with `aria-label="theme toggle"` for screen readers.
 * - Keyboard and pointer accessible since it is a semantic button element.
 *
 * Requirements
 * - Must be rendered on the client (`"use client"`).
 * - Requires the `ThemeProvider` from `next-themes` (or equivalent) higher in the tree
 *   so `useTheme` is available and theme changes persist.
 *
 * Side effects
 * - Calls `setTheme`, which may persist theme preference to local storage (behavior
 *   depends on next-themes configuration).
 *
 * Props
 * - This component does not accept props.
 *
 * Example
 * ```tsx
 * // Place inside a layout/header that is wrapped by next-themes' ThemeProvider
 * <ModeToggle />
 * ```
 *
 * @returns {JSX.Element} A button element that toggles the application theme.
 */

/**
 * ModeToggle
 *
 * A small client-side theme toggle button that switches between "light" and "dark"
 * using the `useTheme` hook from `next-themes`.
 *
 * Behavior
 * - Reads the current theme via `useTheme()` and calls `setTheme` to toggle:
 *   `setTheme(theme === "light" ? "dark" : "light")`.
 * - Renders a circular icon button (`Button` with `variant="ghost"` and `size="icon"`).
 * - Shows a Sun icon in light mode and a Moon icon in dark mode using Tailwind
 *   utility classes (`dark:hidden` and `hidden dark:block`).
 *
 * Accessibility
 * - The trigger is a native button with `aria-label="theme toggle"` for screen readers.
 * - Keyboard and pointer accessible since it is a semantic button element.
 *
 * Requirements
 * - Must be rendered on the client (`"use client"`).
 * - Requires the `ThemeProvider` from `next-themes` (or equivalent) higher in the tree
 *   so `useTheme` is available and theme changes persist.
 *
 * Side effects
 * - Calls `setTheme`, which may persist theme preference to local storage (behavior
 *   depends on next-themes configuration).
 *
 * Props
 * - This component does not accept props.
 *
 * Example
 * ```tsx
 * // Place inside a layout/header that is wrapped by next-themes' ThemeProvider
 * <ModeToggle />
 * ```
 *
 * @returns {JSX.Element} A button element that toggles the application theme.
 */

/**
 * ModeToggle
 *
 * A small client-side theme toggle button that switches between "light" and "dark"
 * using the `useTheme` hook from `next-themes`.
 *
 * Behavior
 * - Reads the current theme via `useTheme()` and calls `setTheme` to toggle:
 *   `setTheme(theme === "light" ? "dark" : "light")`.
 * - Renders a circular icon button (`Button` with `variant="ghost"` and `size="icon"`).
 * - Shows a Sun icon in light mode and a Moon icon in dark mode using Tailwind
 *   utility classes (`dark:hidden` and `hidden dark:block`).
 *
 * Accessibility
 * - The trigger is a native button with `aria-label="theme toggle"` for screen readers.
 * - Keyboard and pointer accessible since it is a semantic button element.
 *
 * Requirements
 * - Must be rendered on the client (`"use client"`).
 * - Requires the `ThemeProvider` from `next-themes` (or equivalent) higher in the tree
 *   so `useTheme` is available and theme changes persist.
 *
 * Side effects
 * - Calls `setTheme`, which may persist theme preference to local storage (behavior
 *   depends on next-themes configuration).
 *
 * Props
 * - This component does not accept props.
 *
 * Example
 * ```tsx
 * // Place inside a layout/header that is wrapped by next-themes' ThemeProvider
 * <ModeToggle />
 * ```
 *
 * @returns {JSX.Element} A button element that toggles the application theme.
 */

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="theme toggle"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <Sun className="dark:hidden" />
      <Moon className="hidden dark:block" />
    </Button>
  )
}
