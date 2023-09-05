import type { FC } from 'react'
import typestyle from '~/styles/fonts.module.scss'

export const Works: FC<{ works: any[] }> = ({ works }) => {
  return (
    <section className="flex flex-col gap-4">
      <h2 className={`${typestyle.__heading} font-bold text-xl md:text-2xl`}>
        Past Works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {works.map((work, i) => (
          <div className="flex flex-col gap-2" key={i}>
            <a href="#">
              <img
                src={work.image.src}
                {...work.image.attributes}
                className="aspect-[1280/720] object-cover shadow-md"
                alt={work.title}
              />
            </a>
            <div className="flex justify-between">
              <a className="font-bold text-lg md:text-xl" href="#">
                {work.title}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
