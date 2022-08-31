import React from 'react'
import {GiTwoCoins} from 'react-icons/gi'
import './Navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <Link to='/ '>
    <>
    <div className="box">
        <div className="sym">
        <GiTwoCoins className='icon' />
        </div>
        <div className="header">
            <h1>Crypto Tracker</h1>
        </div>
    </div>
    </>
    </Link>
  )
}

export default Navbar