import type { FC } from 'react'
import type { GetImageResult } from 'astro'
import type { CollectionEntry } from 'astro:content'
import typestyle from '~/styles/fonts.module.scss'

export const Header: FC<{
  site: CollectionEntry<'site'>
  profileImage: GetImageResult
}> = ({ site, profileImage }) => {
  return (
    <nav className="flex flex-col items-center py-8 gap-4">
      <div className="flex flex-col items-center gap-1">
        <a href="/">
          <img
            src={profileImage.src}
            {...profileImage.attributes}
            className="w-[50px] h-[50px] object-cover rounded-full shadow-md"
            alt={site.data.title}
            loading="eager"
          />
        </a>
        <a
          className={`${typestyle.__heading} font-extrabold text-xl text-center`}
          href="/"
        >
          {site.data.title}
        </a>
        <span className="italic text-center">{site.data.description}</span>
      </div>
    </nav>
  )
}
