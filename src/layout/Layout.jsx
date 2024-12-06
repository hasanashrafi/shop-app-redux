import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { useCard } from '../context/CardContext'

function Layout({ children }) {
    

    return (
        <div className=''>
            <NavBar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout