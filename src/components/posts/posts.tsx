import { type FC } from 'react'
import type { CollectionEntry } from 'astro:content'
import { marked } from 'marked'
import parse from 'html-react-parser'
import typestyle from '~/styles/fonts.module.scss'

export const Posts: FC<{ posts: CollectionEntry<'posts'>[] }> = ({ posts }) => {
  return (
    <section className="flex flex-col gap-8 my-16">
      {posts
        .sort(
          (a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime()
        )
        .slice(0, 8)
        .map((post, i) => {
          const path =
            '/posts/' +
            [
              post.data.publishDate.getFullYear(),
              post.data.publishDate.getMonth() + 1,
              post.slug,
            ].join('/')
            
          return (
            <article className="flex flex-col gap-4" key={i}>
              <h2
                className={`${typestyle.__heading} font-extrabold text-2xl md:text-4xl`}
              >
                <a href={path}>{post.data.title}</a>
              </h2>
              <>
                {parse(
                  marked.parse(
                    post.body.match(
                      /^(?!#|!|(?:<[^>]*>|&lt;[^&]*&gt;).*$|\s*$).*/m
                    )?.[0] as string
                  )
                )}
              </>
              <a href={path}>
                <span className="italic hover:underline">Read more</span>
              </a>
            </article>
          )
        })}
    </section>
  )
}
