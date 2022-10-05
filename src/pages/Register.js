import React from 'react'
import Img from '../images/register.png'

const Register = () => {
  return (
    <div className='form-container'>
        <div className="form-wrapper">
            <span className='title'>The Alpha Chat</span>
            <span className='heading'>Register</span>
            <form>
                <input required type="text" placeholder="Username" />
                <input required type="email" placeholder="example@gmail.com"/>
                <input requied type="password" placeholder="password"/>
                <label htmlFor="file">
                <img src={Img} alt="" />
                <span>Add Profile Picture</span>
                </label>
                <button>Sign Up</button>
            </form>
            <p>Already have an a account Log in?</p>
        </div>

    </div>
  )
}

export default Register