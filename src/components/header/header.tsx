import type { FC } from 'react'
import type { GetImageResult } from 'astro'
import type { CollectionEntry } from 'astro:content'
import MenuIcon from '~icons/material-symbols/menu'
import { useStore } from '@nanostores/react'
import { $isMenuOpen } from './header.store'
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
  const mainMenu = site.data.navigation.find((n) => n.id === 'main')
  const isMenuOpen = useStore($isMenuOpen)

  return (
    <ul>
      {mainMenu!.menu.map((item, i) => (
        <li className={style._menuitems} key={i}>
          <a href={item.path}>{item.name}</a>
        </li>
      ))}
      <li className={style._btn}>
        <div
          onClick={() => $isMenuOpen.set(!isMenuOpen)}
          className="outline"
          role="button"
        >
          <MenuIcon />
        </div>
      </li>
    </ul>
  )
}

export const HeaderMenuMobileDialog: FC<{ site: CollectionEntry<'site'> }> = ({
  site,
}) => {
  const mainMenu = site.data.navigation.find((n) => n.id === 'main')
  const isMenuOpen = useStore($isMenuOpen)

  return (
    <dialog open={isMenuOpen}>
      <article>
        <ul>
          {mainMenu!.menu.map((item, i) => (
            <li className={style._menuitems_mobile} key={i}>
              <a href={item.path}>{item.name}</a>
            </li>
          ))}
        </ul>
      </article>
    </dialog>
  )
}
