import React from 'react'

function Login() {
  return (
    <div className='form-container'>
        <div className="form-wrapper">
            <span className='title'>The Alpha Chat</span>
            <span className='heading'>Login</span>
            <form>
                <input required type="email" placeholder="example@gmail.com"/>
                <input requied type="password" placeholder="password"/>
                <button>Sign Up</button>
            </form>
            <p>Don't have an a account Sign up?</p>
        </div>

    </div>
  )
}

export default Login