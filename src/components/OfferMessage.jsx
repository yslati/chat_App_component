import React, { useState } from 'react'
import { CheckCircleIcon } from '@heroicons/react/outline'
import { CheckCircleIcon as SCheckCircleIcon } from '@heroicons/react/solid'

const OfferMessage = ({ time, price }) => {

	const [check, setCheck] = useState(false)

	return (
	<div className="w-3/4 md:h-10 h-7 rounded-xl rounded-bl flex items-center select-none bg-gradient-to-r from-G_One to-G_Two text-white/50 text-[0.7rem] p-2 md:mb-2 mb-1.5 pr-4">
		{	!check ?
			<CheckCircleIcon onClick={() => setCheck(true)} className="md:h-5 w-3 md:w-5 h-3 mr-1.5 cursor-pointer" /> :
			<SCheckCircleIcon onClick={() => setCheck(false)} className="md:h-5 w-3 md:w-5 h-3 mr-1.5 cursor-pointer" /> 
		}
		<h2 className="md:text-[0.6rem] text-[0.4rem] md:mt-0 mt-auto">
			{ time }
		</h2>
		<h2 className="text-white md:text-sm text-[0.6rem] ml-auto font-semibold md:mt-0 mt-auto hover:scale-105">
			${ price }
		</h2>
	</div>
	)
}

export default OfferMessage