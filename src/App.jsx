import { useState } from 'react'
import './App.css'
import LottoMachine from './component/LottoMachine'
import LottoAnalyze from './component/LottoAnalyze'

function App() {
  return (
    <div className='w-full h-screen flex flex-col justify-center'>
      <LottoMachine />
      {/* <LottoAnalyze /> */}
    </div>
  )
}

export default App
