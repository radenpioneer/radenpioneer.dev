import type { FC, PropsWithChildren } from 'react'
import typestyle from '~/styles/fonts.module.scss'
import type { SiteSettings } from '~/data/site'

export const Header: FC<
  PropsWithChildren<{
    site: SiteSettings['publication']
  }>
> = ({ site, children }) => {
  return (
    <nav className="flex flex-col items-center py-8 gap-4">
      <div className="flex flex-col items-center gap-1">
        <a href="/">{children}</a>
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
