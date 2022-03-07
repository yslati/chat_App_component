import React from 'react'

const RightChat = ({ message }) => {
  return (
	<div className="w-3/4 rounded-xl rounded-br bg-white text-gray-700 text-[0.7rem] p-2 mb-2 ml-auto leading-tight">
		{ message }
	</div>
  )
}

export default RightChat