import { List } from '../list/List.tsx'
import s from './board.module.css'

export const Board = () => {
  return (
    <div className={s.board}>
      <div className={s.listRoll}>
        <List />
        <List />
      </div>
    </div>
  )
}
