import { Task } from '../task/Task.tsx'
import s from './list.module.css'

export const List = () => {
  return (
    <div className={s.list}>
      <div className={s.listHeader}>
        <p className={s.title}>Heading Title</p>
      </div>
      <div className={s.listContent}>
        <Task />
      </div>
    </div>
  )
}
