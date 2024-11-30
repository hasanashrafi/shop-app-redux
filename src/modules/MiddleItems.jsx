import React from 'react'

function MiddleItems() {
    return (
        <marquee>
            <div className='mt-10 w-fit flex  justify-center items-center h-fit gap-4 mx-auto'>
                <img src='/images/site.jpg' className='size-64 rounded-md hover:scale-110 transition-all ease-in-out ' />
                <img src='/images/bg.jpg' className='size-64 rounded-md hover:scale-110 transition-all ease-in-out ' />
                <img src='/images/site-2.jpg' className='size-64 rounded-md hover:scale-110 transition-all ease-in-out ' />
                <img src='/images/header.jpg' className='size-64 rounded-md hover:scale-110 transition-all ease-in-out ' />
            </div>
        </marquee>
    )
}

export default MiddleItems