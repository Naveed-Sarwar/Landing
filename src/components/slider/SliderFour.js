import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import Imge from "../../../assets/property-img.jpeg";


// import required modules
import { Navigation } from 'swiper/modules';
import Image from 'next/image';

export default function App() {
    return (
        <div>
            <Swiper
                breakpoints={{
                    // Configure breakpoints for different screen sizes
                    1400: {
                        slidesPerView: 2, // Number of slides to display on mobile devices
                        slidesPerGroup: 2,
                         // Number of slides to group together for the swipe on mobile
                    },
                       768: {
                        slidesPerView: 1,
                         // Number of slides to display on mobile devices
                        slidesPerGroup: 1, // Number of slides to group together for the swipe on mobile
                    },
                }}
                spaceBetween={20}  navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className='overflow-hidden'>
                        <div className="bg-stockOne my-4 lg:my-0 object-cover rounded-md h-80 bg-cover bg-center transition-all delay-150 transform hover:scale-105 duration-300">
                            <div className='flex items-center text-white px-4 justify-between'>
                                <div>
                                    <p className='absolute left-8 bottom-4 text-4xl'>Los Angeles</p>
                                </div>
                                <button className='absolute hover:bg-white w-20 h-10 hover:text-black hover:rounded-md hover:flex hover:items-center hover:justify-center right-8 bottom-4'>Trade</button>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>

                <SwiperSlide>

                    <div className='overflow-hidden'>
                        <div className="bg-stockTwo my-4 lg:my-0 object-cover rounded-md h-80 bg-cover bg-center transition-all delay-150 transform hover:scale-105 duration-300">

                            <div className='flex items-center text-white px-4 justify-between'>
                                <div><p className='absolute left-8 bottom-4 text-4xl'>Las Vages Naveda</p>
                                </div>
                                <button className='absolute hover:bg-white w-20 h-10 hover:text-black hover:rounded-md hover:flex hover:items-center hover:justify-center right-8 bottom-4'>Trade</button>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>

                <SwiperSlide>

                    <div className='overflow-hidden'>
                        <div className="bg-stockOne my-4 lg:my-0 object-cover rounded-md h-80 bg-cover bg-center transition-all delay-150 transform hover:scale-105 duration-300">
                            <div className='flex items-center text-white px-4 justify-between'>
                                <div>
                                    <p className='absolute left-8 bottom-4 text-4xl'>Los Angeles</p>
                                </div>
                                <button className='absolute hover:bg-white w-20 h-10 hover:text-black hover:rounded-md hover:flex hover:items-center hover:justify-center right-8 bottom-4'>Trade</button>
                            </div>
                        </div>
                    </div>



                </SwiperSlide>


                <SwiperSlide>

                    <div className='overflow-hidden'>
                        <div className="bg-stockOne my-4 lg:my-0 object-cover rounded-md h-80 bg-cover bg-center transition-all delay-150 transform hover:scale-105 duration-300">
                            <div className='flex items-center text-white px-4 justify-between'>
                                <div>
                                    <p className='absolute left-8 bottom-4 text-4xl'>Los Angeles</p>
                                </div>
                                <button className='absolute hover:bg-white w-20 h-10 hover:text-black hover:rounded-md hover:flex hover:items-center hover:justify-center right-8 bottom-4'>Trade</button>
                            </div>
                        </div>
                    </div>



                </SwiperSlide>


                <SwiperSlide>

                    <div className='overflow-hidden'>
                        <div className="bg-stockOne my-4 lg:my-0 object-cover rounded-md h-80 bg-cover bg-center transition-all delay-150 transform hover:scale-105 duration-300">
                            <div className='flex items-center text-white px-4 justify-between'>
                                <div>
                                    <p className='absolute left-8 bottom-4 text-4xl'>Los Angeles</p>
                                </div>
                                <button className='absolute hover:bg-white w-20 h-10 hover:text-black hover:rounded-md hover:flex hover:items-center hover:justify-center right-8 bottom-4'>Trade</button>
                            </div>
                        </div>
                    </div>



                </SwiperSlide>


                <SwiperSlide>

                    <div className='overflow-hidden'>
                        <div className="bg-stockOne my-4 lg:my-0 object-cover rounded-md h-80 bg-cover bg-center transition-all delay-150 transform hover:scale-105 duration-300">
                            <div className='flex items-center text-white px-4 justify-between'>
                                <div>
                                    <p className='absolute left-8 bottom-4 text-4xl'>Los Angeles</p>
                                </div>
                                <button className='absolute hover:bg-white w-20 h-10 hover:text-black hover:rounded-md hover:flex hover:items-center hover:justify-center right-8 bottom-4'>Trade</button>
                            </div>
                        </div>
                    </div>



                </SwiperSlide>
            </Swiper>
        </div>
    );
}
