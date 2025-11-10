'use client'

import React from 'react'

/**
 * Displays a copyright notice with the current year.
 * @returns A paragraph element showing © and the current year.
 */
export default function Copyright() {
  const year = new Date().getFullYear()

  return <p>© {year}</p>
}
