import { useState } from 'react'
import './App.css'
import LottoMachine from './component/LottoMachine'
import LottoAnalyze from './component/LottoAnalyze'

function App() {
  return (
    <div className='w-full h-full flex flex-col justify-center bg-neutral-50 min-h-screen'>
      <div className='flex flex-col justify-center items-center p-4'>
        <LottoMachine />
        <LottoAnalyze />
      </div>
    </div>
  )
}

export default App
