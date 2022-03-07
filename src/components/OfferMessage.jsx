import React from 'react'
import { CheckCircleIcon } from '@heroicons/react/outline'

const OfferMessage = ({ time, price }) => {
  return (
	<div className="w-3/4 h-10 rounded-xl rounded-bl flex items-center bg-gradient-to-r from-G_One to-G_Two text-white/50 text-[0.7rem] p-2 mb-2 pr-4">
		<CheckCircleIcon className="h-5 w-5 mr-1.5" />
		<h2 className="text-[0.5rem]">
			{ time }
		</h2>
		<h2 className="text-white text-sm ml-auto font-semibold">
			${ price }
		</h2>
	</div>
  )
}

export default OfferMessage