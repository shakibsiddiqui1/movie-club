import { lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
const Favourite = lazy(()=>import('./components/Favourite.jsx'))

const router = createBrowserRouter([
  {
    path :'/',
    element : <App/>,
    children : [
      {
        path :'',
        element : <Home/>,
      },
      {
        path :'favourite',
        element : <Suspense fallback={<h1>Loading............</h1>}><Favourite/></Suspense>,
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
