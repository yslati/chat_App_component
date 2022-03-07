import React from 'react'
import Phone from './components/Phone';

const App = () => {
  return (
    <div className="w-screen h-screen flex transition-all overflow-hidden relative">
      <div className='w-1/3 max-w-md h-4/5 bg-gradient-to-b from-G_One to-G_Two rounded-b-full' />
      <Phone />
      <div className="w-full h-full flex flex-col justify-center items-center z-10">
        <div className="w-[31rem] flex flex-col tracking-wider ml-16">
          <h1 className="text-4xl text-header font-[500]">
            Simple booking
          </h1>
          <p className=" text-description mt-7  leading-7">
            Stay in touch with our dog walkers through the chat interface. This makes it easy to 
            discuss arrangements and make bookings. Once the walk has been completed you can rate 
            your walker and book again all through the chat.
          </p>
        </div>
      </div>
      <div className="z-0 w-[26rem] h-4/5 bg-rose/5 rounded-t-full mt-auto absolute bottom-0 -right-28 overflow-hidden" />
    </div>
  );
}

export default App;
