"use client"

import React, { useState, useRef } from 'react'
import NextLink from 'next/link'
import { Button } from './button'
import { Menu, Search, X, Mic } from 'lucide-react'

const Header: React.FC = () => {
  const user = {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    image: "https://github.com/shadcn.png?height=32&width=32",
  }

  const [searchQuery, setSearchQuery] = useState("")
  const inputRef = useRef<HTMLInputElement | null>(null)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const q = searchQuery.trim()
    if (!q) return
    // Navigation is intentionally disabled here. Keep search local or
    // integrate with an autocomplete/suggestions UI instead.
    console.log('search (local):', q)
  }

  const clear = () => setSearchQuery("")

  const onMicClick = () => {
    // Placeholder: focus input and log. Replace with Web Speech API integration if desired.
    inputRef.current?.focus()
    console.log('mic clicked (no speech recog implemented)')
  }

  return (
    <header className="flex items-center justify-between px-4 py-2 bg-white border-b">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon">
          <Menu className="w-6 h-6" />
        </Button>

        <NextLink href="/" className="flex items-center gap-1">
          <div className="bg-red-600 p-1 rounded">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white" aria-hidden>
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s3.93.502 5.814a3..." />
            </svg>
          </div>
          <span className="text-xl font-medium text-amber-900">YourTube</span>
          <span className="text-xs text-gray-400 ml-1">INK</span>
        </NextLink>
      </div>
      <form onSubmit={onSubmit} className="flex-1 max-w-xl mx-4">
        <label htmlFor="header-search" className="sr-only">Search</label>
        <div className="relative">
          <input
            id="header-search"
            type="text"
            ref={inputRef}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search videos, channels..."
            className="w-full rounded-md border px-10 py-2 text-sm bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-300"
            aria-label="Search"
          />

          <button
            type="submit"
            aria-label="Search"
            className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-900"
          >
            <Search className="w-4 h-4" />
          </button>

       

          {searchQuery && (
            <button
              type="button"
              onClick={clear}
              aria-label="Clear search"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-800"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </form>
    </header>
  )
}

export default Header