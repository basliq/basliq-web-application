import {createBrowserRouter} from "react-router-dom";
import {Board} from "../pages/board/Board.tsx";
import {RoutePaths} from "./route-paths.ts";

export const router = createBrowserRouter([
  {
    path: RoutePaths.home,
    element: <Board />,
  },
  {
    path: RoutePaths.board,
    element: <Board />,
  }
])