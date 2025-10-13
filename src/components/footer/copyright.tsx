'use client'

import React from 'react'

import Link from 'next/link'

/**
 * Displays a copyright notice with the current year.
 * @returns A paragraph element showing © and the current year.
 */
export default function Copyright() {
  const year = new Date().getFullYear()

  return (
    <p className="text-center font-mono text-sm">
      © {year} Mark Landeryou. All rights reserved.{' '}
      <Link href="privacy-policy">Privacy Policy</Link>{' '}
      <Link href="terms">| Terms and Conditions</Link>
    </p>
  )
}
