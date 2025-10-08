"use client"

import React, { useState } from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { cn } from '@/lib/utils'
import { Button } from './button'
import { Home, Compass, Library, History, Clock, ThumbsUp, User, X } from 'lucide-react'

interface SidebarItemProps {
  icon: React.ElementType
  label: string
  href: string
  isActive?: boolean
  isMobile?: boolean
}

const SidebarItem = ({ icon: Icon, label, href, isActive, isMobile }: SidebarItemProps) => {
  return (
    <NextLink href={href} passHref>
      <Button
        variant="ghost"
        className={cn(
          "w-full justify-start gap-x-3 px-3 text-zinc-900 hover:bg-black/5",
          isActive && "bg-black/10 text-black font-medium",
          isMobile && "py-3"
        )}
      >
        <Icon className="h-5 w-5" />
        <span>{label}</span>
      </Button>
    </NextLink>
  )
}

interface SidebarProps {
  isMobile?: boolean
  isOpen?: boolean
  onClose?: () => void
}

const Sidebar = ({ isMobile = false, isOpen = false, onClose }: SidebarProps) => {
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
      href: '/channel/yourChannel',
    },
  ]

  const sidebarContent = (
    <>
      {isMobile && (
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>
      )}
      
      <div className="flex flex-col gap-y-1 px-2 py-3">
        {routes.map((route) => (
          <SidebarItem
            key={route.href}
            {...route}
            isActive={pathname === route.href}
            isMobile={isMobile}
          />
        ))}
      </div>
    </>
  )

  if (isMobile) {
    return (
      <>
        {/* Mobile overlay */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={onClose}
          />
        )}
        
        {/* Mobile sidebar */}
        <aside className={cn(
          "fixed top-0 left-0 h-full w-64 bg-white transform transition-transform duration-300 ease-in-out z-50 lg:hidden",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}>
          {sidebarContent}
        </aside>
      </>
    )
  }

  // Desktop sidebar
  return (
    <aside className="flex flex-col h-full bg-white text-black border-r border-zinc-200">
      {sidebarContent}
    </aside>
  )
}

export default Sidebar