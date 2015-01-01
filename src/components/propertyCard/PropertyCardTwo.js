import React, { useState } from 'react'
import PropertyImg from "../../../assets/property-img.jpeg";
import Image from 'next/image';
import Slider from '../slider/Slider';
import { useRouter } from 'next/router';
import { data } from '../constants/data';

import ImageHouse from "../../../assets/image.jpeg";
import ImgPopup from '../imgPopup/ImgPopup';



const PropertyCardTwo = ({ img }) => {
    console.log("img" , img);
    const router = useRouter();
    const { property } = router.query;
    const [open, setOpen] = useState(false);

    const selectedIndex = parseInt(property);

    // Retrieve the selected card's data
    const selectedCard = data[selectedIndex];

    if (!selectedCard) {
        return <p>Card not found.</p>;
    }
    return (
        <>
            <div className='lg:border-[1px] lg:w-[350px] relative hover:-mt-1 duration-200 ease-out'>
                <div onClick={()=> setOpen(!open)} className="cursor-pointer rounded-t-lg" >
                {/* {selectedCard.image?.map((image, index) => (
                <div key={index} className="image-container">
                    <Image src={image.img} alt={`Image ${index}`} width={image.width} height={image.height} />
                </div>
            ))} */}
            
            <Slider images={selectedCard.image} />
                </div>
                <div className='px-4 '>
                    <div className='flex mt-4 lg:mt-2 justify-between items-center'>
                        <p className='font-semibold text-[#333333] text-[1.5rem]'>{selectedCard?.name}</p>
                        <p className='bg-[#64c464] font-bold text-[0.875rem] h-7 w-16 rounded-md items-center cursor-pointer flex justify-center text-white'>Open</p>
                    </div>
                    <p className='pt-2'>{selectedCard?.location}</p>
                    <br />
                </div>
                <hr />
                <div className='px-4'>
                    <div className='flex mt-2 py-2 justify-between'>
                        <p className='text-[#8d8d8d] underline underline-offset-4 decoration-dotted'>Offering amount</p>
                        <p>${selectedCard?.price}</p>
                    </div>
                    <div className='flex py-2 justify-between'>
                        <p className='text-[#8d8d8d] underline underline-offset-4 decoration-dotted'>Price per share</p>
                        <p>$1.00</p>
                    </div>
                    <button className='border-[1px] border-solid border-black mx-auto flex items-center justify-center w-full h-12 rounded-full text-[1.1rem] bg-black text-white hover:bg-white hover:text-black mt-8 '>Buy shares</button> </div>
                <br /> <hr />
                <div className='flex py-6 px-4 justify-between'>
                    <p>86% funded</p>
                    <p className='text-[#8d8d8d]'>1703 investor</p>
                </div>
                <div class="lg:w-full h-2 mx-4 lg:mx-0  bg-gray-200 rounded-lg">
                    <div class="h-full bg-black rounded-lg" style={{ width: "86%" }}></div>
                </div>
            </div>
            {
                open && <ImgPopup open={open} setOpen={setOpen} img={selectedCard.image} />
            }
        </>
    )
}

export default PropertyCardTwo