import React from 'react';
import Confetti from 'react-confetti'

export const Congratulations = () => {
  return (
    <div className="test_container flex flex-1">
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
      />
      <div className="container text-center flex flex-col justify-center items-center">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Congratulations!
        </h1>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Juan Camilo llanos is your boyfriend :)
        </p>
      </div>
    </div>
  )
}
