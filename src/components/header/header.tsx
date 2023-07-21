import type { FC } from 'react'
import type { GetImageResult } from 'astro'
import type { CollectionEntry } from 'astro:content'
import style from './header.module.scss'

const HeaderRC: FC<{
  image: GetImageResult
  site: CollectionEntry<'site'>
}> = ({ image, site }) => {
  return (
    <nav className={style._nav}>
      <HeaderProfile image={image} site={site} />
      <HeaderMenu site={site} />
    </nav>
  )
}

export default HeaderRC

const HeaderProfile: FC<{
  image: GetImageResult
  site: CollectionEntry<'site'>
}> = ({ image, site }) => {
  return (
    <ul>
      <li>
        <a href="/">
          <img
            src={image.src}
            width={image.options.width}
            height={image.options.height}
            alt={site.data.title}
            loading="eager"
            decoding="async"
            className={style._image}
          />
        </a>
      </li>
    </ul>
  )
}

const HeaderMenu: FC<{ site: CollectionEntry<'site'> }> = ({ site }) => {
  return (
    <ul>
      {site.data.navigation
        .find((n) => n.id === 'main')
        ?.menu.map((item, i) => (
          <li key={i}>
            <a href={item.path}>{item.name}</a>
          </li>
        ))}
    </ul>
  )
}
