import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import lotto from '/src/assets/lotto.webp'

const LottoMachine = () => {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.count)

  const increment = () => {
    if (count >= 10) return
    dispatch({ type: 'INCREMENT' })
  }

  const decrement = () => {
    if (count <= 0) return
    dispatch({ type: 'DECREMENT' })
  }

  const generateLottoNumbers = () => {
    const numbers = new Set()

    while (numbers.size < count) {
      const tempSet = new Set()
      while (tempSet.size < 7) {
        const randomNum = Math.floor(Math.random() * 45) + 1
        tempSet.add(randomNum)
      }

      const lottoArray = [...tempSet]
      const bonusNumber = lottoArray.pop()
      lottoArray.sort((a, b) => a - b)
      numbers.add(JSON.stringify({ numbers: lottoArray, bonus: bonusNumber }))
    }

    const LottoNumbers = Array.from(numbers).map(JSON.parse)
    /*
      [
        {
          bonus: 2,
          numbers: [1, 4, 13, 22, 31, 45]
        },
        {
          bonus: 31,
          numbers: [7, 25, 30, 34, 38, 42]
        }
      ]

    */

    dispatch({ type: 'LOTTO', payload: LottoNumbers })
  }

  return (
    <div className='flex flex-col items-center w-[350px] sm:w-[450px] max-w-[1280px] bg-pink-200 rounded-lg shadow-lg p-4'>
      <img
        src={lotto}
        alt='lotto machine'
        className='mb-4 rounded-lg shadow-md'
      />

      <div className='flex items-center justify-between w-full mb-4'>
        <button
          onClick={() => decrement()}
          className='bg-red-400 text-white font-bold py-2 px-4 rounded-full hover:bg-red-500 transition duration-200 shadow-md'
        >
          -
        </button>

        <span className='text-3xl font-extrabold text-purple-600'>
          {count}회
        </span>

        <button
          onClick={() => increment()}
          className='bg-green-400 text-white font-bold py-2 px-4 rounded-full hover:bg-green-500 transition duration-200 shadow-md'
        >
          +
        </button>
      </div>

      <button
        onClick={() => generateLottoNumbers()}
        className='w-full mt-6 bg-yellow-400 text-white font-bold py-2 px-6 rounded-full hover:bg-yellow-500 transition duration-200 shadow-md'
      >
        예측하기
      </button>
    </div>
  )
}

export default LottoMachine
