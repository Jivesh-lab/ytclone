"use client"

import React, { useState } from 'react'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'

interface CategoryFiltersProps {
  categories: string[]
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

const CategoryFilters: React.FC<CategoryFiltersProps> = ({
  categories,
  selectedCategory,
  onCategoryChange
}) => {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "secondary"}
          size="sm"
          onClick={() => onCategoryChange(category)}
          className={cn(
            "whitespace-nowrap flex-shrink-0 transition-all",
            selectedCategory === category
              ? "bg-gray-900 text-white hover:bg-gray-800"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          )}
        >
          {category}
        </Button>
      ))}
    </div>
  )
}

export default CategoryFilters