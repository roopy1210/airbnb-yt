import React, { useState } from "react";
import Image from "next/image";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker, DefinedRange } from "react-date-range";
import { ko } from "date-fns/locale";
import { useRouter } from "next/router";

const Header = ({placeholder}) => {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const router = useRouter();

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const search = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      }
    });
  }

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  return (
    <>
      <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
        {/* 
            left 
            ---------------------------------------------------------------
            1.layout deprecated 되었으므로 fill 사용
            2.objectFit, objectPosition deprecated 되었으므로 style 사용
            ---------------------------------------------------------------
        */}
        <div 
          onClick={() => router.push("/")}
          className="relative flex items-center h-10 cursor-pointer my-auto">
          <Image
            src="https://links.papareact.com/qd3"
            alt="Airbnb Logo"
            fill
            style={{ objectFit: "contain", objectPosition: "left" }}
          />
        </div>

        {/* Middle*/}
        <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
          <input
            value={searchInput}
            type="text"
            className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
            placeholder={placeholder || "Start your search"}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          {/*SearchIcon*/}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full cursor-pointer md:mx-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>

        {/* Right */}
        <div className="flex items-center space-x-4 justify-end text-gray-500">
          <p className="hidden md:inline cursor-pointer font-serif font-medium">
            Become a host
          </p>
          {/*globe-alt icon*/}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
            />
          </svg>

          <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
            {/*bars-4*/}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>

            {/*user-circle*/}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
        </div>

        {/*https://www.npmjs.com/package/react-date-range*/}
        {searchInput && (
          <div className="flex flex-col col-span-3 mx-auto">
            <DateRangePicker
              locale={ko}
              dateDisplayFormat="yyyy-MM-dd"
              ranges={[selectionRange]}
              minDate={new Date()}
              rangeColors={["#FD5B61"]}
              onChange={handleSelect}
            />
            <div className="flex items-center border-b mb-4">
              <h2 className="text-2xl flex-grow font-semibold">
                Number of Guests
              </h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5"
              >
                <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
              </svg>
              <input 
                value={noOfGuests}
                type="number" 
                className="w-12 pl-2 text-lg outline-none text-red-400" 
                onChange={(e) => setNoOfGuests(e.target.value)}
                min={1}
              />
            </div>
            <div className="flex">
              <button className="flex-grow text-gray-500">Cancel</button>
              <button onClick={search} className="flex-grow text-red-400">Search</button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
