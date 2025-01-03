import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

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