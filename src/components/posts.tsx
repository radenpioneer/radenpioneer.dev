// @ts-nocheck // temporary

import { type FC } from 'react'
import typestyle from '~/styles/fonts.module.scss'
import type { Posts } from '~/data/post'

export const PostsList: FC<{ posts: Posts }> = ({
  posts: {
    publication: { posts },
  },
}) => {
  return (
    <section className="flex flex-col gap-8 my-16">
      {posts.edges.map(({ node: post }, i) => {
        const url = `/blog/${post.slug}`
        return (
          <article className="flex flex-col gap-4" key={i}>
            <h2
              className={`${typestyle.__heading} font-extrabold text-2xl md:text-4xl`}
            >
              <a href={url}>{post.title}</a>
            </h2>
            <p>{post.brief}</p>
            <a href={url}>
              <span className="italic hover:underline">Read more</span>
            </a>
          </article>
        )
      })}
    </section>
  )
}
