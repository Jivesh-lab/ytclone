import React from 'react'
import VideoCard from '@/components/VideoCard'
import { mockVideos } from '@/lib/mockData'
import { Clock, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function WatchLater() {
  // Mock watch later videos (first 3 videos)
  const watchLaterVideos = mockVideos.slice(2, 5)

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1800px] mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Clock className="w-6 h-6 text-gray-700" />
            <h1 className="text-2xl font-semibold text-gray-900">Watch later</h1>
            <span className="text-sm text-gray-600">• {watchLaterVideos.length} videos</span>
          </div>
          
          {watchLaterVideos.length > 0 && (
            <Button variant="outline" size="sm">
              <Trash2 className="w-4 h-4 mr-2" />
              Clear all
            </Button>
          )}
        </div>

        {watchLaterVideos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 gap-y-8">
            {watchLaterVideos.map((video) => (
              <div key={video.id} className="relative group">
                <VideoCard
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
                
                {/* Remove button */}
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 text-white hover:bg-black/70"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Clock className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No videos saved</h3>
            <p className="text-gray-600">Save videos to watch them later</p>
          </div>
        )}
      </div>
    </div>
  )
}
