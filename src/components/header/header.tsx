import type { GetImageResult } from 'astro'
import type { FC } from 'react'
import style from './header.module.scss'

const HeaderRC: FC<{ image: GetImageResult }> = ({ image }) => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">
            <img
              src={image.src}
              width={image.options.width}
              height={image.options.height}
              alt="profile"
              loading="eager"
              decoding="async"
              className={style._image}
            />
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default HeaderRC
