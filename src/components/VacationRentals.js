import React from 'react';
import House from "../../assets/house.jpg";
import PropertyImg from "../../assets/property-img.jpeg";
import Image from 'next/image';
import { FaEnvelope } from "react-icons/fa";
import Link from 'next/link';
import ImageHouse from "../../assets/image.jpeg";
import { useRouter } from 'next/router';
import { data, dataTwo } from './constants/data';
import SecondCard from "../../assets/secondCard.jpg";
import ThirdCard from "../../assets/thirdCard.jpeg";
import FourCard from "../../assets/fourCard.webp";
import FiveCard from "../../assets/fiveCard.jpeg";
import SixCard from "../../assets/sixCard.jpeg";
import SevenCard from "../../assets/sevenCard.jpg";
import EightCard from "../../assets/propertyOne.webp";
import NineCard from "../../assets/2.1.webp";
import TenCard from "../../assets/propertyThree.webp";

const VacationRentals = () => {




  return (
    <div className='mx-4'>
      <div className='grid lg:grid-cols-2 gap-x-4'>
        <div className='flex flex-col order-2 lg:order-1 px-4 justify-center'>
          <h1 className='text-white py-3 font-bold text-4xl'>Property Rentals</h1>
          <p className='text-xl text-white'>Furnished properties rented out for shorter days (days , weeks or months) on platforms like AirBnb & VRBO. Diversity your portfolio with vacation rentals.</p>
        </div>
        <div className='order-1 lg:order-2'>
          <Image src={House} className='rounded-lg' />
        </div>
      </div>

      <div className='grid lg:grid-cols-1 mt-6 gap-x-4'>
        {
          data?.map((item, index) => {
            const router = useRouter();
            const handleClick = () => {
              router.push(`/property/${index}`); // Navigate to the dynamic property route
            };
            return <div className='cursor-pointer' onClick={handleClick}>

              {/* <div onClick={handleClick} className='border-[1px] cursor-pointer mb-4 relative'>
                <div className='flex justify-between px-2 text-white py-1'>
                  <p className='font-medium'>${item?.price}</p>
                  <div className='flex items-center gap-x-2'> Virtual Tour <FaEnvelope /></div>

                </div>
                <div className='text-white px-2'>
                  <p>{item?.beds} Beds &#183; {item?.bath} Baths &#183; {item?.sqft} Sqm</p>
                </div>
                <hr className='text-white w-[96%] mx-2 my-4   ' />
                <p className='text-[#ebe9e9] px-2 pb-6'>{item?.title}</p>
                {index == 0 ? <Image className='h-64' src={ImageHouse} /> : index == 1 ? <Image className='h-64' src={SecondCard} /> : index == 2 ? <Image className='h-64' src={ThirdCard} /> : index == 3 ? <Image className='h-64' src={FourCard} /> : index == 4 ? <Image className='h-64' src={FiveCard} /> : index == 5 ? <Image className='h-64' src={SixCard} /> : index == 6 ? <Image className='h-64' src={SevenCard} /> : index == 7 ? <Image className='h-64' src={EightCard} /> : index == 8 ? <Image className='h-64' src={NineCard} /> : <Image className='h-64' src={TenCard} />}
              </div> */}

              {/* <Link href={{ pathname: item.route }} key={index}> */}
              <div className='flex relative rounded-lg bg-white my-2'>
                <div className='flex-auto h-64 w-32'>
                  <img src={item?.image?.[0]?.img?.src} className='h-64 w-full' />
                  {/* {index == 0 ? <Image className='h-full' src={ImageHouse} /> : index == 1 ? <Image className='h-full' src={SecondCard} /> : index == 2 ? <Image className='h-full' src={ThirdCard} /> : index == 3 ? <Image className='h-full' src={FourCard} /> : index == 4 ? <Image className='h-full' src={FiveCard} /> : index == 5 ? <Image className='h-full object-cover' src={SixCard} /> : index == 6 ? <Image className='h-full' src={SevenCard} /> : index == 7 ? <Image className='h-full' src={EightCard} /> : index == 8 ? <Image className='h-full' src={NineCard} /> : <Image className='h-full' src={TenCard} />} */}
                </div>
                <div className='flex-auto pt-4 pl-4 w-64'>
                  <p className='text-lg'>RESIDENCIAL</p>
                  <h1 className='text-4xl font-bold'>{item?.title}</h1>

                  <div className='absolute bottom-8'>
                    {/* <p className='text-sm text-[#8f8f8f]'>Offerings</p>
                    <div className='flex pb-2 pt-1 gap-x-2'>
                      <div className='bg-[#e0dfdf] rounded-md px-2 text-sm flex items-center justify-center' >1</div>
                      <div className='bg-[#e0dfdf] rounded-md px-2 text-sm flex items-center justify-center' >ALTA Developers</div>
                    </div> */}
                    <p className='text-sm text-[#8f8f8f]'>Description</p>
                    <p>We believe in a sustainable future where real estate enhances our lives and becomes a blueprint for better living. All financed using our Invest Web3 fundraising platform.</p>
                  </div>
                </div>

              </div>
              {/* </Link> */}
            </div>


          })
        }
        {
          dataTwo?.map((item, index) => {
            const router = useRouter();
            const handleClick = () => {
              router.push(`/property/${index}`); // Navigate to the dynamic property route
            };
            return <div className='cursor-pointer'>


              <Link href={{ pathname: item.route }} key={index}>
                <div className='flex relative rounded-lg bg-white my-2'>
                  <div className='flex-auto h-64 w-32'>
                    <img src={item?.image?.src} className='h-64 w-full' />
                    {/* {index == 0 ? <Image className='h-full' src={ImageHouse} /> : index == 1 ? <Image className='h-full' src={SecondCard} /> : index == 2 ? <Image className='h-full' src={ThirdCard} /> : index == 3 ? <Image className='h-full' src={FourCard} /> : index == 4 ? <Image className='h-full' src={FiveCard} /> : index == 5 ? <Image className='h-full object-cover' src={SixCard} /> : index == 6 ? <Image className='h-full' src={SevenCard} /> : index == 7 ? <Image className='h-full' src={EightCard} /> : index == 8 ? <Image className='h-full' src={NineCard} /> : <Image className='h-full' src={TenCard} />} */}
                  </div>
                  <div className='flex-auto pt-4 pl-4 w-64'>
                    <p className='text-lg'>RESIDENCIAL</p>
                    <h1 className='text-2xl lg:text-4xl font-bold'>{item?.title}</h1>
                    <div className='absolute bottom-8'>
                      <p className='text-sm text-[#8f8f8f]'>Description</p>
                      <p>We believe in a sustainable future where real estate enhances our lives and becomes a blueprint for better living. All financed using our Invest Web3 fundraising platform.</p>
                    </div>
                  </div>

                </div>
              </Link>
            </div>


          })
        }

      </div>
    </div>
  )
}

export default VacationRentals;