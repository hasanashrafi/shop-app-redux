import React from 'react'
import NavBar from './NavBar'

function Layout({ children }) {
    return (
        <div className=''>

            <NavBar />

            {children}

            <footer className='border-t-2 border-secondary text-primary flex items-center justify-center p-2  bg-green-700/70'>
                <p className=''>Developed By HsN ❤</p>
            </footer>
        </div>
    )
}

export default Layout