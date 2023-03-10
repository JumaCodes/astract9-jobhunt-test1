import React, { useState, useEffect, useCallback } from 'react'

import Header from './components/Header';
import './assets/css/App.scss'
import Hero from './components/Hero';
import Ngmap from './components/Ngmap';
import PieChart from './components/Charts';
import Footer from './components/Footer';
import Drawbars from './components/bars';
import TableData from './components/table';

import { formatStateTable } from './helpers/analyse-election-data'

function App() {
  const [stateData, setStateData] = useState([])

  const fetchData = useCallback(async () => {
    const response = await fetch('https://elect-her.herokuapp.com/api/v1/elections/candidate-total-votes?type=state_result')
    const data = await response.json()
    console.table(data)
    setStateData(data)
  }, [])


  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div className='app'>
      <Header />
      <Hero />
      <Drawbars />
      <Ngmap stateData={stateData} />
      <TableData data={formatStateTable(stateData)} />
      <PieChart />
      <Footer />
    </div>
  );
}

export default App;
