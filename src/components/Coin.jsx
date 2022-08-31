import React from 'react'
import CoinItems from './CoinItems'
import './Coin.css'
import CoinInfo from '../routes/CoinInfo'
import {Link} from 'react-router-dom'

function Coin(props) {
  return (
    <div className="container">
      <div className="heading">
        <p id='num' >#</p>
        <p>Name</p>
        <p>Coins</p>
        <p>Price</p>
        <p>In 24 Hours</p>
      </div>
      {props.coins.map(coins=>{
      return (
        <Link to={`/coin/${coins.id}`} element={<CoinInfo />}  key={coins.id}>
            <CoinItems coins={coins} />
        </Link>
        
      )
     })} 
    </div>
  )
}

export default Coin