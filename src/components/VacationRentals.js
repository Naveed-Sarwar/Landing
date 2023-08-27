import React from 'react';
import House from "../../assets/house.jpg";
import PropertyImg from "../../assets/property-img.jpeg";
import Image from 'next/image';
import { FaEnvelope } from "react-icons/fa";
const VacationRentals = () => {
  return (
    <div className='mx-4'>
      <div className='grid grid-cols-2 gap-x-4'>
        <div className='flex flex-col px-4 justify-center'>
          <h1 className='text-white py-3 font-bold text-4xl'>Vacation Rentals</h1>
          <p className='text-xl text-white'>Furnished properties rented out for shorter days (days , weeks or months) on platforms like AirBnb & VRBO. Diversity your portfolio with vacation rentals.</p>
        </div>
        <div>
          <Image src={House} />
        </div>
      </div>

      <div className='grid grid-cols-3 mt-6 gap-x-4'>
        <div className='border-[1px] mb-4 relative'>
          <Image src={House} />
          <div className='flex justify-between px-2 text-white py-1'>
            <p className='font-medium'>$123444</p>
            <div className='flex items-center gap-x-2'>Contact <FaEnvelope /></div>

          </div>
          <div className='text-white px-2'>
            <p>3 Beds &#183; 3 Baths &#183; 333 Sqm</p>
          </div>
          <hr className='text-white w-[96%] mx-2 my-4   ' />
          <p className='text-[#ebe9e9] px-2 pb-6'>House in Port Hope, Michigan, United States</p>
        </div>
        <div className='border-[1px] mb-4 relative'>
          <Image src={House} />
          <div className='flex justify-between px-2 text-white py-1'>
            <p className='font-medium'>$123444</p>
            <div className='flex items-center gap-x-2'>Contact <FaEnvelope /></div>
          </div>
          <div className='text-white px-2'>
            <p>3 Beds &#183; 3 Baths &#183; 333 Sqm</p>
          </div>
          <hr className='text-white w-[96%] mx-2 my-4   ' />
          <p className='text-[#ebe9e9] px-2 pb-6'>House in Port Hope, Michigan, United States</p>
        </div>

        <div className='border-[1px] relative mb-4'>
          <Image src={House} />
          <div className='flex justify-between px-2 text-white py-1'>
            <p className='font-medium'>$123444</p>
            <div className='flex items-center gap-x-2'>Contact <FaEnvelope /></div>
          </div>
          <div className='text-white px-2'>
            <p>3 Beds &#183; 3 Baths &#183; 333 Sqm</p>
          </div>
          <hr className='text-white w-[96%] mx-2 my-4   ' />
          <p className='text-[#ebe9e9] px-2 pb-6'>House in Port Hope, Michigan, United States</p>
        </div>

        <div className='border-[1px] relative mb-4'>
          <Image src={House} />
          <div className='flex justify-between px-2 text-white py-1'>
            <p className='font-medium'>$123444</p>
            <div className='flex items-center gap-x-2'>Contact <FaEnvelope /></div>
          </div>
          <div className='text-white px-2'>
            <p>3 Beds &#183; 3 Baths &#183; 333 Sqm</p>
          </div>
          <hr className='text-white w-[96%] mx-2 my-4   ' />
          <p className='text-[#ebe9e9] px-2 pb-6'>House in Port Hope, Michigan, United States</p>
        </div>

        <div className='border-[1px] relative mb-4'>
          <Image src={House} />
          <div className='flex justify-between px-2 text-white py-1'>
            <p className='font-medium'>$123444</p>
            <div className='flex items-center gap-x-2'>Contact <FaEnvelope /></div>
          </div>
          <div className='text-white px-2'>
            <p>3 Beds &#183; 3 Baths &#183; 333 Sqm</p>
          </div>
          <hr className='text-white w-[96%] mx-2 my-4' />
          <p className='text-[#ebe9e9] px-2 pb-6'>House in Port Hope, Michigan, United States</p>
        </div>


        <div className='border-[1px] relative mb-4'>
          <Image src={House} />
          <div className='flex justify-between px-2 text-white py-1'>
            <p className='font-medium'>$123444</p>
            <div className='flex items-center gap-x-2'>Contact <FaEnvelope /></div>
          </div>
          <div className='text-white px-2'>
            <p>3 Beds &#183; 3 Baths &#183; 333 Sqm</p>
          </div>
          <hr className='text-white w-[96%] mx-2 my-4   ' />
          <p className='text-[#ebe9e9] px-2 pb-6'>House in Port Hope, Michigan, United States</p>
        </div>


        <div className='border-[1px] relative mb-4'>
          <Image src={House} />
          <div className='flex justify-between px-2 text-white py-1'>
            <p className='font-medium'>$123444</p>
            <div className='flex items-center gap-x-2'>Contact <FaEnvelope /></div>

          </div>
          <div className='text-white px-2'>
            <p>3 Beds &#183; 3 Baths &#183; 333 Sqm</p>
          </div>
          <hr className='text-white w-[96%] mx-2 my-4' />
          <p className='text-[#ebe9e9] px-2 pb-6'>House in Port Hope, Michigan, United States</p>
        </div>
        <div className='border-[1px] relative mb-4'>
          <Image src={House} />
          <div className='flex justify-between px-2 text-white py-1'>
            <p className='font-medium'>$123444</p>
            <div className='flex items-center gap-x-2'>Contact <FaEnvelope /></div>

          </div>
          <div className='text-white px-2'>
            <p>3 Beds &#183; 3 Baths &#183; 333 Sqm</p>
          </div>
          <hr className='text-white w-[96%] mx-2 my-4   ' />
          <p className='text-[#ebe9e9] px-2 pb-6'>House in Port Hope, Michigan, United States</p>
        </div>

        <div className='border-[1px] relative mb-4'>
          <Image src={House} />
          <div className='flex justify-between px-2 text-white py-1'>
            <p className='font-medium'>$123444</p>
            <div className='flex items-center gap-x-2'>Contact <FaEnvelope /></div>

          </div>
          <div className='text-white px-2'>
            <p>3 Beds &#183; 3 Baths &#183; 333 Sqm</p>
          </div>
          <hr className='text-white w-[96%] mx-2 my-4   ' />
          <p className='text-[#ebe9e9] px-2 pb-6'>House in Port Hope, Michigan, United States</p>
        </div>
      </div>
    </div>
  )
}

export default VacationRentals;