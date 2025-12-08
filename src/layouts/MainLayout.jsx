import { Outlet } from 'react-router-dom'
import Header from '@/components/Header'
import ScrollToTop from '@/components/ScrollToTop'
import ScrollArrow from '@/components/ScrollArrow'
import ScrollProgress from '@/components/ScrollProgress'
  
import Footer from '@/components/Footer'
import { Scroll } from 'lucide-react'

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto">
        <Outlet />  {/* This renders the nested route */}
      </main>
      <ScrollArrow />
      <ScrollProgress />
      <ScrollToTop />
      <Footer />
    </div>
  )
}
