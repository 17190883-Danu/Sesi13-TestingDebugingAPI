import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const API = 'https://jsonplaceholder.typicode.com/comments'

function CommentsPages() {
  const navigate = useNavigate()
  const [data, setData] = useState([])

  const fetchComments = async () => {
    try {
      const res = await axios.get(API)
      setData(res.data)
    } catch (err) {}
  }

  useEffect(() => {
    fetchComments()
  }, [])

  const navigateToBack = () => {
    navigate('/', { replace: true })
  }

  return (
    <>
      <div className='layout my-12'>
        <button
          role='button'
          className='h-10 w-32 rounded-md bg-green-600 text-lg font-medium text-white hover:bg-green-700'
          onClick={navigateToBack}
        >
          Back to Home
        </button>

        <h1 className='mt-12 text-2xl font-semibold text-gray-900'>
          Comments
        </h1>

        <div className='relative mt-12 overflow-x-auto'>
          <table className='w-full text-left text-sm text-gray-500'>
            <thead className='bg-gray-50 text-xs uppercase text-gray-700'>
              <tr>
                <th scope='col' className='py-3 px-6'>
                  ID
                </th>
                <th scope='col' className='py-3 px-6'>
                  Name
                </th>
                <th scope='col' className='py-3 px-6'>
                  Email
                </th>
              </tr>
            </thead>

            <tbody>
              {data?.map((comments) => (
                <tr className='border-b bg-white' key={comments.id}>
                  <td
                    scope='row'
                    className='whitespace-nowrap py-4 px-6 font-medium text-gray-900'
                  >
                    {comments.id}
                  </td>

                  <td
                    scope='row'
                    className='whitespace-nowrap py-4 px-6 font-medium text-gray-900'
                  >
                    {comments.name}
                  </td>

                  <td
                    scope='row'
                    className='whitespace-nowrap py-4 px-6 font-medium text-gray-900'
                  >
                    {comments.email}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default CommentsPages