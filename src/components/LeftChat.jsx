import React from 'react'

const LeftChat = ({ message }) => {
  return (
	<div className="w-3/4 rounded-xl rounded-bl bg-rose/25 text-purple-700/70 md:text-[0.7rem] text-[0.47rem] md:p-2 py-1.5 px-2 md:mb-2 mb-1.5 leading-tight">
		{ message }
	</div>
  )
}

export default LeftChat