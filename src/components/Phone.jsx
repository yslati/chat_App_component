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
		<div className="w-full flex-none md:h-16 h-10 bg-gradient-to-r from-G_Two to-G_One rounded-t-2xl rounded-b-md flex flex-col">
			<div className="w-1/2 md:h-7 h-5 bg-white rounded-full right-1/2 mx-auto md:-mt-3 -mt-2" />
			<div className="w-full h-full flex items-center px-2">
				<ChevronLeftIcon className="text-white md:h-5 h-3 md:w-5 w-3 mr-1" />
				<img src="./images/avatar.jpg" alt="profile" 
					className=" object-cover object-center rounded-full md:w-8 w-5 md:h-8 h-5 border"
				/>
				<div className="flex flex-col ml-2 tracking-wide">
					<h2 className="text-white md:text-xs text-[0.5rem]">
						Samuel Green
					</h2>
					<h3 className="md:text-[0.5rem] text-[0.35rem] text-white/50">
						Available to Walk
					</h3>
				</div>
				<DotsVerticalIcon className="text-white ml-auto md:h-5 h-3 md:w-5 w-3" />
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
			<input type="text" placeholder="Type a message…"
				className="appearance-none md:py-3 py-[0.4rem] md:px-5 px-3 w-full rounded-full md:text-xs text-[0.5rem] mt-auto
				placeholder-slate-400 placeholder-opacity-50 "
			/>
			<ChevronRightIcon className="text-white md:w-7 w-4 md:h-7 h-4 p-1 rounded-full bg-send relative
			 md:bottom-[2.1rem] bottom-5 md:-right-[11.75rem] -right-[8.3rem]" />
		</div>
	</div>
  )
}

export default Phone