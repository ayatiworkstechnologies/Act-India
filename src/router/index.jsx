import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from '@/layouts/MainLayout'
import About from '@/pages/About'
import Contact from '@/pages/Contact'
import Volvo from '@/pages/Volvo'
import Service from '../pages/Services'
import HomePage from '../pages/HomePages'
import Epiroc from '../pages/Epiroc'
import Sdlg from '../pages/Sdlg'
import Ammann from '../pages/Ammann'
import Husqvarna from '../pages/Husqvarna'
import SelfLoadingMixer from '../pages/SelfLoadingMixer'
import Infrastructure from '../pages/Infrastructure'
import SearchResults from '../pages/SearchResults'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />, // Layout includes Header and Footer
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <About /> },
      { path: 'volvo', element: <Volvo /> },
      { path: 'epiroc', element: <Epiroc /> },
       { path: 'sdlg', element: <Sdlg /> },
      { path: 'ammann', element: <Ammann /> },
      { path: 'husqvarna', element: <Husqvarna /> },
      { path: 'self-loading-mixer', element: <SelfLoadingMixer /> },
       { path: 'infrastructure', element: <Infrastructure /> },
      { path: 'services', element: <Service /> },
      { path: 'contact', element: <Contact /> },
      { path: "/search", element: <SearchResults /> },
    ],
  },
])

export default function AppRouter() {
  return <RouterProvider router={router} />
}