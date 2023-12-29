import {createBrowserRouter} from "react-router-dom";
import {RoutePaths} from "./route-paths.ts";
import {BoardPage} from "../pages/board/page.tsx";

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
    path: RoutePaths.auth
  }
])