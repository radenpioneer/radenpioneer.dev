// @ts-nocheck
import type { FC } from 'react'
import type { Works } from './works.astro'
import typestyle from '~/styles/fonts.module.scss'

export const WorksList: FC<{ works: Works }> = ({ works }) => {
  return (
    <section className="flex flex-col gap-4 my-16">
      <h2 className={`${typestyle.__heading} font-bold text-xl md:text-2xl`}>
        Past Works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {works.map((work, i) => (
          <div className="flex flex-col gap-2" key={i}>
            <a href={`/work/${work.slug}`}>
              <img
                src={work.image!.src}
                className="aspect-[1280/720] object-cover rounded shadow-md"
                alt={work.title}
              />
            </a>
            <div className="flex justify-between">
              <a
                className={`${typestyle.__heading} font-bold text-lg md:text-xl`}
                href="#"
              >
                {work.title}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
