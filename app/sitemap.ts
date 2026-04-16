import { MetadataRoute } from 'next'
import { BLOG_POSTS } from '@/data/blog-posts'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://lcguns.com'
  
  // Static routes discovered via app directory
  const staticRoutes = [
    '',
    '/team',
    '/blog',
    '/careers',
    '/church-safety-team',
    '/conceal-weapon-permit',
    '/contact',
    '/faq',
    '/firearm-transfers',
    '/shooting-range-hilton-head-sc',
    '/gun-rentals',
    '/idpa',
    '/intro-to-competition-shooting',
    '/memberships',
    '/pistol-courses',
    '/privacy-policy',
    '/private-firearm-instruction',
    '/private-partys',
    '/pro-shop',
    '/purchase-a-firearm',
    '/shooting-range-beaufort-sc',
    '/shooting-range-savannah-ga',
    '/shooting-range-hardeeville-sc-defensive-carbine',
    '/shop',
    '/tactical-lighting-training',
    '/the-range',
    '/training',
    '/use-of-force',
    '/waiver',
    '/womans-basic-beginner-class',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Dynamic blog routes
  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...blogRoutes]
}
