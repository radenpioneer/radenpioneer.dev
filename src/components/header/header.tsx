import type { FC } from 'react'
import type { GetImageResult } from 'astro'
import typestyle from '~/styles/fonts.module.scss'
import type { SiteSettings } from '~/data/site'

export const Header: FC<{
  site: SiteSettings['publication']
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
            alt={site.title}
            loading="eager"
          />
        </a>
        <a
          className={`${typestyle.__heading} font-extrabold text-xl text-center`}
          href="/"
        >
          {site.title}
        </a>
        <span className="italic text-center">{site.about?.text}</span>
      </div>
    </nav>
  )
}
