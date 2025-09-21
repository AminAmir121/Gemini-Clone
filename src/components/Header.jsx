import React from 'react'

const Header = () => {
  return (
    <div className='head'>

        <div className="logo">
            <img src="./gem logo.png" alt="" />
        </div>

        <div className="btn">
            <button id='sig' >Sign In</button>
            <button id='log' >Login</button>
        </div>

    </div>
  )
}

export default Header