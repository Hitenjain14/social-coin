import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

function Navbar({ address }) {
  const router = useRouter();

  return (
    <header className="w-full bg-white">
      <div className="flex items-center px-1 flex-grow py-2 font-bold text-base text-black w-full ">
        <div className="flex items-center flex-grow sm:flex-grow-0">
          <Image
            onClick={() => router.push('/')}
            src="/Social-logo.png"
            width={150}
            height={80}
            objectFit="cover"
            className="cursor-pointer"
          />
        </div>
        <div className="flex justify-end w-full items-center">
          <button
            type="button"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br  shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-8 py-2 text-center mr-4 md:mr-6 ml-2"
          >
            Artist
          </button>
          <div
            className="text-base mr-4 bg-gray-200 border-[1px] border-solid border-gray-200 rounded-md
               flex flex-col items-start justify-center hover:cursor-default hidden md:inline px-2 shadow-md py-1"
          >
            <div className="text-black font-semibold">
              {address?.slice(0, 7)}...{address?.slice(35)}
            </div>
          </div>
          <button
            type="button"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br  shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-8 py-2 text-center mr-4 ml-2"
          >
            Buy
          </button>
          <button
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br  shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-8 py-2 text-center mr-8 md:mr-20
        "
          >
            Sell
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
