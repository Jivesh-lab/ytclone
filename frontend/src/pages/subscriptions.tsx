import React from 'react'
import VideoCard from '@/components/VideoCard'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { mockVideos, mockChannels } from '@/lib/mockData'
import { Bell } from 'lucide-react'

export default function Subscriptions() {
  // Filter videos from subscribed channels (first 2 channels for demo)
  const subscribedChannels = mockChannels.slice(0, 2)
  const subscriptionVideos = mockVideos.filter(video => 
    subscribedChannels.some(channel => channel.name === video.channelName)
  )

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1800px] mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-semibold text-gray-900">Subscriptions</h1>
          <Button variant="outline" size="sm">
            Manage
          </Button>
        </div>

        {/* Subscribed Channels */}
        <div className="mb-8">
          <h2 className="text-lg font-medium mb-4">Your subscriptions</h2>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {subscribedChannels.map((channel) => (
              <div key={channel.id} className="flex-shrink-0 text-center">
                <Avatar className="w-16 h-16 mx-auto mb-2">
                  <AvatarImage src={channel.avatar} />
                  <AvatarFallback>{channel.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <p className="text-sm font-medium text-gray-900 mb-1">{channel.name}</p>
                <p className="text-xs text-gray-600">{channel.subscriberCount}</p>
                <Button variant="ghost" size="icon" className="mt-2">
                  <Bell className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Latest Videos from Subscriptions */}
        <div>
          <h2 className="text-lg font-medium mb-6">Latest videos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 gap-y-8">
            {subscriptionVideos.map((video) => (
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

          {subscriptionVideos.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-gray-900 mb-2">No new videos</h3>
              <p className="text-gray-600">Subscribe to channels to see their latest videos here</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
