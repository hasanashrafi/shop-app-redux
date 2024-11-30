import React from 'react'
import { Bars } from 'react-loader-spinner'

function Loader() {
    return (
        <div className='flex w-full items-center min-h-screen justify-center'>
            <Bars
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    )
}

export default Loader