import React from 'react'

type Props = {
    title:string
}

export const Header = ({title}: Props) => {
  return (
    <div className='mx-auto max-w-screen-xl p-4 px-8'>
        <h1 className='mb-4 '>
            <span className='font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to bg-pink-600'>
                {title} 
            </span>
        </h1>
    </div>
  )
}