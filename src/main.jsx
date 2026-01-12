import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import './style/style.css'
import App from './App.jsx'

// Import other components for routing as needed
import Home from './routes/Home.jsx'
import Contacts from './routes/Contacts.jsx'
import Blog from './routes/Blog.jsx'
import About from './routes/About.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'blog',
        element: <Blog />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contacts",
        element: <Contacts />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
