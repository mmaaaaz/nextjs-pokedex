import type { MetadataRoute } from 'next'

// Static sitemap generation - builds at compile time, no functions
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const totalPokemon = 905 // Hardcoded total for static generation
  
  // Homepage
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
  ]
  
  // Add all Pokemon detail pages
  // Only include first 150 in sitemap to keep it manageable
  // Others will still be crawlable via links
  for (let i = 1; i <= Math.min(150, totalPokemon); i++) {
    routes.push({
      url: `${baseUrl}/pokemon/${i}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    })
  }
  
  return routes
}
