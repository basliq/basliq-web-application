import { Board } from './components/board/Board.tsx'
import { Header } from './components/navbar/Navbar.tsx'
import s from './page.module.css'

export const BoardPage = () => {
  return (
    <div className={s.pageGrid}>
      <Header />
      <Board />
    </div>
  )
}
