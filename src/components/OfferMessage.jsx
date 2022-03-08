import React from 'react'
import { CheckCircleIcon } from '@heroicons/react/outline'

const OfferMessage = ({ time, price }) => {
  return (
	<div className="w-3/4 md:h-10 h-7 rounded-xl rounded-bl flex items-center bg-gradient-to-r from-G_One to-G_Two text-white/50 text-[0.7rem] p-2 md:mb-2 mb-1.5 pr-4">
		<CheckCircleIcon className="md:h-5 w-3 md:w-5 h-3 mr-1.5" />
		<h2 className="md:text-[0.5rem] text-[0.4rem] mt-auto">
			{ time }
		</h2>
		<h2 className="text-white md:text-sm text-[0.6rem] ml-auto font-semibold mt-auto">
			${ price }
		</h2>
	</div>
  )
}

export default OfferMessage