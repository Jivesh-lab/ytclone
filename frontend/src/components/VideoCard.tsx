"use client"

import React from 'react'
import NextLink from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { MoreVertical, Clock } from 'lucide-react'
import { Button } from './ui/button'

interface VideoCardProps {
  id: string
  title: string
  channelName: string
  channelAvatar?: string
  thumbnail: string
  views: string
  uploadTime: string
  duration: string
  isLive?: boolean
}

const VideoCard: React.FC<VideoCardProps> = ({
  id,
  title,
  channelName,
  channelAvatar,
  thumbnail,
  views,
  uploadTime,
  duration,
  isLive = false
}) => {
  return (
    <div className="group cursor-pointer">
      <NextLink href={`/watch/${id}`}>
        <div className="relative mb-3">
          {/* Thumbnail */}
          <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden">
            <img 
              src={thumbnail} 
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
              loading="lazy"
            />
            {/* Duration Badge */}
            {!isLive && (
              <div className="absolute bottom-2 right-2 bg-black/80 text-white px-1.5 py-0.5 text-xs font-medium rounded">
                {duration}
              </div>
            )}
            {/* Live Badge */}
            {isLive && (
              <div className="absolute bottom-2 right-2 bg-red-600 text-white px-2 py-0.5 text-xs font-medium rounded flex items-center gap-1">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                LIVE
              </div>
            )}
          </div>
        </div>
      </NextLink>

      {/* Video Info */}
      <div className="flex gap-3">
        {/* Channel Avatar */}
        <NextLink href={`/channel/${channelName.toLowerCase().replace(/\s+/g, '')}`}>
          <Avatar className="w-9 h-9 mt-1">
            <AvatarImage src={channelAvatar} />
            <AvatarFallback>{channelName.charAt(0)}</AvatarFallback>
          </Avatar>
        </NextLink>

        {/* Video Details */}
        <div className="flex-1 min-w-0">
          <NextLink href={`/watch/${id}`}>
            <h3 className="font-medium text-sm leading-5 text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
              {title}
            </h3>
          </NextLink>
          
          <NextLink href={`/channel/${channelName.toLowerCase().replace(/\s+/g, '')}`}>
            <p className="text-sm text-gray-600 mt-1 hover:text-gray-900 transition-colors">
              {channelName}
            </p>
          </NextLink>
          
          <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
            <span>{views} views</span>
            <span>•</span>
            <span>{uploadTime}</span>
          </div>
        </div>

        {/* More Options */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="opacity-0 group-hover:opacity-100 transition-opacity w-8 h-8 mt-1"
        >
          <MoreVertical className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}

export default VideoCard