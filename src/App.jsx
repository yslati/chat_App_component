import React from 'react'
import Phone from './components/Phone';

const App = () => {
  return (
    <div className="w-screen h-screen flex transition-all overflow-hidden relative bg-gray-50 lg:px-56">
      <div className='z-0 md:w-1/3 w-full absolute md:-left-40 -left-1/2 md:h-4/5 h-1/2 bg-gradient-to-b from-G_One to-G_Two rounded-b-full' />

      <div className="z-10 w-screen h-screen flex md:flex-row flex-col md:items-center items-center md:justify-around justify-center">
        <Phone />
        <div className="mt-10 flex flex-col justify-center items-center">
          <div className="md:w-[31rem] w-full flex flex-col tracking-wider md:px-0 px-9 md:items-start items-center">
            <h1 className="text-4xl text-header font-[500]">
              Simple booking
            </h1>
            <p className=" text-description mt-7 md:text-left md:text-base text-sm text-center leading-7">
              Stay in touch with our dog walkers through the chat interface. This makes it easy to 
              discuss arrangements and make bookings. Once the walk has been completed you can rate 
              your walker and book again all through the chat.
            </p>
          </div>
        </div>
      </div>

      <div className="z-0 md:w-1/3 w-full md:h-4/5 h-1/2 bg-rose/5 rounded-t-full mt-auto absolute bottom-0 md:-right-40 -right-1/2 overflow-hidden" />
    </div>
  );
}

export default App;
