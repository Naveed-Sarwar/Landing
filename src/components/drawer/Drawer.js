import BuyLandCard from '@/components/buyLandCard/BuyLandCard';
import Header from '@/components/header/Header';
import React, { useState } from 'react';
import LandMap from '@/components/map/LandMap';
import Link from 'next/link';
import { BsSearch, BsStars, BsStickiesFill } from 'react-icons/bs';
import Logo from "../../../assets/logo.png";
import Image from 'next/image';
import { SiAdguard } from 'react-icons/si';
import { GiProgression } from "react-icons/gi";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { HiArrowDownCircle, HiArrowUpCircle } from "react-icons/hi2";
import { GoArrowSwitch } from "react-icons/go";
import IconImg from "../../../assets/icon.png";
import Plot from "../../../assets/plot.png";
import { HiDocumentText } from 'react-icons/hi';
import { IoIosArrowDown } from 'react-icons/io';
import SliderTwo from '@/components/slider/SliderTwo';
import { BiSolidLandscape } from "react-icons/bi";
import { BsFillPersonFill } from 'react-icons/bs';
import { AiFillPropertySafety, AiOutlineFire, AiOutlineStock, AiTwotoneTool } from "react-icons/ai";
import { FaTools } from "react-icons/fa";
import { FiDollarSign } from "react-icons/fi";
import { SiArtixlinux } from "react-icons/si";
import Vacation from '@/components/VacationRentals';


export const list = [
    // { title: "Invest", icon: <FiDollarSign fontSize={24} />, route: "https://property-page-blue.vercel.app/" },
    { title: "Property", icon: <FiDollarSign fontSize={24} />, route: "/property" },
    { title: "Buy Land", icon: <BiSolidLandscape fontSize={24} />, route: "/buy" },
    { title: "Investment Analyzer", icon: <SiArtixlinux fontSize={24} />, route: "/Investment" },
    { title: "Portfolio", icon: <BsFillPersonFill fontSize={24} />, route: "https://profound-flea.10web.site/" },
    { title: "On ramp a property", icon: <AiFillPropertySafety fontSize={24} />, route: "http://aasthi.ai" },
    { title: "Use Your Land", icon: <FaTools fontSize={22} />, route: "http://aasthi.ai/" },
    { title: "Build on Aasthi", icon: <AiTwotoneTool fontSize={24} />, route: "http://aasthi.ai" },
    { title: "Buy Stocks", icon: <AiOutlineStock fontSize={24} />, route: "stocks" },
    { title: "Contest", icon: <AiOutlineFire  fontSize={24} />, route: "/contest" }

];


const Drawer = ({ main }) => {

    const [show, setShow] = useState(false);
    const [vacation, setVacation] = useState(false);
    const [basic, setBasic] = useState(false);
    const [onChain, setOnChain] = useState(false);
    const [opreating, setOperating] = useState(false);
    const [pass, setPass] = useState(false);
    const [documents, setDocuments] = useState(false);
    return (
        <div className='bg-[#1a1212] min-h-screen' >
            <Header />
            <div className='grid grid-cols-12 gap-8'>
                <div className=' hidden lg:block md:col-span-3 lg:col-span-2 pt-12'>
                    {
                        list?.map((item) => {
                            return <div className='flex flex-col py-3 text-white rounded-md hover:bg-[rgba(134,177,247,0.5)]'>
                                <Link href={`${item?.route}`}>
                                    <div className='flex ml-12  text-[#d1d5db] gap-x-3 cursor-pointer'>   <p>{item.icon}</p> <p>{item.title}</p></div>
                                </Link>
                            </div>
                        })
                    }
                </div>
                <div className='col-span-12 lg:col-span-10'>
                    {main}       {/* <LandMap /> */}
                </div>


            </div>
        </div>
    )

}


export default Drawer