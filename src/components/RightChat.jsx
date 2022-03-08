import React from 'react'

const RightChat = ({ message }) => {
  return (
	<div className="w-3/4 rounded-xl rounded-br bg-white text-gray-700 md:text-[0.7rem] text-[0.45rem] md:p-2 py-1 px-2 md:mb-2 mb-1.5 ml-auto leading-tight">
		{ message }
	</div>
  )
}

export default RightChat