import React from 'react'
import { ChevronLeftIcon, DotsVerticalIcon, ChevronRightIcon } from '@heroicons/react/solid'
import LeftChat from './LeftChat'
import ChatImages from './ChatImages'
import RightChat from './RightChat'
import OfferMessage from './OfferMessage'

const Phone = () => {
  return (
	<div className="bg-chat shadow-black/30 shadow-lg rounded-3xl 
		w-[16rem] h-[34rem] absolute border-8 border-white
		left-[17.7rem] top-20 flex flex-col"
	>
		<div className="w-full h-20 bg-gradient-to-r from-G_Two to-G_One rounded-t-3xl rounded-b-md flex flex-col">
			<div className="w-1/2 h-7 bg-white rounded-full right-1/2 mx-auto -mt-3" />
			<div className="w-full h-full flex items-center px-2">
				<ChevronLeftIcon className="text-white h-5 w-5 mr-1" />
				<img src="./images/avatar.jpg" alt="profile" 
					className=" object-cover object-center rounded-full w-8 h-8 border"
				/>
				<div className="flex flex-col ml-2 tracking-wide">
					<h2 className="text-white text-xs">
						Samuel Green
					</h2>
					<h3 className="text-[0.5rem] text-white/50">
						Available to Walk
					</h3>
				</div>
				<DotsVerticalIcon className="text-white ml-auto h-5 w-5" />
			</div>
		</div>
		<div className="w-full h-full flex-grow flex flex-col px-2 py-2.5">
			<LeftChat message="That sounds great. I’d be happy with that." />
			<LeftChat message="Could you send over some pictures of your dog, please?" />
			<ChatImages />
			<RightChat message="Here are a few pictures. She’s a happy girl!" />
			<RightChat message="Can you make it?" />
			<LeftChat message="She looks so happy! The time we discussed works. How long shall I take her out for?" />
			<OfferMessage time="30 minute walk" price={29} />
			<OfferMessage time="1 hour walk" price={49} />
			<input type="text" placeholder="Type a message…"
				className="appearance-none py-3 px-5 w-full rounded-full text-xs mt-auto 
				placeholder-slate-400 placeholder-opacity-50 "
			/>
			<ChevronRightIcon className="text-white w-7 h-7 p-1 rounded-full bg-send absolute bottom-4 right-4" />
		</div>
	</div>
  )
}

export default Phone