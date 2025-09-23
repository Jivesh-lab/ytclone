"use client"

import React from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { cn } from '@/lib/utils'
import { Button } from './button'
import { Home, Compass, Library, History, Clock, ThumbsUp, User } from 'lucide-react'

interface SidebarItemProps {
  icon: React.ElementType
  label: string
  href: string
  isActive?: boolean
}

const SidebarItem = ({ icon: Icon, label, href, isActive }: SidebarItemProps) => {
  return (
    <NextLink href={href} passHref>
      <Button
        variant="ghost"
        className={cn(
          "w-full justify-start gap-x-3 px-3 text-zinc-900 hover:bg-black/5",
          isActive && "bg-black/10 text-black font-medium"
        )}
      >
        <Icon className="h-5 w-5" />
        <span>{label}</span>
      </Button>
    </NextLink>
  )
}

const Sidebar = () => {
  const router = useRouter()
  const pathname = router.asPath
  
  const routes = [
    {
      icon: Home,
      label: 'Home',
      href: '/',
    },
    {
      icon: Compass,
      label: 'Explore',
      href: '/explore',
    },
    {
      icon: Library,
      label: 'Subscriptions',
      href: '/subscriptions',
    },
    {
      icon: History,
      label: 'History',
      href: '/history',
    },
    {
      icon: Clock,
      label: 'Watch later',
      href: '/watchlater',
    },
    {
      icon: ThumbsUp,
      label: 'Liked videos',
      href: '/liked',
    },
    {
      icon: User,
      label: 'Your channel',
      href: '/channel',
    },
  ]

  return (
    <aside className="flex flex-col h-full bg-white text-black border-r border-zinc-200">
      <div className="flex flex-col gap-y-1 px-2 py-3">
        {routes.map((route) => (
          <SidebarItem
            key={route.href}
            {...route}
            isActive={pathname === route.href}
          />
        ))}
      </div>
    </aside>
  )
}

export default Sidebar