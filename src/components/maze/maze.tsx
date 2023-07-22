import type { FC } from 'react'
import { ReactComponent as MazeSquareSVG } from './square.svg'
import { ReactComponent as MazeTallSVG } from './tall.svg'
import { ReactComponent as MazeWideSVG } from './wide.svg'

export const MazeSquare: FC = () => {
  return <MazeSquareSVG />
}

export const MazeTall: FC = () => {
  return <MazeTallSVG />
}

export const MazeWide: FC = () => {
  return <MazeWideSVG />
}
