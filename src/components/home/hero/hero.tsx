import type { FC } from 'react'
import type { CollectionEntry } from 'astro:content'
import style from './hero.module.scss'

const HeroRC: FC<{ site: CollectionEntry<'site'> }> = ({ site }) => {
  return (
    <article className={style._hero}>
      <h1 className={style._title}>{site.data.subtitle}</h1>
    </article>
  )
}

export default HeroRC
