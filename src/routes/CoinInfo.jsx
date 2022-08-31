import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import './CoinInfo.css'
import Moment from 'moment';


function CoinInfo() {

    function truncate(string,n){
        return string?.length>n ? string.substr(0,n-1) + '...' : string;
    }
  const formatDate = Moment().format("MMM Do YY");


    const params=useParams()
    const[coin,setCoin]=useState({});

    useEffect(()=>{

        async function fetchData(){
            
            
            const response=await axios.get(`https://api.coingecko.com/api/v3/coins/${params.coinId}`)
            setCoin(response.data);
        }
        fetchData();

    },[])
    console.log(coin)

  return (
    <>
    <div className="container1">
    <h1 className='name'>{coin.name}</h1>
    <span>{coin.symbol ?<p>{coin.symbol.toUpperCase()}</p>:null}</span>
    <h2>Rank : {coin.market_cap_rank}</h2>
    <h3>{formatDate}</h3>

    <div className="img-price">
    {coin.image ?<img src={coin.image.small} alt={coin.name} />:null} 
    
    {coin.market_data?.current_price ? <h1>${coin.market_data.current_price.usd.toLocaleString()}</h1> : null}
    </div>
    <div className="low-high">
        <div className="low">
            <h3>24 Hour Low</h3>
            {coin.market_data?.low_24h ? <p>${coin.market_data.low_24h.usd.toLocaleString()}</p> : null}
        </div>
        <div className="low">
            <h3>24 Hour High</h3>
            {coin.market_data?.high_24h ? <p>${coin.market_data.high_24h.usd.toLocaleString()}</p> : null}
        </div>
        <div className="low">
            <h3>Market Cap</h3>
            {coin.market_data?.market_cap ? <p>${coin.market_data.market_cap.usd.toLocaleString()}</p> : null}
        </div>
        <div className="low">
            <h3>Circulating Supply</h3>
            {coin.market_data ? <p>{coin.market_data.circulating_supply.toLocaleString()}</p> : null}
        </div>
    </div>
    
    <h2>Price Change</h2>
    <div className="price-change">
        <div className="change">
    <h3>In 24 hours</h3>
    {coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(2)}%</p> : null}
    </div>
        <div className="change">
    <h3>In 7 days</h3>
    {coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(2)}%</p> : null}
    </div>
        <div className="change">
    <h3>In 1 month</h3>
    {coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(2)}%</p> : null}
    </div>
    </div>

    <div className="about">
        <h2>About</h2>
        <p>{truncate(coin.description?coin.description.en:"",935)}</p>
    </div>

    </div>
    
    </>
  )
}

export default CoinInfo