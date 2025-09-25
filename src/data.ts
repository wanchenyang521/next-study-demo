export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorAvatar: string;
  publishDate: string;
  readTime: number;
  tags: string[];
  category: string;
  coverImage: string;
  views: number;
  likes: number;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with Next.js 14 App Router',
    excerpt: 'Learn how to build modern web applications with Next.js 14 and the new App Router. Explore server components, layouts, and more.',
    content: 'Full content of the blog post...',
    author: 'John Doe',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
    publishDate: '2024-09-20',
    readTime: 8,
    tags: ['Next.js', 'React', 'Web Development'],
    category: 'Tutorial',
    coverImage: 'https://picsum.photos/800/400?random=1',
    views: 1250,
    likes: 89
  },
  {
    id: '2',
    title: 'Understanding React Server Components',
    excerpt: 'Dive deep into React Server Components and understand how they revolutionize the way we build React applications.',
    content: 'Full content of the blog post...',
    author: 'Jane Smith',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jane',
    publishDate: '2024-09-18',
    readTime: 12,
    tags: ['React', 'Server Components', 'Performance'],
    category: 'Deep Dive',
    coverImage: 'https://picsum.photos/800/400?random=2',
    views: 2340,
    likes: 156
  },
  {
    id: '3',
    title: 'TypeScript Best Practices in 2024',
    excerpt: 'Discover the latest TypeScript best practices and patterns that will make your code more maintainable and type-safe.',
    content: 'Full content of the blog post...',
    author: 'Mike Johnson',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike',
    publishDate: '2024-09-15',
    readTime: 10,
    tags: ['TypeScript', 'JavaScript', 'Best Practices'],
    category: 'Guide',
    coverImage: 'https://picsum.photos/800/400?random=3',
    views: 3120,
    likes: 234
  },
  {
    id: '4',
    title: 'Building Responsive Layouts with Tailwind CSS',
    excerpt: 'Master the art of creating beautiful, responsive layouts using Tailwind CSS utility classes and modern design principles.',
    content: 'Full content of the blog post...',
    author: 'Sarah Wilson',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    publishDate: '2024-09-12',
    readTime: 6,
    tags: ['CSS', 'Tailwind', 'Design'],
    category: 'Tutorial',
    coverImage: 'https://picsum.photos/800/400?random=4',
    views: 890,
    likes: 67
  },
  {
    id: '5',
    title: 'State Management in Modern React Applications',
    excerpt: 'Compare different state management solutions for React applications and learn when to use each approach.',
    content: 'Full content of the blog post...',
    author: 'David Chen',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
    publishDate: '2024-09-10',
    readTime: 15,
    tags: ['React', 'State Management', 'Redux', 'Zustand'],
    category: 'Comparison',
    coverImage: 'https://picsum.photos/800/400?random=5',
    views: 4567,
    likes: 312
  },
  {
    id: '6',
    title: 'Optimizing Web Performance with Next.js',
    excerpt: 'Learn advanced techniques for optimizing your Next.js application performance, from image optimization to code splitting.',
    content: 'Full content of the blog post...',
    author: 'Emily Brown',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily',
    publishDate: '2024-09-08',
    readTime: 11,
    tags: ['Performance', 'Next.js', 'Optimization'],
    category: 'Performance',
    coverImage: 'https://picsum.photos/800/400?random=6',
    views: 2890,
    likes: 198
  },
  {
    id: '7',
    title: 'Introduction to Web Accessibility',
    excerpt: 'Make your web applications accessible to everyone. Learn WCAG guidelines and practical implementation tips.',
    content: 'Full content of the blog post...',
    author: 'Alex Martinez',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
    publishDate: '2024-09-05',
    readTime: 9,
    tags: ['Accessibility', 'A11y', 'Web Standards'],
    category: 'Guide',
    coverImage: 'https://picsum.photos/800/400?random=7',
    views: 1670,
    likes: 145
  },
  {
    id: '8',
    title: 'Testing React Components with Jest and React Testing Library',
    excerpt: 'Write effective tests for your React components using Jest and React Testing Library with practical examples.',
    content: 'Full content of the blog post...',
    author: 'Lisa Anderson',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa',
    publishDate: '2024-09-03',
    readTime: 13,
    tags: ['Testing', 'Jest', 'React Testing Library'],
    category: 'Testing',
    coverImage: 'https://picsum.photos/800/400?random=8',
    views: 2130,
    likes: 176
  },
  {
    id: '9',
    title: 'Building APIs with Next.js Route Handlers',
    excerpt: 'Create powerful APIs using Next.js 14 Route Handlers. Learn about request handling, middleware, and best practices.',
    content: 'Full content of the blog post...',
    author: 'Tom Harris',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tom',
    publishDate: '2024-09-01',
    readTime: 7,
    tags: ['API', 'Next.js', 'Backend'],
    category: 'Tutorial',
    coverImage: 'https://picsum.photos/800/400?random=9',
    views: 3450,
    likes: 267
  },
  {
    id: '10',
    title: 'CSS Grid vs Flexbox: When to Use Each',
    excerpt: 'Understand the differences between CSS Grid and Flexbox, and learn when to use each layout method effectively.',
    content: 'Full content of the blog post...',
    author: 'Rachel Green',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rachel',
    publishDate: '2024-08-28',
    readTime: 8,
    tags: ['CSS', 'Grid', 'Flexbox', 'Layout'],
    category: 'Comparison',
    coverImage: 'https://picsum.photos/800/400?random=10',
    views: 1890,
    likes: 134
  }
];

export const getPostById = (id: string): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};

export const getPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter(post => post.category === category);
};

export const getPostsByTag = (tag: string): BlogPost[] => {
  return blogPosts.filter(post => post.tags.includes(tag));
};

export const getRelatedPosts = (postId: string, limit: number = 3): BlogPost[] => {
  const currentPost = getPostById(postId);
  if (!currentPost) return [];

  return blogPosts
    .filter(post =>
      post.id !== postId &&
      (post.category === currentPost.category ||
       post.tags.some(tag => currentPost.tags.includes(tag)))
    )
    .slice(0, limit);
};