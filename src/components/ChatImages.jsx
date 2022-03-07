import React from 'react'

const ChatImages = () => {
  return (
	<div className="flex w-3/4 justify-end space-x-2 my-2 ml-auto">
		<img src="./images/dog-image-1.jpg" alt="" 
			className="object-cover object-center w-10 h-10 rounded-lg"
		/>
		<img src="./images/dog-image-2.jpg" alt="" 
			className="object-cover object-center w-10 h-10 rounded-lg"
		/>
		<img src="./images/dog-image-3.jpg" alt="" 
			className="object-cover object-center w-10 h-10 rounded-lg"
		/>
	</div>
  )
}

export default ChatImages