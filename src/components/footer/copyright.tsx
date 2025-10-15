'use client'

import React from 'react'

import Link from 'next/link'

import { Button } from '../ui/button'

/**
 * Displays a copyright notice with the current year.
 * @returns A paragraph element showing © and the current year.
 */
export default function Copyright() {
  const year = new Date().getFullYear()

  return (
    <p className="text-center font-mono text-sm">
      © {year} Mark Landeryou. All rights reserved.{' '}
      <Button variant="link">
        {' '}
        <Link href="privacy-policy">Privacy Policy</Link>{' '}
      </Button>
      <Button variant="link">
        <Link href="terms">| Terms and Conditions</Link>
      </Button>
    </p>
  )
}
