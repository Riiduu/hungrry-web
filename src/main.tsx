import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import store from "./store/store.ts"
import { Provider } from 'react-redux'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

// Page imports
import HomePage from './pages/HomePage.tsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Provider store={store}>
          <RouterProvider router={router} />
      </Provider>
  </StrictMode>,
)
