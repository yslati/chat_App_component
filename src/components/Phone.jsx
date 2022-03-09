import React from 'react'
import { ChevronLeftIcon, DotsVerticalIcon, ChevronRightIcon } from '@heroicons/react/solid'
import LeftChat from './LeftChat'
import ChatImages from './ChatImages'
import RightChat from './RightChat'
import OfferMessage from './OfferMessage'

const Phone = () => {
  return (
	<div className="bg-chat shadow-black/30 shadow-lg rounded-3xl 
		md:w-[16rem] w-1/2 md:h-[34.5rem] h-1/2 border-8 border-white
		flex flex-col"
	>
		<div className="w-full flex-none md:h-16 h-12 bg-gradient-to-r from-G_Two to-G_One rounded-t-2xl rounded-b-md flex flex-col overflow-hidden">
			<div className="w-1/2 md:h-10 h-7 bg-white rounded-full right-1/2 mx-auto md:-mt-3 -mt-3" />
			<div className="w-full h-full flex items-center px-2">
				<ChevronLeftIcon className="text-white md:h-5 h-4 md:w-5 w-4 mr-1 cursor-pointer" />
				<img src="./images/avatar.jpg" alt="profile" 
					className=" object-cover object-center rounded-full md:w-8 w-6 md:h-8 h-6 border hover:brightness-125"
				/>
				<div className="flex flex-col ml-2 tracking-wide">
					<h2 className="text-white md:text-xs text-[0.6rem]">
						Samuel Green
					</h2>
					<h3 className="md:text-[0.5rem] text-[0.4rem] text-white/50 select-none">
						Available to Walk
					</h3>
				</div>
				<DotsVerticalIcon className="text-white ml-auto md:h-5 h-4 md:w-5 w-4 cursor-pointer" />
			</div>
		</div>
		<div className="w-full flex-grow flex flex-col px-2 py-2.5">
			<LeftChat message="That sounds great. I’d be happy with that." />
			<LeftChat message="Could you send over some pictures of your dog, please?" />
			<ChatImages />
			<RightChat message="Here are a few pictures. She’s a happy girl!" />
			<RightChat message="Can you make it?" />
			<LeftChat message="She looks so happy! The time we discussed works. How long shall I take her out for?" />
			<OfferMessage time="30 minute walk" price={29} />
			<OfferMessage time="1 hour walk" price={49} />
			<div className='w-full mt-auto flex items-center justify-end'>
				<input type="text" placeholder="Type a message…"
					className="appearance-none focus:outline-G_Two md:py-3 py-[0.4rem] md:px-5 px-3 w-full rounded-full md:text-xs text-[0.5rem] 
					placeholder-slate-400 placeholder-opacity-50 "
					/>
				<ChevronRightIcon className="cursor-pointer text-white md:w-7 w-4 md:h-7 h-4 p-1 rounded-full bg-send hover:bg-send/80 absolute
					mr-1.5" /> {/* md:bottom-[2.1rem] bottom-5 md:-right-[11.75rem] -right-[8.8rem] */}
			 </div>
		</div>
	</div>
  )
}

export default Phone