import React from 'react'

const ChatImages = () => {
  return (
	<div className="flex w-3/4 justify-end space-x-2 my-1 ml-auto transition-all">
		<img src="./images/dog-image-1.jpg" alt="" 
			className="object-cover object-center md:w-10 w-9 md:h-10 h-9 rounded-lg hover:scale-90"
		/>
		<img src="./images/dog-image-2.jpg" alt="" 
			className="object-cover object-center md:w-10 w-9 md:h-10 h-9 rounded-lg hover:scale-90"
		/>
		<img src="./images/dog-image-3.jpg" alt="" 
			className="object-cover object-center md:w-10 w-9 md:h-10 h-9 rounded-lg hover:scale-90"
		/>
	</div>
  )
}

export default ChatImages