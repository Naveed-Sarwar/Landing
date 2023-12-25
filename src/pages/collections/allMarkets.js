import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { ImArrowUpRight2 } from "react-icons/im";

const allMarkets = () => {


    const [openInterset, setOpenInterest] = useState(false);
    const trendingMarkets = [
        { num: 1, title: "Kondapur", city: "West Hederabad", price: "9,450", growthRate: "76.6", },
        { num: 2, title: "Gachibowli", city: "West Hederabad", price: "9,050", growthRate: "86.6", },
        { num: 3, title: "Nallagandla", city: "West Hederabad", price: "9,250", growthRate: "69.7", },
        { num: 4, title: "Miyapur", city: "North Hederabad", price: "6,650", growthRate: "87.3", },
        { num: 5, title: "Kotapet", city: "West Hederabad", price: "9,750", growthRate: "82.2", },
        { num: 6, title: "Manikonda", city: "West Hederabad", price: "6,950", growthRate: "69.5", },
        { num: 7, title: "Tellapur", city: "West Hederabad", price: "6,800", growthRate: "44.7", },
        { num: 8, title: "Narsingi", city: "West Hederabad", price: "9,250", growthRate: "110.2", },
        { num: 9, title: "Kompally", city: "Secunderabad", price: "5,600", growthRate: "55.6", },
        { num: 10, title: "Pragathi Nagar", city: "North Hederabad", price: "6,350", growthRate: "86.8", },
        { num: 11, title: "Bachupally", city: "North Hederabad", price: "5,700", growthRate: "100", },
        { num: 12, title: "Nizampet", city: "North Hederabad", price: "5,100", growthRate: "50", },
        { num: 13, title: "Hi Tech City", city: "West Hederabad", price: "11,950", growthRate: "91.2", },
        { num: 14, title: "Kukatpally", city: "North Hederabad", price: "6,000", growthRate: "53.8", },
        { num: 15, title: "Lingampally", city: "West Hederabad", price: "9,250", growthRate: "71.3", },
        { num: 16, title: "Nanakramguda", city: "West Hederabad", price: "10,400", growthRate: "63.8", },
        { num: 17, title: "Beeramguda", city: "North Hederabad", price: "4,150", growthRate: "50.9", },
        { num: 18, title: "Financial District", city: "West Hederabad", price: "9,650", growthRate: "54.4", },
        { num: 19, title: "Puppalaguda", city: "West Hederabad", price: "8,350", growthRate: "94.2", },
        { num: 20, title: "Banjara Hills", city: "Central Hederabad", price: "10,050", growthRate: "46.7", },
        { num: 21, title: "Hafeezpet", city: "West Hederabad", price: "7,500", growthRate: "50", },
        { num: 22, title: "Madhapur", city: "West Hederabad", price: "10,900", growthRate: "69", },
        { num: 23, title: "Sainikpuri", city: "Secunderabad", price: "5,500", growthRate: "71.9", },
        { num: 24, title: "Attapur", city: "South Hederabad", price: "5,100", growthRate: "37.8", },
        { num: 25, title: "Gopanpally", city: "West Hederabad", price: "8,450", growthRate: "101.2", },
        { num: 26, title: "Madinaguda", city: "West Hederabad", price: "6,300", growthRate: "55.6", },
        { num: 27, title: "LB Nagar", city: "East Hederabad", price: "5,500", growthRate: "57.1", },
        { num: 28, title: "Mehdipatnam", city: "West Hederabad", price: "6,350", growthRate: "58.8", },
        { num: 29, title: "Appa Junction", city: "West Hederabad", price: "7000", growthRate: "47.4", },
        { num: 30, title: "Moti Nagar", city: "Central Hederabad", price: "9,750", growthRate: "97", },
        { num: 31, title: "Jubilee Hills", city: "Central Hederabad", price: "11,250", growthRate: "71.8", },
        { num: 32, title: "Begumpet", city: "Secunderabad", price: "7,750", growthRate: "68.5", },
        { num: 33, title: "Shaikpet", city: "Central Hederabad", price: "8,850", growthRate: "68.6", },
        { num: 34, title: "Gajulramaram", city: "North Hederabad", price: "4,950", growthRate: "45.6", },
        { num: 35, title: "Khajaguda", city: "West Hederabad", price: "9,650", growthRate: "60.8", },
        { num: 36, title: "Malkajgiri", city: "Secunderabad", price: "4,200", growthRate: "90.9", },
        { num: 37, title: "Rejendra Nagar", city: "South Hyderabad", price: "7,200", growthRate: "50", },
        { num: 38, title: "Pocharam", city: "East Hyderabad", price: "3,700", growthRate: "32.1", },
        { num: 39, title: "Sanath Nagar", city: "North Hyderabad", price: "8,900", growthRate: "71.2", },
        { num: 40, title: "Uppal", city: "East Hyderabad", price: "3,600", growthRate: "10.8", },
        { num: 41, title: "5th Phase KPHB", city: "West Hyderabad", price: "9,900", growthRate: "41.4", },
        { num: 42, title: "Tarnaka", city: "Secunderabad", price: "6,450", growthRate: "84.3", },
        { num: 43, title: "Moosapet", city: "North Hyderabad", price: "7,100", growthRate: "56", },
        { num: 44, title: "Serlingampally", city: "West Hyderabad", price: "5,900", growthRate: "29.7", },
        { num: 45, title: "Masab Tank", city: "Central Hyderabad", price: "6,000", growthRate: "50", },
        { num: 46, title: "Neknampur", city: "West Hyderabad", price: "6,100", growthRate: "52.5", },
        { num: 47, title: "P Janardhan Reddy", city: "West Hyderabad", price: "5,900", growthRate: "29.7", },
        { num: 48, title: "Banglore Highway", city: "Rest of Hyderabad", price: "9,650", growthRate: "54.4", },
    ]

    const list = [
        {
            title: "San Francisco",
            openInterset: "$4,364.23",
            totalDeposit: "$84,451.06",
            short: "41.4%",
            long: "58.5%",
            price: "$900.02",
            percentage: "0.83",
            city: "California",
        },

        {
            title: "Paris",
            openInterset: "$3,950.55",
            totalDeposit: "30,756.36",
            short: "8.5%",
            long: "91.4%",
            price: "£10,507.81",
            percentage: "0.54",
            city: "France",
        },

        {
            title: "Miami Beach",
            openInterset: "$2,445,95",
            totalDeposit: "$57,352.28",
            short: "79.6%",
            long: "20.3%",
            price: "$571.33",
            percentage: "3.81",
            city: "Florida",
        },
        {
            title: "Brooklyn",
            openInterset: "$1,282.97",
            totalDeposit: "$54,137.81",
            short: "71.1%",
            long: "28.8",
            price: "$598.11",
            percentage: "0.32",
            city: "New York",
        },
        {
            title: "New York",
            openInterset: "$1,219.29",
            totalDeposit: "$79,311.40",
            short: "71.1%",
            long: "28.8%",
            price: "$544.71",
            percentage: "2.02",
            city: "New York",
        },
        {
            title: "Washington",
            openInterset: "$1,215.19",
            totalDeposit: "$64,865.74",
            short: "4.4%",
            long: "95.5%",
            price: "$544.71",
            percentage: "2.65",
            city: "DC",
        },


        {
            title: "Phoenix",
            openInterset: "$1,209.16",
            totalDeposit: "$33,481.13",
            short: "49.3%",
            long: "50.6%",
            price: "$273.04",
            percentage: "1.44",
            city: "Arizona",
        },
        {
            title: "Las Vages",
            openInterset: "$1,108.65",
            totalDeposit: "$43,453.04",
            short: "13.9%",
            long: "86.0%",
            price: "$245.07",
            percentage: "2.03",
            city: "Nevada",
        },

        {
            title: "Austin",
            openInterset: "$821.32",
            totalDeposit: "$45,885.01",
            short: "22.4%",
            long: "77.5%",
            price: "310.60",
            percentage: "3.86",
            city: "Texas",
        },
        {
            title: "United States of America",
            openInterset: "$708.05",
            totalDeposit: "$35,242.91",
            short: "26.7%",
            long: "73.2%",
            price: "$206.46",
            percentage: "1.81%",
            city: "USA",
        },


        {
            title: "Los Angeles",
            openInterset: "$646.94",
            totalDeposit: "$51,040.81",
            short: "62.5%",
            long: "37.4%",
            price: "$605.44",
            percentage: "1.11%",
            city: "California",
        },


        {
            title: "Chicago",
            openInterset: "$608.80",
            totalDeposit: "$65,366.66",
            short: "35.2%",
            long: "64.7%",
            price: "$232.06",
            percentage: "7.86",
            city: "IIIinois",
        },
        {
            title: "Atlanta",
            openInterset: "$410.64",
            totalDeposit: "$52,652.94",
            short: "10.5%",
            long: "89.4%",
            price: "281.48",
            percentage: "0.16",
            city: "Georgia",
        },
        {
            title: "Denver",
            openInterset: "$320.92",
            totalDeposit: "$54,570.95",
            short: "44.2%",
            long: "55.7%",
            price: "$442.52",
            percentage: "6.70",
            city: "Colorado",
        },
        {
            title: "Portland",
            openInterset: "$275.18",
            totalDeposit: "$59,989.73",
            short: "84.0%",
            long: "15.9%",
            price: "$313.46",
            percentage: "1.55",
            city: "Oregon",
        },
        {
            title: "Boston",
            openInterset: "$229.26",
            totalDeposit: "$63,656.75",
            short: "82.2%",
            long: "17.7%",
            price: "$616.48",
            percentage: "5.89",
            city: "Massachusetts",
        },
        {
            title: "Seattle",
            openInterset: "$224.82",
            totalDeposit: "$40,124.04",
            short: "88.6%",
            long: "11.3%",
            price: "$567.79",
            percentage: "0.87",
            city: "Washington",
        },

        {
            title: "Philadelphia",
            openInterset: "$216.17",
            totalDeposit: "$61,485.16",
            short: "61.5%",
            long: "38.4%",
            price: "$181.18",
            percentage: "7.48",
            city: "Pennsylvania",
        },

        {
            title: "lle-de-France",
            openInterset: "$123.34",
            totalDeposit: "$20,116.61",
            short: "8.8%",
            long: "91.1%",
            price: "£5,773.98",
            percentage: "2.75",
            city: "France",
        },

    ]
    return (
        <div className='bg-black min-h-screen px-4 lg:px-28'>
            <br />
            <br />
            <br />
            <div>
                <div className='flex items-center gap-x-4'>
                    <svg width="60" height="60" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 25.5C20.1274 25.5 25.5 20.1274 25.5 13.5C25.5 6.87258 20.1274 1.5 13.5 1.5C6.87257 1.5 1.5 6.87258 1.5 13.5C1.5 20.1274 6.87257 25.5 13.5 25.5Z" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.6474 1.52838C12.7469 1.96888 12.4769 2.28859 12.2069 2.5941C11.9085 2.94934 11.4112 3.22643 11.5675 3.7735C11.8588 4.8108 14.1181 4.42714 13.0808 6.03282C12.7682 6.52305 12.214 6.64383 12.0435 6.67936C11.198 6.84277 10.1891 6.26018 9.44313 6.8854C8.58345 7.61009 9.35788 8.56923 8.98132 9.37208C8.77529 9.80547 8.33479 9.96177 8.31347 9.96888C8.04349 10.0683 7.88717 9.99019 6.99197 9.81968C6.48042 9.72021 5.45733 9.52838 5.57101 10.4165C5.65627 11.1412 6.74331 11.4183 7.04171 12.0719C7.07723 12.1572 7.333 12.7255 7.01328 13.1874C6.7433 13.5781 6.26728 13.6207 6.16781 13.6278C5.74152 13.6492 5.42893 13.4218 5.25131 13.2868C4.39163 12.6332 4.11453 11.7238 3.02039 11.3046C2.55858 11.127 2.12519 11.0559 1.75574 11.0275" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.84544 15.5049C9.30014 15.0644 9.86142 14.7589 10.373 14.6878C10.785 14.6381 11.2042 14.7944 11.5879 14.9081C12.5968 15.2065 13.7122 15.8459 14.7637 15.9241C15.4884 15.9809 15.8792 15.7962 16.3907 16.0804C17.4564 16.6772 17.151 17.7855 16.8454 18.7234C16.3694 20.187 15.936 20.9401 15.801 21.1745C15.5097 21.6719 15.1616 22.29 14.5577 22.4108C13.9893 22.5244 13.293 22.5386 12.952 23.0999C12.5044 23.8317 12.8312 25.6932 11.4032 24.6772C10.7708 24.2296 9.9609 22.901 9.83302 22.1621C9.71223 21.4658 10.0319 20.7482 9.98221 20.0378C9.89695 18.9365 8.98754 19.0644 8.38363 18.4392C7.52395 17.544 8.00708 16.3077 8.85255 15.4978L8.84544 15.5049Z" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19.3259 3.00623C18.8499 3.14122 18.5444 3.31173 18.5444 3.31173C17.5071 3.87301 17.2584 4.62612 16.9458 5.68473C16.7185 6.44495 16.4059 7.24779 15.8162 7.83038C15.2691 8.37745 14.3384 8.5977 13.9121 9.23713C13.3792 10.0471 13.6137 11.0133 14.2389 11.6883C14.9352 12.4414 15.8801 12.5764 16.143 12.6119C17.3508 12.754 19.2833 12.0577 19.6954 13.6918C19.9369 14.6723 20.0861 15.532 20.1998 16.1217C20.3277 16.8037 20.6758 18.4378 21.5852 18.4947C23.2904 18.6155 23.4396 14.8002 23.4183 13.7913C23.3828 12.0577 22.5728 9.52132 24.3632 8.39166" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    <div>
                        <p className='text-white text-[40px]'>All Markets</p>
                        <p className='text-slate-400'>All markets are down
                            0.95% in aggregate over the past 3 months.</p>
                    </div>
                </div>
            </div>

            <div className="w-full overflow-x-auto">
                <div className='lg:flex justify-between py-4'>
                    <p className='text-[#dee0e3] text-2xl'>19 Markets</p>
                    <div className='flex items-center gap-x-4'>
                        <div className='flex items-center text-[14px] lg:text-[18px] mt-1 lg:mt-0 w-1/2 lg:w-44 text-slate-400 border-[1px] border-slate-400 rounded-lg px-2 py-2 justify-between'>
                            <button onClick={() => setOpenInterest(!openInterset)}>Open Interest</button>
                            <FiChevronDown />   </div>
                        {
                            openInterset && 
                            
                            <div className='absolute -top-6'>
                                <div className='border-slate-400 bg-black text-slate-400 absolute mt-64 w-44 border-[1px] rounded-lg'>
                                <p className='py-2 px-2 cursor-pointer'>Featured</p>
                                <p className='py-2 px-2 cursor-pointer'>Open Interest</p>
                                <p className='py-2 px-2 cursor-pointer'>Skewed Long</p>
                                <p className='py-2 px-2 cursor-pointer'>Skewed Short</p>
                                <p className='py-2 px-2 cursor-pointer'>Total Deposits</p>
                                <p className='py-2 px-2 cursor-pointer'>Performance (Asc.)</p>
                                <p className='py-2 px-2 cursor-pointer'>Performance (Desc.)</p>



                                </div>

                            </div>
                        }
                        <div className='flex items-center w-1/2 text-[14px] lg:text-[18px] lg:w-44 text-slate-400 border-[1px] border-slate-400 rounded-lg px-2 py-2 justify-between'>
                            <button onClick={() => setOpenInterest(!openInterset)}>Months</button>
                            <FiChevronDown />   </div>
                    </div>
                </div>
                <table className="w-full table-auto">

                    <thead>

                        <tr className=" text-gray-600 uppercase text-sm leading-normal">
                            <th className="py-3 px-6 text-left">City Indexes</th>
                            <th className="py-3 px-6 text-left">Properties</th>
                            {/* <th className="py-3 px-6 text-left">Total Deposits</th> */}
                            {/* <th className="py-3 px-6 text-left">Market Sentiment</th> */}
                            <th className="py-3 px-6 text-center">Price</th>

                        </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm font-light">
                        {
                            trendingMarkets?.map((item) => {
                                return <tr className="border-y-[1px] border-[#303030] cursor-pointer hover:bg-[#121212]">
                                  <td className="py-3 px-6 text-left whitespace-nowrap">
                                        <div>
                                            <p className='text-white text-[20px] '>
                                                {item?.num}
                                            </p>
                                        </div>
                                    </td>       <td className="py-3 px-6 text-left whitespace-nowrap">
                                        <div>
                                            <p className='text-white text-[20px] '>
                                                {item?.title}
                                            </p>
                                            <div className='flex items-center gap-x-2 pt-1'>
                                                {/* {
                                                    item?.city == "France" ? <> 🇫🇷 </> : <> 🇺🇸 </>
                                                }    */}
                                                   <p className='text-[14px] font-semibold'>{item?.city}</p></div>
                                        </div>
                                    </td>
                                    {/* <td className="py-3 px-6 text-[#9EACA5] text-[16px] text-left">{item?.openInterset}
                                    </td> */}
                                    {/* <td className="py-3 px-6 text-[#9EACA5] text-[16px] text-left">{item?.totalDeposit}</td> */}
                                    {/* <td className="py-3 px-6 text-left"> */}
                                        {/* <div className="flex w-44 justify-center items-center">
                                            <div className="w-1/2">
                                                <div className="h-1 rounded-sm bg-[#4fe3b2]" style={{ width: `${item?.long}` }} />
                                                <p className='pt-1'>Long <span className='text-white'>{item?.short}</span></p>
                                            </div>
                                            <div className="w-1/2">
                                                <div className="h-1 rounded-sm bg-[#fbc1c1]" style={{ width: `${item?.short}` }} />
                                                <p className='pt-1'>Short <span className='text-white'>{item?.long}</span> </p>
                                            </div>
                                        </div> */}

                                                        {/* </td> */}
                                    <td className="py-3 px-6 text-center">
                                        <div className='flex items-center text-white text-[16px] justify-center gap-x-1'>
                                            <ImArrowUpRight2 /> {item?.growthRate}%
                                        </div>
                                        <p>₹{item?.price} /sq.ft</p>    {/* Add Action Buttons */}
                                    </td>
                                    <td>
                                        <button className='hover:bg-white rounded-lg px-4 py-2 '>Trade</button>
                                    </td>
                                </tr>
                            })
                        }



                        {/* Add more table rows as needed */}
                    </tbody>
                </table>
            </div>
            <br />
            <br />
        </div>
    )
}

export default allMarkets