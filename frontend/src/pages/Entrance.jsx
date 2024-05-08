import React from 'react'
import Login from './Login'
import Signup from './Signup'

const Entrance = () => {
  return (
    <div className="mainContainer">
        <div className="left">
            <h1>Underwater Kingdoms</h1>
            <h1>Delving into the Enchanting Realms of ocean.</h1>
        </div>
        <div className="right">
            <Login/>
            <Signup/>
        </div>
    </div>
  )
}

export default Entrance
