import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Menu from '@pages/Menu.tsx'
import Tutorial from '@pages/Tutorial.tsx'
import Game from '@pages/Game.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Menu />
      },
      {
        path: "/tutorial",
        element: <Tutorial/>
      },
      {
        path: "/game",
        element: <Game/>,
      }
    ]
  }
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
