import React from 'react'
import { useSelector } from 'react-redux'

const LottoAnalyze = () => {
  const lotto = useSelector((state) => state.lotto)
  if (lotto.length <= 0) return

  const { numbers: lottoNumbers, bonus } = lotto

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-4'>LottoAnalyze</h1>
      <div className='mb-6'>
        <h2 className='text-xl font-semibold'>예측된 로또 번호:</h2>
        <div className='flex flex-col gap-4'>
          {lottoNumbers.map((lottoSet, index) => (
            <div key={index} className='flex items-center gap-2'>
              {lottoSet.numbers.map((number) => (
                <div
                  key={number}
                  className='w-10 h-10 flex items-center justify-center rounded-full bg-green-500 text-white font-bold'
                >
                  {number}
                </div>
              ))}
              <div className='ml-4 font-bold text-orange-500'>
                보너스: {lottoSet.bonus}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LottoAnalyze
