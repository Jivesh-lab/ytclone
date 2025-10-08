"use client"

import React, { useState, useMemo } from 'react'
import VideoCard from '@/components/VideoCard'
import CategoryFilters from '@/components/CategoryFilters'
import { mockVideos, categories } from '@/lib/mockData'

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredVideos = useMemo(() => {
    if (selectedCategory === "All") return mockVideos
    
    return mockVideos.filter(video => {
      const title = video.title.toLowerCase()
      const category = selectedCategory.toLowerCase()
      
      // Simple keyword matching - in a real app, you'd have proper categorization
      return title.includes(category) || 
             (category === "live" && video.isLive) ||
             (category === "tutorial" && (title.includes("tutorial") || title.includes("learn") || title.includes("how")))
    })
  }, [selectedCategory])

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[2000px] mx-auto px-4 py-6">
        {/* Category Filters */}
        <div className="mb-6">
          <CategoryFilters
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 gap-y-8">
          {filteredVideos.map((video) => (
            <VideoCard
              key={video.id}
              id={video.id}
              title={video.title}
              channelName={video.channelName}
              channelAvatar={video.channelAvatar}
              thumbnail={video.thumbnail}
              views={video.views}
              uploadTime={video.uploadTime}
              duration={video.duration}
              isLive={video.isLive}
            />
          ))}
        </div>

        {/* No results message */}
        {filteredVideos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No videos found for "{selectedCategory}"</p>
            <p className="text-gray-400 text-sm mt-2">Try selecting a different category</p>
          </div>
        )}
      </div>
    </div>
  )
}
