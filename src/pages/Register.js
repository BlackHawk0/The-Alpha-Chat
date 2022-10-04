import React from 'react'

const Register = () => {
  return (
    <div className='form-container'>
        <div className="form-wrapper">
            <span className='title'>The Alpha Chat</span>
            <span className='heading'>Register</span>
            <div>
                <form>
                    <input required type="text" placeholder="Username" />
                    <input required type="email" placeholder="exapmle@gmail.com"/>
                    <input requied type="password" placeholder="password"/>
                    <button>Sign Up</button>
                </form>
                <p>Already have an a account Log in?</p>
            </div>
        </div>

    </div>
  )
}

export default Register