import React from 'react'
import VideoCard from '@/components/VideoCard'
import { mockVideos } from '@/lib/mockData'
import { ThumbsUp } from 'lucide-react'

export default function Liked() {
  // Mock liked videos (first 4 videos)
  const likedVideos = mockVideos.slice(0, 4)

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1800px] mx-auto px-4 py-6">
        <div className="flex items-center gap-3 mb-8">
          <ThumbsUp className="w-6 h-6 text-gray-700" />
          <h1 className="text-2xl font-semibold text-gray-900">Liked videos</h1>
          <span className="text-sm text-gray-600">• {likedVideos.length} videos</span>
        </div>

        {likedVideos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 gap-y-8">
            {likedVideos.map((video) => (
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
        ) : (
          <div className="text-center py-16">
            <ThumbsUp className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No liked videos yet</h3>
            <p className="text-gray-600">Videos that you like will appear here</p>
          </div>
        )}
      </div>
    </div>
  )
}
