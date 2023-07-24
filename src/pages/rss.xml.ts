import type { APIContext } from 'astro'
import rss from '@astrojs/rss'
import { getCollection, getEntry } from 'astro:content'

export const get = async (context: APIContext) => {
  const { data: site } = await getEntry('site', 'site')
  const posts = await getCollection('blog', ({ data }) => !data.draft)
  return rss({
    // `<title>` field in output xml
    title: `${site.title} \u2014 ${site.subtitle}`,
    // `<description>` field in output xml
    description: site.description,
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: context.site!.href,
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    stylesheet: '/rss.xsl',
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description:
        post.data.subtitle ||
        post.body.match(/^(?!#|!|(?:<[^>]*>|&lt;[^&]*&gt;).*$|\s*$).*/m)?.[0],
      link: `/blog/${post.data.date.getFullYear()}/${post.slug}`,
    })),
  })
}
