import s from './task.module.css'

export const Task = () => {
  return (
    <div className={s.task}>
      <p className={s.description}>
        A longer description sentence might accompany the title. This description might span over 2 or 3 lines.
      </p>
    </div>
  )
}
