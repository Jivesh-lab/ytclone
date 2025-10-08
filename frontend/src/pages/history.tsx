import React, { useState } from 'react'
import VideoCard from '@/components/VideoCard'
import { Button } from '@/components/ui/button'
import { mockVideos } from '@/lib/mockData'
import { Search, Trash2, Pause } from 'lucide-react'

export default function History() {
  const [searchQuery, setSearchQuery] = useState('')
  
  // Mock watch history (first 6 videos)
  const watchHistory = mockVideos.slice(0, 6)
  
  const filteredHistory = watchHistory.filter(video =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    video.channelName.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1800px] mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <h1 className="text-2xl font-semibold text-gray-900">Watch history</h1>
          
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search watch history"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <Button variant="outline" size="sm">
              <Pause className="w-4 h-4 mr-2" />
              Pause history
            </Button>
            <Button variant="outline" size="sm">
              <Trash2 className="w-4 h-4 mr-2" />
              Clear all
            </Button>
          </div>
        </div>

        {/* History List */}
        <div className="space-y-6">
          {filteredHistory.map((video, index) => (
            <div key={video.id} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="relative">
                  <img 
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-48 aspect-video object-cover rounded-lg"
                  />
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white px-1.5 py-0.5 text-xs font-medium rounded">
                    {video.duration}
                  </div>
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-sm text-gray-600 mb-1">{video.channelName}</p>
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <span>{video.views} views</span>
                  <span>•</span>
                  <span>Watched {video.uploadTime}</span>
                </div>
                <p className="text-sm text-gray-700 mt-2 line-clamp-2">
                  {video.description}
                </p>
              </div>
              
              <Button variant="ghost" size="icon" className="flex-shrink-0">
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>

        {filteredHistory.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {searchQuery ? 'No results found' : 'No watch history'}
            </h3>
            <p className="text-gray-600">
              {searchQuery 
                ? 'Try searching for something else' 
                : 'Videos you watch will appear here'
              }
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
