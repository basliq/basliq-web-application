import { createBrowserRouter } from 'react-router-dom'
import { BoardPage } from '../pages/board/page.tsx'
import { RoutePaths } from './route-paths.ts'

export const router = createBrowserRouter([
  {
    path: RoutePaths.home,
    element: <BoardPage />,
  },
  {
    path: RoutePaths.board,
    element: <BoardPage />,
  },
  {
    path: RoutePaths.auth,
  },
])
