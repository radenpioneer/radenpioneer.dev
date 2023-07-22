import type { FC } from 'react'
import type { CollectionEntry } from 'astro:content'
import { MazeWide } from '~/components/maze'
import style from './hero.module.scss'

const HeroRC: FC<{ site: CollectionEntry<'site'> }> = ({ site }) => {
  return (
    <article className={style._hero}>
      <h1 className={style._title}>{site.data.subtitle}</h1>
      <div className={style._maze}>
        <div className={style._wrapper}>
          <MazeWide />
        </div>
      </div>
    </article>
  )
}

export default HeroRC
