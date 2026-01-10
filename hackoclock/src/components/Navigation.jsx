import React from 'react'

function Navigation() {
    return (
        <div>
            <ul className='fixed w-full h-[8vh] py-4 flex justify-center items-center gap-12 font-nunito font-semibold'>
                <a className='text-gray-400 hover:text-gray-100 hover:scale(105) transition-all duration-300 text-paragraph' href="#">Home</a>
                <a className='text-gray-400 hover:text-gray-100 hover:scale(105) transition-all duration-300 text-paragraph' href="#">About</a>
                <a className='text-gray-400 hover:text-gray-100 hover:scale(105) transition-all duration-300 text-paragraph' href="#">Features</a>
                <a className='text-gray-400 hover:text-gray-100 hover:scale(105) transition-all duration-300 text-paragraph' href="#">Signup</a>
            </ul>
        </div>
    )
}

export default Navigation
