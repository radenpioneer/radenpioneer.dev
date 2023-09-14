import type { APIRoute } from 'astro'

export const GET: APIRoute = () =>
  new Response(`
    User-agent: *
    Disallow: 
    Disallow: /keystatic/
    Sitemap: ${import.meta.env.SITE}/sitemap-index.xml
`)

export const prerender = true
