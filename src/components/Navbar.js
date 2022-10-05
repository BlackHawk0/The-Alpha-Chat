import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <span className='signatureName'>Alphachat</span>
        <div className='userDetails'>
            <img src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'alt="" />
            <span>Name</span>
            <button onClick={()=> alert("Yeety")} >logout</button> 
        </div>
    </div>
  )
}

export default Navbar