import React from 'react'
import "./CoinItems.css"

function CoinItems(props) {
  return (
    <>
    <div className="coin-row">
      <p id="num2">{props.coins.market_cap_rank} .</p>
      <div className="coin-name">
      <p>{props.coins.name}</p>
      </div>
      <div className="img-symbol">
        <img src={props.coins.image} alt={props.coins.name} />
        <p id='symbol'>{props.coins.symbol.toUpperCase()}</p>
        
      </div>
      <p>${props.coins.current_price.toLocaleString()}</p>
      <p>%{props.coins.price_change_percentage_24h.toFixed(2)}</p>
    </div>
    </>
    )
}

export default CoinItems