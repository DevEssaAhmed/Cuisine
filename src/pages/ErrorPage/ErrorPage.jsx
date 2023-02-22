import React from 'react'
import { useRouteError } from 'react-router-dom'
import "./ErrorPage.scss"

const ErrorPage = () => {
    // const err = useRouteError();
  return (

    <div className='error-page'>
        <h1>OOPS! Error Not Found</h1>
        <button className='error-btn'>Go back to Home</button>
        </div>
  )
}

export default ErrorPage