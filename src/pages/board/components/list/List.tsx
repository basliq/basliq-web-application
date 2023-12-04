import s from './list.module.css'

export const List = () => {
  return (
    <div className={s.list}>
      <div className={s.listHeader}>
        <p>Heading Title</p>
      </div>
      <div className={s.taskList}>
      </div>
    </div>
  )
}