import Link from 'next/link'
import { Home, Compass, BookOpen, History, Clock, ThumbsUp, User } from 'lucide-react'

const Sidebar = () => {
  const menuItems = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: Compass, label: 'Explore', href: '/explore' },
    { icon: BookOpen, label: 'Subscriptions', href: '/subscriptions' },
    { icon: History, label: 'History', href: '/history' },
    { icon: Clock, label: 'Watch later', href: '/watchlater' },
    { icon: ThumbsUp, label: 'Liked videos', href: '/liked' },
    { icon: User, label: 'Your channel', href: '/channel' },
  ]

  return (
    <aside className="w-64 fixed left-0 top-14 h-full bg-background border-r">
      <nav className="p-2">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-accent/50 transition-colors"
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar