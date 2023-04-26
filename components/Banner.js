import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <>
      {/*sm: 640px, md: 768px, lg: 1024px, xl: 1280px, 2xl: 1536px*/}
      <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
        <Image
          src="/images/komodo.jpg"
          alt="Phicit of Thiland"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute top-1/2 w-full text-center">
          <p className="text-sm sm:text-lg font-semibold text-white">
            Not sure where to go? Perfect.
          </p>

          <button className="text-purple-500 
            bg-white px-10 py-4 shadow-md rounded-full 
            font-bold my-3 hover:shadow-xl active:scale-90 transition duration-100">
            I am flexible
          </button>
        </div>
      </div>
    </>
  );
};

export default Banner;
