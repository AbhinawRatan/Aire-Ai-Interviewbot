import React from 'react'

const Chat = () => {
  return (
    <div className='h-screen w-screen bg-[#050509]'>
      <div className='w-[20%] h-screen bg-[#0c0c15] text-white p-4'>
        <div>
          <button className='w-full h-[50px] border rounded bg-slate-600'>+ New Interview</button>
        </div>
        <div className='h-[75%] mt-8'>
          { [1, 2, 3, 4, 5].map((item, index) => (
            <div className='py-3 text-center rounded mt-4 text-lg font-light flex items-center px-8 hover:bg-slate-600 cursor-pointer'>
              <span className='mr-4'>
                <svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-message' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'>
                  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                  <path d='M8 9h8'></path>
                  <path d='M8 13h6'></path>
                  <path d='M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5.5l-3 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z'></path>
                </svg>
              </span>
              <span>Past interviews</span>
            </div>
          ))}
          <div></div>
        </div>
      </div>
      <div className='w-[80%]'></div>
    </div>
  )
}

export default Chat
