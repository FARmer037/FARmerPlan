import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLink = () => {
    return (
        <ul className='right'>
            <li><NavLink to='/'>New Project</NavLink></li>
            <li><NavLink to='/'>Logout</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'>FM</NavLink></li>
        </ul>
    )
}

export default SignedInLink