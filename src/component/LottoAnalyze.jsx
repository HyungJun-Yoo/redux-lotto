import React from 'react'
import { useSelector } from 'react-redux'

const bgColor = (num) => {
  if (num < 10) {
    return 'bg-yellow-500'
  } else if (num < 20) {
    return 'bg-blue-500'
  } else if (num < 30) {
    return 'bg-red-500'
  } else if (num < 40) {
    return 'bg-gray-500'
  } else {
    return 'bg-green-500'
  }
}

const LottoAnalyze = () => {
  const lotto = useSelector((state) => state.lotto)
  if (lotto.length <= 0) return

  return (
    <div className='w-[350px] sm:w-[450px] bg-slate-200 mt-8 sm:p-4 rounded-lg'>
      <div className='flex flex-col justify-center items-center mb-6'>
        <div className='flex mt-2 sm:mt-0'>
          <div className='w-[250px] sm:w-[300px] flex justify-center text-xl font-semibold mb-8'>
            <p className='ml-2 text-gray-800'>당첨 번호</p>
          </div>
          <div className='text-lg font-semibold ml-4 min-w-[60px] text-gray-700'>
            <p className='ml-1'>보너스</p>
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          {lotto.map(({ numbers, bonus }, index) => (
            <div key={index} className='flex gap-2 sm:gap-2 '>
              <div className='w-[250px] sm:w-[300px] flex items-center gap-2'>
                {numbers.map((number) => {
                  return (
                    <div
                      key={number}
                      className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full ${bgColor(
                        number
                      )} text-white font-bold`}
                    >
                      {number}
                    </div>
                  )
                })}
              </div>
              <div className='ml-2'>
                <div
                  className={`rounded-full ${bgColor(
                    bonus
                  )} w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-white font-bold `}
                >
                  {bonus}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LottoAnalyze
