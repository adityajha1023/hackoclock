import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from './components/Navigation'
import Lenis from "@studio-freight/lenis"
import { useEffect } from 'react'

function Layout() {
    useEffect(() => {
        const lenis = new Lenis({
          duration: 1.2,
          easing: (t) => 1 - Math.pow(1 - t, 3), // easeOutCubic
          smoothWheel: true,
          smoothTouch: false,
        })
    
        function raf(time) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
    
        requestAnimationFrame(raf)
    
        return () => {
          lenis.destroy()
        }
      }, []);
    return (
        <div>
            <Navigation />
            <Outlet />
        </div>
    )
}

export default Layout
