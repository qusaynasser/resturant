import React from 'react'
import { Link } from 'react-router-dom'
export default function Resturant() {

    
  return (
    <>
    <div>
        <Link to='/Pizza'>Pizza</Link>
    </div>

    <div className='my-3'>
        <Link to={'/Salad'}>Salad</Link>
    </div>

    <div>
        <Link to={'/Onion'}>Onion</Link>
    </div>
    </>
  )
}
