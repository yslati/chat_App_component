import React from 'react'

const LeftChat = ({ message }) => {
  return (
	<div className="w-3/4 rounded-xl rounded-bl bg-rose/25 text-purple-700/70 text-[0.7rem] p-2 mb-2 leading-tight">
		{ message }
	</div>
  )
}

export default LeftChat