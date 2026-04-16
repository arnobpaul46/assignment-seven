import React from 'react'
import NotFoundImg from "../assets/Frame 2608629.png"
import { Link } from 'react-router-dom'
const NotFound = () => {
    return (
        <>
            <div className='flex flex-col justify-center items-center h-screen'>
                <img src={NotFoundImg} alt="Not Found This page" />
                <Link to="/home" className="btn btn-success mt-6 px-8">
                    Go Back Home
                </Link>
            </div>
        </>
    )
}

export default NotFound