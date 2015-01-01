import React from 'react'
import One from "../../../assets/buyCard1.3.jpg";
import Two from "../../../assets/buyCard1.2.jpg";
import Three from "../../../assets/buyCard1.1.jpg";
import Four from "../../../assets/2.3.webp";
import Five from "../../../assets/2.4.webp";
import Six from "../../../assets/2.5.webp";
import Image from 'next/image';
import { useRouter } from 'next/router';
import { data } from 'autoprefixer';
import { buyData } from '@/components/constants/data';
const Buy = () => {
    const router = useRouter();
    const { buy } = router.query;

    console.log(buy);
    const selectedIndex = parseInt(buy);

    // Retrieve the selected card's data
    const selectedCard = buyData[selectedIndex];

    if (!selectedCard) {
        // Handle the case where the index is invalid or missing
        return <p>Card not found.</p>;
    }
    const bgStyle = {
        backgroundImage: `url(${selectedCard.logo.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };
    return (
        <>     <div
            style={bgStyle}
            className={`flex flex-col justify-center h-[90vh] px-10`}>
            <h1 className='text-white leading-[50px] font-extrabold text-[50px]'>{selectedCard?.title}<br />
                {/* <span className='pl-12'>CHASE HILLS</span> */}
            </h1>
        </div>

            <br />
            <br />
            <div className='px-10'>
                <div className='h-2 w-40 bg-slate-300 my-4'></div>
                <h1 className='text-black leading-[50px] font-extrabold text-[50px]'>ECONOMIC DETAILS</h1>
                <br />
                <div className='flex gap-x-2 py-1'><p className='font-bold'>City</p> <p>San Antonio</p></div>
                <hr />     <div className='flex gap-x-2 py-1'><p className='font-bold'>State</p> <p>Taxes</p></div>
                <hr />  <div className='flex gap-x-2 py-1'><p className='font-bold'>Country</p> <p>United States of America</p></div>
                <hr />   <div className='flex gap-x-2 py-1'><p className='font-bold'>Growth Rate</p> <p> Future job growth over the next ten years is predicted to be 39.6%, which is higher than the US average of 33.5%</p></div>
                <hr />  <div className='flex gap-x-2 py-1'><p className='font-bold w-[850px]'>Economic Drivers</p> <p>The Greater San Antonio region's economy is driven by the services sector, manufacturing, and government, with a significant influence from the military, defense, and tourism industries. The region hosts four military bases, including three Air Force bases (Brooks, Lackland, and Randolph) and one Army post (Fort Sam Houston), which collectively employ around 74,500 military and civilian personnel and contribute approximately $4.9 billion to the local economy. The city's robust service sector, buoyed by its healthcare and business services, along with a thriving tourism industry attracting approximately 8 million visitors per year, creates an estimated $4 billion economic impact. Notably, the medical and biomedical industries form a large part of San Antonio's economy, with the South Texas Medical Center alone employing approximately 25,000 people. Other noteworthy contributors include the manufacturing sector, with significant contributions from Toyota's truck manufacturing plant, and various other industries producing items such as processed foods, airplane parts, storage batteries, semiconductors, and cement​.</p></div>
                <hr />  <div className='flex py-2 gap-x-2'><p className='font-bold'>Population</p> <p>San Antonio is projected to reach a population of 2.68 million by July 2023, with the metropolitan area housing approximately 2.45 million people​​. Looking further ahead, the population of the San Antonio metro area is expected to surpass 4 million by 2050​.</p></div>

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
            <div className='grid lg:grid-cols-2 gap-x-4 px-14'>
                <div className='flex items-center'>
                    <p className='text-black leading-[50px] font-extrabold text-[50px]'>Watch Our Exclusive Video</p>
                </div>
                <div>
                    {/* <video autoPlay className='h-[400px] w-full' controls>
                    <source src={`/videos/${selectedCard?.video}`} type="video/mp4" />
                    Your browser does not support the video tag.
                </video> */}

                    <iframe
                        width="100%"
                        height="400"
                        src={`${selectedCard?.video}?autoplay=1`}
                        title="YouTube Video"
                        allowFullScreen
                        
                    ></iframe>
                </div>
            </div>
            <br />
            <br />  <br />  <br />  <br />
            <div className='grid lg:grid-cols-3 gap-x-4 gap-y-4 pb-2 px-10'>
                {
                    selectedCard?.image?.map((item) => {
                        return <>
                            <img src={item?.img?.src} className='h-80 w-full rounded-md' />
                        </>
                    })
                }

                {/* <Image src={Four} className='h-80 rounded-md' />
                <Image src={Five} className='h-80 rounded-md' />
                <Image src={Six} className='h-80 rounded-md' /> */}
            </div>
        </>
    )
}

export default Buy;
