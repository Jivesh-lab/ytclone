import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { mockVideos } from '@/lib/mockData'
import VideoCard from '@/components/VideoCard'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { ThumbsUp, ThumbsDown, Share, Download, MoreHorizontal, Bell } from 'lucide-react'

export default function WatchVideo() {
  const router = useRouter()
  const { id } = router.query
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [showFullDescription, setShowFullDescription] = useState(false)

  const video = mockVideos.find(v => v.id === id)
  const relatedVideos = mockVideos.filter(v => v.id !== id).slice(0, 12)

  if (!video) {
    return <div className="p-4">Video not found</div>
  }

  const handleSubscribe = () => {
    setIsSubscribed(!isSubscribed)
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1800px] mx-auto p-4">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Content */}
          <div className="flex-1">
            {/* Video Player */}
            <div className="aspect-video bg-black rounded-xl overflow-hidden mb-4">
              <img 
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Button 
                  size="lg" 
                  className="bg-red-600 hover:bg-red-700 text-white rounded-full w-20 h-20"
                >
                  <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </Button>
              </div>
            </div>

            {/* Video Title */}
            <h1 className="text-xl font-semibold text-gray-900 mb-4">
              {video.title}
            </h1>

            {/* Channel Info and Actions */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              {/* Channel Info */}
              <div className="flex items-center gap-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={video.channelAvatar} />
                  <AvatarFallback>{video.channelName.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium text-gray-900">{video.channelName}</h3>
                  <p className="text-sm text-gray-600">{video.subscriberCount} subscribers</p>
                </div>
                <Button 
                  onClick={handleSubscribe}
                  className={`ml-4 ${isSubscribed 
                    ? 'bg-gray-200 text-gray-800 hover:bg-gray-300' 
                    : 'bg-red-600 text-white hover:bg-red-700'
                  }`}
                >
                  <Bell className="w-4 h-4 mr-2" />
                  {isSubscribed ? 'Subscribed' : 'Subscribe'}
                </Button>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <div className="flex items-center bg-gray-100 rounded-full">
                  <Button variant="ghost" size="sm" className="rounded-l-full px-4">
                    <ThumbsUp className="w-4 h-4 mr-2" />
                    {video.likes}
                  </Button>
                  <div className="w-px h-6 bg-gray-300"></div>
                  <Button variant="ghost" size="sm" className="rounded-r-full px-4">
                    <ThumbsDown className="w-4 h-4" />
                  </Button>
                </div>
                
                <Button variant="outline" size="sm">
                  <Share className="w-4 h-4 mr-2" />
                  Share
                </Button>
                
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
                
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Video Description */}
            <div className="bg-gray-50 rounded-xl p-4 mb-6">
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                <span className="font-medium">{video.views} views</span>
                <span>{video.uploadTime}</span>
              </div>
              
              <div className="text-gray-900">
                <p className={`${showFullDescription ? '' : 'line-clamp-3'}`}>
                  {video.description}
                </p>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setShowFullDescription(!showFullDescription)}
                  className="mt-2 text-gray-600 hover:text-gray-900"
                >
                  {showFullDescription ? 'Show less' : 'Show more'}
                </Button>
              </div>
            </div>

            {/* Comments Section */}
            <div className="mb-6">
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-lg font-medium">2,847 Comments</h3>
                <Button variant="ghost" size="sm">
                  Sort by
                </Button>
              </div>

              {/* Add Comment */}
              <div className="flex gap-3 mb-6">
                <Avatar className="w-10 h-10">
                  <AvatarFallback>You</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <textarea 
                    placeholder="Add a comment..."
                    className="w-full border-b border-gray-300 bg-transparent p-2 text-sm resize-none focus:outline-none focus:border-blue-500"
                    rows={1}
                  />
                  <div className="flex justify-end gap-2 mt-2">
                    <Button variant="ghost" size="sm">Cancel</Button>
                    <Button size="sm">Comment</Button>
                  </div>
                </div>
              </div>

              {/* Sample Comments */}
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback>U{i}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-medium">@user{i}</span>
                        <span className="text-xs text-gray-500">2 hours ago</span>
                      </div>
                      <p className="text-sm text-gray-900">
                        Great tutorial! This really helped me understand the concepts better.
                      </p>
                      <div className="flex items-center gap-4 mt-2">
                        <Button variant="ghost" size="sm" className="text-xs">
                          <ThumbsUp className="w-3 h-3 mr-1" />
                          12
                        </Button>
                        <Button variant="ghost" size="sm" className="text-xs">
                          <ThumbsDown className="w-3 h-3 mr-1" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-xs">
                          Reply
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - Related Videos */}
          <div className="w-full lg:w-96">
            <h3 className="text-lg font-medium mb-4">Up next</h3>
            <div className="space-y-3">
              {relatedVideos.map((relatedVideo) => (
                <div key={relatedVideo.id} className="flex gap-2">
                  <div className="relative flex-shrink-0">
                    <img 
                      src={relatedVideo.thumbnail}
                      alt={relatedVideo.title}
                      className="w-40 aspect-video object-cover rounded-lg"
                    />
                    <div className="absolute bottom-1 right-1 bg-black/80 text-white px-1 py-0.5 text-xs rounded">
                      {relatedVideo.duration}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm line-clamp-2 text-gray-900 mb-1">
                      {relatedVideo.title}
                    </h4>
                    <p className="text-xs text-gray-600 mb-1">
                      {relatedVideo.channelName}
                    </p>
                    <div className="text-xs text-gray-600">
                      {relatedVideo.views} views • {relatedVideo.uploadTime}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}