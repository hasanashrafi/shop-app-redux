import React from 'react'

function MiddleItems() {
    return (
        <div className='w-fit grid grid-cols-2  justify-center items-center h-fit gap-4 mx-auto'>
            <img src='/images/site.jpg'  className='size-64 rounded-md hover:scale-110 transition-all ease-in-out '/>
            <img src='/images/bg.jpg'  className='size-64 rounded-md hover:scale-110 transition-all ease-in-out '/>
            <img src='/images/site-2.jpg'  className='size-64 rounded-md hover:scale-110 transition-all ease-in-out '/>
            <img src='/images/header.jpg'  className='size-64 rounded-md hover:scale-110 transition-all ease-in-out '/>
        </div>
    )
}

export default MiddleItems