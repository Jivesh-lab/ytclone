import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import VideoCard from '@/components/VideoCard'
import { mockVideos } from '@/lib/mockData'
import { Button } from '@/components/ui/button'
import { Filter, SortAsc } from 'lucide-react'

export default function SearchResults() {
  const router = useRouter()
  const { q } = router.query
  const [sortBy, setSortBy] = useState('relevance')
  const [searchResults, setSearchResults] = useState(mockVideos)

  useEffect(() => {
    if (q && typeof q === 'string') {
      const filtered = mockVideos.filter(video =>
        video.title.toLowerCase().includes(q.toLowerCase()) ||
        video.channelName.toLowerCase().includes(q.toLowerCase()) ||
        (video.description && video.description.toLowerCase().includes(q.toLowerCase()))
      )
      setSearchResults(filtered)
    } else {
      setSearchResults(mockVideos)
    }
  }, [q])

  const sortOptions = [
    { value: 'relevance', label: 'Relevance' },
    { value: 'upload_date', label: 'Upload date' },
    { value: 'view_count', label: 'View count' },
    { value: 'rating', label: 'Rating' },
  ]

  const filterOptions = [
    { value: 'all', label: 'All' },
    { value: 'hour', label: 'Last hour' },
    { value: 'today', label: 'Today' },
    { value: 'week', label: 'This week' },
    { value: 'month', label: 'This month' },
    { value: 'year', label: 'This year' },
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1800px] mx-auto px-4 py-6">
        {/* Search Header */}
        <div className="mb-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-xl font-medium text-gray-900">
                {q ? `Search results for "${q}"` : 'All videos'}
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                About {searchResults.length} results
              </p>
            </div>

            {/* Sort and Filter Controls */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-gray-600" />
                <select 
                  className="text-sm border rounded px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue="all"
                >
                  {filterOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center gap-2">
                <SortAsc className="w-4 h-4 text-gray-600" />
                <select 
                  className="text-sm border rounded px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  {sortOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Search Results */}
        {searchResults.length > 0 ? (
          <div className="space-y-6">
            {searchResults.map((video) => (
              <div key={video.id} className="flex flex-col sm:flex-row gap-4">
                {/* Video Thumbnail */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <img 
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full sm:w-80 aspect-video object-cover rounded-lg"
                    />
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white px-1.5 py-0.5 text-xs font-medium rounded">
                      {video.duration}
                    </div>
                    {video.isLive && (
                      <div className="absolute bottom-2 left-2 bg-red-600 text-white px-2 py-0.5 text-xs font-medium rounded flex items-center gap-1">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        LIVE
                      </div>
                    )}
                  </div>
                </div>

                {/* Video Info */}
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 cursor-pointer">
                    {video.title}
                  </h3>
                  
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <span>{video.views} views</span>
                    <span className="mx-2">•</span>
                    <span>{video.uploadTime}</span>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-xs font-medium">
                      {video.channelName.charAt(0)}
                    </div>
                    <span className="text-sm text-gray-700 hover:text-gray-900 cursor-pointer">
                      {video.channelName}
                    </span>
                  </div>

                  <p className="text-sm text-gray-700 line-clamp-2">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No results found
            </h3>
            <p className="text-gray-600">
              Try different keywords or check your spelling
            </p>
          </div>
        )}
      </div>
    </div>
  )
}