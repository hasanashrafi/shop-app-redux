import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { useCard } from '../context/CardContext'

function Layout({ children }) {
    
    const [state] = useCard()
    console.log(state)

    return (
        <div className=''>
            <NavBar state={state} />
            {children}
            <Footer />
        </div>
    )
}

export default Layout