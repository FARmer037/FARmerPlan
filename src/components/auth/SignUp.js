import React, { useState } from 'react'

const SignUp = () => {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        console.log(email)
        console.log(password)
        console.log(firstname)
        console.log(lastname)
    }

    return (
        <div className='container'>
            <form className='white' onSubmit={handleSubmit}>
                <h5 className='grey-text text-darken-3'>Sign Up</h5>
                <div className='input-field'>
                    <label htmlFor='firstname'>First Name</label>
                    <input type='text' id='firstname' onChange={e => setFirstname(e.target.value)} />
                </div>
                <div className='input-field'>
                    <label htmlFor='lastname'>Last Name</label>
                    <input type='text' id='lastname' onChange={e => setLastname(e.target.value)} />
                </div>
                <div className='input-field'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' onChange={e => setEmail(e.target.value)} />
                </div>
                <div className='input-field'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' onChange={e => setPassword(e.target.value)} />
                </div>
                <div className='input-field'>
                    <button className='btn pink lighten-1 z-depth-0'>Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default SignUp
