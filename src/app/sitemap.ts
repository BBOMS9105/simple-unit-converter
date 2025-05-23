import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://simple-unit-converter.vercel.app'
  
  const categories = [
    'length',
    'weight', 
    'volume',
    'temperature',
    'time',
    'data',
    'speed',
    'area',
    'pressure',
    'energy'
  ]

  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...categories.map((category) => ({
      url: `${baseUrl}/${category}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]

  return routes
} 