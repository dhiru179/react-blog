import React from 'react'

export default function Footer() {
 
  return (
    <footer className='d-flex flex-wrap justify-content-center align-items-center text-light border-top bg-dark py-2'>
        <p className='text-center m-0'>copyright &#169; {new Date().getFullYear()}</p>
    </footer>
  )
}
