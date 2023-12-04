import s from './board.module.css'
import {List} from "../list/List.tsx";

export const Board = () => {
  return <div className={s.board}>
    <div className={s.listRoll}>
      <List />
    </div>
  </div>
}