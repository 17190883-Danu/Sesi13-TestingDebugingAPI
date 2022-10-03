import React from 'react'
import { useNavigate } from 'react-router-dom'

function HomePages() {
  const navigate = useNavigate()

  const navigateToComments = () => {
    navigate('/comments', { replace: true })
  }

  return (
    <>
      <div className='layout my-12'>
        <div className='mx-auto w-8/12'>
          <div className='rounded-md bg-gray-100/60 p-8'>
            <h2 className='text-3xl font-bold text-gray-900'>
              Why do we need Test ?
            </h2>

            <p className='mt-4 text-lg font-normal text-gray-900'>
              To guarantee our code quality. And to show the people that we also
              care about it and wish to give something that already proven, at
              least by yourself.
            </p>

            <button
              role='button'
              className='mt-8 h-12 w-28 rounded-md bg-blue-600 text-lg font-semibold text-white hover:bg-blue-700'
              onClick={navigateToComments}
            >
              Comments List
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePages