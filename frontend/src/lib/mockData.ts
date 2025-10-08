export interface Video {
  id: string
  title: string
  channelName: string
  channelAvatar: string
  thumbnail: string
  views: string
  uploadTime: string
  duration: string
  isLive?: boolean
  description?: string
  likes?: string
  dislikes?: string
  subscriberCount?: string
}

export interface Channel {
  id: string
  name: string
  avatar: string
  banner: string
  subscriberCount: string
  videosCount: string
  description: string
  isVerified?: boolean
}

export const mockVideos: Video[] = [
  {
    id: "1",
    title: "Building a Full Stack App with Next.js 15 and TypeScript",
    channelName: "TechMaster",
    channelAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    thumbnail: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=480&h=270&fit=crop",
    views: "124K",
    uploadTime: "2 days ago",
    duration: "15:42",
    description: "Learn how to build a modern full-stack application using Next.js 15, TypeScript, and the latest web technologies.",
    likes: "3.2K",
    subscriberCount: "245K"
  },
  {
    id: "2",
    title: "React 19 New Features You Need to Know",
    channelName: "CodeWithSara",
    channelAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b29c?w=40&h=40&fit=crop&crop=face",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=480&h=270&fit=crop",
    views: "87K",
    uploadTime: "1 week ago",
    duration: "22:15",
    description: "Exploring the exciting new features in React 19 including Server Components, Suspense improvements, and more.",
    likes: "2.8K",
    subscriberCount: "189K"
  },
  {
    id: "3",
    title: "🔴 LIVE: Building a Chat App with Real-time Features",
    channelName: "DevStream",
    channelAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=480&h=270&fit=crop",
    views: "1.2K",
    uploadTime: "streaming now",
    duration: "",
    isLive: true,
    description: "Join us live as we build a real-time chat application with WebSockets and modern React patterns.",
    likes: "234",
    subscriberCount: "67K"
  },
  {
    id: "4",
    title: "CSS Grid vs Flexbox: When to Use Each",
    channelName: "DesignDev",
    channelAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face",
    thumbnail: "https://images.unsplash.com/photo-1558655146-364adfc454cb?w=480&h=270&fit=crop",
    views: "456K",
    uploadTime: "3 days ago",
    duration: "18:30",
    description: "A comprehensive guide to understanding when to use CSS Grid vs Flexbox for your layouts.",
    likes: "12K",
    subscriberCount: "534K"
  },
  {
    id: "5",
    title: "Database Design Best Practices for Modern Apps",
    channelName: "DataPro",
    channelAvatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=40&h=40&fit=crop&crop=face",
    thumbnail: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=480&h=270&fit=crop",
    views: "78K",
    uploadTime: "5 days ago",
    duration: "31:45",
    description: "Learn the fundamental principles of database design and how to structure your data efficiently.",
    likes: "1.9K",
    subscriberCount: "123K"
  },
  {
    id: "6",
    title: "Docker Tutorial: From Beginner to Pro",
    channelName: "CloudMaster",
    channelAvatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=40&h=40&fit=crop&crop=face",
    thumbnail: "https://images.unsplash.com/photo-1618477371303-b2a56f422d9e?w=480&h=270&fit=crop",
    views: "203K",
    uploadTime: "1 week ago",
    duration: "45:20",
    description: "Master Docker containerization from the basics to advanced deployment strategies.",
    likes: "5.7K",
    subscriberCount: "378K"
  },
  {
    id: "7",
    title: "JavaScript Performance Optimization Tips",
    channelName: "JSNinja",
    channelAvatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=40&h=40&fit=crop&crop=face",
    thumbnail: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=480&h=270&fit=crop",
    views: "92K",
    uploadTime: "4 days ago",
    duration: "26:33",
    description: "Boost your JavaScript application performance with these proven optimization techniques.",
    likes: "3.1K",
    subscriberCount: "267K"
  },
  {
    id: "8",
    title: "Building Responsive UIs with Tailwind CSS",
    channelName: "StyleCoder",
    channelAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=480&h=270&fit=crop",
    views: "156K",
    uploadTime: "6 days ago",
    duration: "19:15",
    description: "Create beautiful, responsive user interfaces using Tailwind CSS utility classes.",
    likes: "4.2K",
    subscriberCount: "198K"
  }
]

export const mockChannels: Channel[] = [
  {
    id: "techmaster",
    name: "TechMaster",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    banner: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=300&fit=crop",
    subscriberCount: "245K",
    videosCount: "127",
    description: "Welcome to TechMaster! We create high-quality tutorials on web development, focusing on modern JavaScript frameworks and best practices.",
    isVerified: true
  },
  {
    id: "codewithsara",
    name: "CodeWithSara",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b29c?w=40&h=40&fit=crop&crop=face",
    banner: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=300&fit=crop",
    subscriberCount: "189K",
    videosCount: "89",
    description: "Hi! I'm Sara, a software engineer passionate about React, TypeScript, and modern web development. Join me on this coding journey!",
    isVerified: true
  }
]

export const categories = [
  "All",
  "JavaScript",
  "React",
  "Next.js",
  "CSS",
  "Node.js",
  "TypeScript",
  "Web Development",
  "Tutorial",
  "Live",
  "Database",
  "DevOps",
  "Design"
]