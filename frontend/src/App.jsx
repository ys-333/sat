import { createBrowserRouter } from 'react-router-dom'

import Home from './pages/Home'
import InsertData from './pages/InsertData'
import DeleteData from './pages/DeleteData'
import GetRank from './pages/GetRank'
import ViewData from './pages/ViewData'
import Update from './pages/Update'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: 'insert_data',
        element: <InsertData />,
      },
      {
        path: 'delete_user',
        element: <DeleteData />,
      },
      {
        path: 'get_rank',
        element: <GetRank />,
      },
      {
        path: 'get_data',
        element: <ViewData />,
      },
      {
        path: 'update_data',
        element: <Update />,
      },
    ],
  },
])

export default router
