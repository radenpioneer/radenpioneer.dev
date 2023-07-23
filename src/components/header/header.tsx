import { type FC, useRef, useEffect } from 'react'
import type { GetImageResult } from 'astro'
import type { CollectionEntry } from 'astro:content'
import MenuIcon from '~icons/material-symbols/menu'
import { gsap } from 'gsap'
import { useStore } from '@nanostores/react'
import { $isMenuOpen, $isScrollingDown } from './header.store'
import style from './header.module.scss'

const HeaderRC: FC<{
  image: GetImageResult
  site: CollectionEntry<'site'>
}> = ({ image, site }) => {
  const isScrollingDown = useStore($isScrollingDown)
  const nav = useRef(null)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const updateScroll = () => {
      const scrollY = window.scrollY
      const isDown = scrollY > lastScrollY
      if (
        isDown !== isScrollingDown &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        $isScrollingDown.set(isDown)
      }

      lastScrollY = scrollY > 0 ? scrollY : 0
    }

    window.addEventListener('scroll', updateScroll)
    return () => window.removeEventListener('scroll', updateScroll)
  }, [isScrollingDown])

  useEffect(() => {
    $isScrollingDown.subscribe((value) => {
      if (value) {
        gsap.to(nav.current, {
          y: -100,
          duration: 0.1,
        })
      } else {
        gsap.fromTo(
          nav.current,
          {
            y: -100,
          },
          {
            y: 0,
            duration: 0.1,
          }
        )
      }
    })
  }, [])

  return (
    <nav ref={nav} className={style._nav}>
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
  const dialog = useRef(null)
  const tl = useRef<GSAPTimeline>()

  useEffect(() => {
    let ctx = gsap.context(() => {
      $isMenuOpen.subscribe((value) => {
        if (value) {
          tl.current = gsap
            .timeline({ delay: 0.05 })
            .fromTo(
              '._dialog',
              {
                y: '-250vw',
                opacity: 0,
              },
              {
                y: '0',
                opacity: 100,
                duration: 0.25,
              }
            )
            .from(
              '._itemsanim',
              {
                x: 50,
                opacity: 0,
                duration: 0.25,
                stagger: 0.1,
                ease: 'power1.out',
              },
              '-=0.1'
            )
        } else {
          gsap.fromTo(
            '._dialog',
            {
              y: '0',
              opacity: 100,
            },
            {
              y: '-250vw',
              opacity: 0,
              duration: 0.25,
            }
          )
        }
      })
    }, dialog)
    return ctx.revert()
  }, [])

  return (
    <div ref={dialog}>
      <dialog
        className="_dialog"
        open={isMenuOpen}
        onClick={() => $isMenuOpen.set(!isMenuOpen)}
      >
        <article>
          <ul>
            {mainMenu!.menu.map((item, i) => (
              <li className={`${style._menuitems_mobile} _itemsanim`} key={i}>
                <a href={item.path}>{item.name}</a>
              </li>
            ))}
          </ul>
        </article>
      </dialog>
    </div>
  )
}
