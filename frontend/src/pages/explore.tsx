import React, { useState } from 'react'
import VideoCard from '@/components/VideoCard'
import CategoryFilters from '@/components/CategoryFilters'
import { mockVideos, categories } from '@/lib/mockData'
import { TrendingUp, Music, Gamepad, Film, Newspaper, Trophy, Lightbulb, Shirt } from 'lucide-react'

export default function Explore() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  
  const trendingCategories = [
    { icon: TrendingUp, title: "Trending", description: "What's popular now" },
    { icon: Music, title: "Music", description: "Music videos & concerts" },
    { icon: Gamepad, title: "Gaming", description: "Gaming content" },
    { icon: Film, title: "Movies", description: "Movie trailers & reviews" },
    { icon: Newspaper, title: "News", description: "Latest news" },
    { icon: Trophy, title: "Sports", description: "Sports highlights" },
    { icon: Lightbulb, title: "Learning", description: "Educational content" },
    { icon: Shirt, title: "Fashion", description: "Style & fashion" },
  ]

  const filteredVideos = selectedCategory === "All" 
    ? mockVideos 
    : mockVideos.filter(video => {
        const title = video.title.toLowerCase()
        const category = selectedCategory.toLowerCase()
        return title.includes(category) || 
               (category === "live" && video.isLive)
      })

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1800px] mx-auto px-4 py-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">Explore</h1>
        
        {/* Trending Categories Grid */}
        <div className="mb-8">
          <h2 className="text-lg font-medium mb-4">Trending on VidStream</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {trendingCategories.map((category) => (
              <div 
                key={category.title}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 hover:from-gray-100 hover:to-gray-200 transition-colors cursor-pointer group"
              >
                <category.icon className="w-8 h-8 text-gray-600 group-hover:text-gray-800 transition-colors mb-3" />
                <h3 className="font-medium text-gray-900 mb-1">{category.title}</h3>
                <p className="text-sm text-gray-600">{category.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filters */}
        <div className="mb-6">
          <CategoryFilters
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>

        {/* Popular Videos */}
        <div>
          <h2 className="text-lg font-medium mb-6">
            {selectedCategory === "All" ? "Popular videos" : `${selectedCategory} videos`}
          </h2>
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

          {filteredVideos.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No videos found for "{selectedCategory}"</p>
              <p className="text-gray-400 text-sm mt-2">Try selecting a different category</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
