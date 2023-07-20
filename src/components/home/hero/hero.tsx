import type { FC } from 'react'
import style from './hero.module.scss'

const text = ['modern', 'web', 'magician.']

const HeroRC: FC = () => {
  return (
    <div className={style._hero}>
      {text.map((t, i) => (
        <span className={style._title} key={i}>
          {t}
        </span>
      ))}
    </div>
  )
}

export default HeroRC
