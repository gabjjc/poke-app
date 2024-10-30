import React from 'react'

const Cards = ({ image, title }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
    <img className="w-full" src={image} alt={title} />
    <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
    </div>
</div>
  )
}

export default Cards