import React from 'react'
import One from "../../assets/1.webp";
import Two from "../../assets/1.1.webp";
import Three from "../../assets/1.2.webp";
import Four from "../../assets/1.3.webp";
import Five from "../../assets/1.4.webp";
import Six from "../../assets/1.5.webp";
import Image from 'next/image';
const Hills = () => {
    return (
        <>     <div className='bg-hill flex flex-col justify-center h-[90vh] px-10 '>
            <h1 className='text-white leading-[50px] font-extrabold text-[50px]'>Bel Azur (5 Bedroom)<br />
                {/* <span className='pl-12'>CHASE HILLS</span> */}
            </h1>
            {/* <p className='text-white font-medium mt-12 text-2xl'>Nestled adjacent to 170 acres of a majestic championship golf,
                Botanica Oak Hills <br /> offers its residents true serenity and connection  to the surrounding landscape, <br /> while keeping them closely in touch with the big city.</p>
      */}
        </div>

            <br />
            <br />
            <div className='px-10'>
                <div className='h-2 w-40 bg-slate-300 my-4'></div>
                <h1 className='text-black leading-[50px] font-extrabold text-[50px]'>ECONOMIC DETAILS</h1>
                <br />
                <div className='flex gap-x-2 py-1'><p className='font-bold'>City</p> <p>Assagao</p></div>
                <hr />     <div className='flex gap-x-2 py-1'><p className='font-bold'>State</p> <p>Goa</p></div>
                <hr />  <div className='flex gap-x-2 py-1'><p className='font-bold'>Country</p> <p>India</p></div>
                <hr />   <div className='flex gap-x-2 py-1'><p className='font-bold'>Growth Rate</p> <p> Future job growth over the next ten years is predicted to be 39.6%, which is higher than the US average of 33.5%</p></div>
                <hr />  <div className='flex gap-x-2 py-1'><p className='font-bold w-[850px]'>Economic Driver</p> <p>
                    With two operational airports in the state, Dabolim Airport and MOPA airport, MOPA itself has the potential to double our footfalls”, Faldessai added. According to him, Goa is expecting more than 1.5 cr footfalls in the coming year, predicting to experience more than whatever achieved in the past. The numbers are coming as the capacity that MOPA airport is bringing, and the kind of linkages that it has formed with various international as well as domestic destinations is phenomenal.
                </p></div>

            </div>
            <br />
            <br />
            <div className='bg-[#f5f4f4] py-20 flex flex-col items-center justify-center'>
                <div className='h-2 w-40 -ml-[90px] bg-slate-300 my-4'></div>
                <h1 className='text-black leading-[50px] font-extrabold text-[50px]'>BOTANICA <br />
                    <p className='pl-12'>ABOUT <br /> CHASE <br /> HILLS</p></h1>

                <p className='flex items-center my-4 w-[90%] lg:w-3/6 text-center justify-center text-2xl font-semibold'>ROI has partnered with another development company to get this community built. This project will consist of 68 units divided into 17 three-story buildings of 4 units. Each unit will be 2 bed/2 bath with 1,004 usable sq. ft. and a tuck-under garage.</p>
                <p className='flex items-center my-4 w-[90%] lg:w-3/6 text-center justify-center text-2xl font-semibold'>Along with spacious floor plans and smart home technology, Botanica offers amenities such as an outdoor kitchen, fire-pit lounge, bar, and pool as well as a private dog park and EV charging spaces.</p> </div>
            <br />
            <br />
            <br />
            <br />
            <div className='grid lg:grid-cols-3 gap-x-4 gap-y-4 px-10'>
                <Image src={One} className='h-80 rounded-md' />
                <Image src={Two} className='h-80 rounded-md' />
                <Image src={Three} className='h-80 rounded-md' />
                <Image src={Four} className='h-80 rounded-md' />
                <Image src={Five} className='h-80 rounded-md' />
                <Image src={Six} className='h-80 rounded-md' />
            </div>
        </>
    )
}

export default Hills;
