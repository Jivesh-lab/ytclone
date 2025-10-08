import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { mockChannels, mockVideos } from '@/lib/mockData'
import VideoCard from '@/components/VideoCard'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Bell, CheckCircle, MoreHorizontal } from 'lucide-react'

export default function ChannelPage() {
  const router = useRouter()
  const { id } = router.query
  const [activeTab, setActiveTab] = useState('videos')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const channel = mockChannels.find(c => c.id === id)
  const channelVideos = mockVideos.filter(v => 
    v.channelName.toLowerCase().replace(/\s+/g, '') === id
  )

  if (!channel) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">Channel not found</h1>
          <p className="text-gray-600">The channel you're looking for doesn't exist.</p>
        </div>
      </div>
    )
  }

  const handleSubscribe = () => {
    setIsSubscribed(!isSubscribed)
  }

  const tabs = [
    { id: 'videos', label: 'Videos', count: channel.videosCount },
    { id: 'shorts', label: 'Shorts', count: '23' },
    { id: 'live', label: 'Live', count: null },
    { id: 'playlists', label: 'Playlists', count: '5' },
    { id: 'community', label: 'Community', count: null },
    { id: 'about', label: 'About', count: null },
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1800px] mx-auto">
        {/* Channel Banner */}
        <div className="relative">
          <div className="aspect-[6/1] bg-gradient-to-r from-blue-600 to-purple-600 overflow-hidden">
            <img 
              src={channel.banner}
              alt={`${channel.name} banner`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Channel Info */}
        <div className="px-4 py-6">
          <div className="flex flex-col sm:flex-row items-start gap-6">
            {/* Avatar and Basic Info */}
            <div className="flex items-start gap-4">
              <Avatar className="w-20 h-20 sm:w-32 sm:h-32">
                <AvatarImage src={channel.avatar} />
                <AvatarFallback className="text-2xl">{channel.name.charAt(0)}</AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    {channel.name}
                  </h1>
                  {channel.isVerified && (
                    <CheckCircle className="w-6 h-6 text-blue-500" />
                  )}
                </div>
                
                <div className="text-sm text-gray-600 space-y-1">
                  <p>@{channel.id}</p>
                  <p>{channel.subscriberCount} subscribers • {channel.videosCount} videos</p>
                </div>
                
                <p className="text-sm text-gray-700 mt-3 max-w-2xl">
                  {channel.description}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Button 
                onClick={handleSubscribe}
                className={`flex-1 sm:flex-initial ${isSubscribed 
                  ? 'bg-gray-200 text-gray-800 hover:bg-gray-300' 
                  : 'bg-red-600 text-white hover:bg-red-700'
                }`}
              >
                <Bell className="w-4 h-4 mr-2" />
                {isSubscribed ? 'Subscribed' : 'Subscribe'}
              </Button>
              
              <Button variant="outline">
                Join
              </Button>
              
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="mt-8 border-b">
            <nav className="flex gap-8 overflow-x-auto scrollbar-hide">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-3 px-1 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-gray-900 text-gray-900'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab.label}
                  {tab.count && (
                    <span className="ml-2 text-xs text-gray-500">
                      {tab.count}
                    </span>
                  )}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="mt-6">
            {activeTab === 'videos' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-medium">Latest videos</h2>
                  <Button variant="ghost" size="sm">
                    Sort by
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 gap-y-8">
                  {channelVideos.map((video) => (
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
                
                {channelVideos.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-gray-500">No videos available</p>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'shorts' && (
              <div className="text-center py-12">
                <p className="text-gray-500">No shorts available</p>
              </div>
            )}

            {activeTab === 'live' && (
              <div className="text-center py-12">
                <p className="text-gray-500">No live streams</p>
              </div>
            )}

            {activeTab === 'playlists' && (
              <div className="text-center py-12">
                <p className="text-gray-500">No playlists available</p>
              </div>
            )}

            {activeTab === 'community' && (
              <div className="text-center py-12">
                <p className="text-gray-500">No community posts</p>
              </div>
            )}

            {activeTab === 'about' && (
              <div className="max-w-4xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Description</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {channel.description}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-4">Stats</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Joined:</span>
                        <span>Jan 15, 2020</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Total views:</span>
                        <span>2.5M views</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Country:</span>
                        <span>United States</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}