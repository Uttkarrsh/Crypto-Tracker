import React, { useEffect, useState } from 'react'
import Coin from './components/Coin'
import axios from 'axios';
import Navbar from './components/Navbar';
import {Route,Routes} from 'react-router-dom'
import CoinInfo from './routes/CoinInfo.jsx'

function App() {
  
  const[coins,setCoins]=useState([]);
  useEffect(()=>{

    async function fetchData(){
      const response=await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false');
      setCoins(response.data);
    }
    fetchData();

  },[])
  console.log(coins);

  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={ <Coin coins={coins}/>} />
      <Route path='/coin' element={ <CoinInfo />}>
          <Route path=':coinId' element={<CoinInfo />} />
      </Route>
    </Routes>
    
   
    </>
  )
}

export default App
