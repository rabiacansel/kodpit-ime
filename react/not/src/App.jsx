import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Yeni from './Yeni';
import Yeni7 from './Yeni7';

function App() {
  let isim = [
    "Ayşe",
    "fatma",
    "rabia"
  ];
  let sonuc = true;
  return(
    <div>
      {
        isim.map((isim,index) => (
          <div style={{
            backgroundColor : 'orange',
            border: '1px solid black'
          }} id='index'>{isim}</div>
        ))
      }
      {
        sonuc ? <p>olumlu</p> : <p>olumsuz</p>
      }
      <Yeni/>
      <Yeni7/>
    </div>
  )
}
export default App
