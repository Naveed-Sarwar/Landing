import Image from 'next/image'
import React from 'react'


const contest = () => {


    const data = [
        { title: "434..343", num: 1, position: 3, price: "1,333.00", percentage: 16.50, total: 1.52 },
        { title: "224..226", num: 2, position: 3, price: "1,443.00", percentage: 16.50, total: 1.52 },
        { title: "114..333", num: 3, position: 3, price: "1,689.00", percentage: 16.50, total: 1.52 },
        { title: "214..997", num: 4, position: 3, price: "1,888.00", percentage: 16.50, total: 1.52 },
        { title: "344..667", num: 5, position: 3, price: "1,975.00", percentage: 16.50, total: 1.52 },
        { title: "774..445", num: 6, position: 3, price: "1,545.00", percentage: 16.50, total: 1.52 },
        { title: "889..332", num: 7, position: 3, price: "1,345.00", percentage: 16.50, total: 1.52 },
        { title: "667..239", num: 8, position: 3, price: "1,234.00", percentage: 16.50, total: 1.52 },
        { title: "224..222", num: 9, position: 3, price: "1,368.00", percentage: 16.50, total: 1.52 },
        { title: "111..909", num: 10, position: 3, price: "1,980.00", percentage: 16.50, total: 1.52 },
    ]

    return (
        <div className='bg-black min-h-screen px-4 lg:px-28'>
            <br />
            <br />

            <br />

            <br />
            <br />

            <div className='grid grid-cols-12 gap-x-4'>
                <div className='col-span-12 lg:col-span-9'>
                    <p className='text-white text-2xl'>Real Estate Royale</p>
                    <p className='text-[#808080]'>Compete against real estate traders from all over the world and build the ultimate real estate empire. Trade your way to the top, earn badges, and compete to win a share of the $1,100 USDC prize pool.</p>

                    <br />
                    <div className='border-[1px] border-[#fed577]
                    flex justify-between items-center rounded-lg px-6 py-6'>
                        <div>
                            <p className='text-white'>Join the Contest!</p>
                            <p className='text-[#808080]'>Join now and start trading for your chance to win the top prize of $500 USDC.</p>
                        </div>
                        <div className=''>
                            <button className='bg-[#fed577] rounded-lg py-2 cursor-pointer px-6 text-black'>Join Contest</button>
                        </div>
                    </div>
                    <br />
                    <div className='border-[#808080] border-[1px] px-6 py-4 rounded-lg'>
                        <br />
                        <div className='flex justify-between'>
                            <div>
                                <p className='text-white text-xl'>Trade Markets to Participate</p>
                                <p className='text-[#808080]'>$5 USDC minimum open interest to be considered for the leaderboard</p>
                            </div>
                            <button className='hover:text-black text-white rounded-lg px-4 hover:bg-[#fed577]'>Explore Now</button>
                        </div>
                        <br />
                        <div className='border-[#808080] grid lg:grid-cols-2 gap-4 rounded-lg'>
                            <div className='border-[#808080] border-[1px] p-4 bg-[#121212] flex items-center justify-between text-white rounded-lg' >
                                <div>
                                    <p className='text-xl'>San Fransisco</p>
                                    <p className='text-[#808080]'>🇺🇸 California</p>

                                </div>
                                <button className='text-black rounded-lg h-8 px-4 bg-[#fed577]'>Trade</button>  </div>
                            <div className='border-[#808080] border-[1px] p-4 bg-[#121212] flex items-center justify-between text-white rounded-lg' >
                                <div>
                                    <p className='text-xl'>Washington</p>
                                    <p className='text-[#808080]'>🇺🇸 DC</p>

                                </div>
                                <button className='text-black rounded-lg h-8 px-4 bg-[#fed577]'>Trade</button>  </div>
                            <div className='border-[#808080] border-[1px] p-4 bg-[#121212] flex items-center justify-between text-white rounded-lg' >
                                <div>
                                    <p className='text-xl'>Austin</p>
                                    <p className='text-[#808080]'>🇺🇸 Taxes</p>

                                </div>
                                <button className='text-black rounded-lg h-8 px-4 bg-[#fed577]'>Trade</button>  </div>
                            <div className='border-[#808080] border-[1px] p-4 bg-[#121212] flex items-center justify-between text-white rounded-lg' >
                                <div>
                                    <p className='text-xl'>Boston</p>
                                    <p className='text-[#808080]'>🇺🇸 Massachusetts</p>

                                </div>
                                <button className='text-black rounded-lg h-8 px-4 bg-[#fed577]'>Trade</button>  </div>
                        </div>
                    </div>
                    <br />
                    <div
                        className="w-full  overflow-scroll lg:scrollbar-hide lg:relative whitespace-nowrap"

                    >

                        <table className="w-full text-black mt-8 md:mt-0">
                            <thead className="bg-[#fed577] border-[#fed577] border-[1px] h-[39px] text-left">
                                <tr>
                                    <th className="text-[#253553]  leading-[17px] text-sm font-medium p-3 pl-3">
                                        Num </th>
                                    <th className="text-[#253553]  leading-[17px] text-sm font-medium p-3 pl-3">
                                        Leaderboard
                                    </th>
                                    <th className="text-[#253553]  leading-[17px] text-sm font-medium pl-3">
                                        Open Interest

                                    </th>
                                    <th className="text-[#253553] leading-[17px] text-sm font-medium pl-3">
                                        Open Positions
                                    </th>
                                    <th className="text-[#253553] leading-[17px] text-sm font-medium pl-3 ">
                                        Annualized Return
                                    </th>
                                    <th className="text-[#253553]  leading-[17px] text-sm font-medium ">
                                        <p className="flex items-center justify-center">
                                            Total Return
                                        </p>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className='border-[#808080] border-[1px]'>
                                {
                                    data?.map((item) => {
                                        return <>
                                            <tr className='border-b-[1px] border-[#808080]' >

                                                <td className="p-3 whitespace-nowrap">
                                                    <div className="flex gap-3 items-center">

                                                        <p className="text-[#96A1B4] leading-[17px] text-sm font-medium">
                                                            {item?.num}                                            </p>
                                                    </div>
                                                </td>

                                                <td className="p-3 whitespace-nowrap">
                                                    <div className="flex gap-3 items-center">

                                                        <p className="text-[#96A1B4] leading-[17px] text-sm font-medium">
                                                            {item?.title}
                                                        </p>
                                                    </div>
                                                </td>
                                                <td className="p-3 whitespace-nowrap">
                                                    <p
                                                        className="text-white font-medium text-sm leading-[17px] cursor-pointer"
                                                    >
                                                        {item?.price}

                                                    </p>{" "}
                                                </td>

                                                <td className="p-3 text-sm whitespace-nowrap">
                                                    <p className="text-[#96A1B4] leading-[17px] text-sm font-medium">
                                                        {item?.position}
                                                    </p>
                                                </td>
                                                <td className="p-3 text-sm whitespace-nowrap relative">
                                                    <p className="text-[#D0D0D0] font-medium leading-4 text-sm">
                                                        {item?.percentage}%
                                                    </p>
                                                </td>
                                                <td className="p-3 text-sm whitespace-nowrap relative">
                                                    <div className="flex items-center justify-center gap-2">
                                                        <p className="text-[#D0D0D0] font-medium leading-4 text-sm">
                                                            {item?.total}
                                                        </p>
                                                    </div>
                                                </td>
                                            </tr>
                                        </>
                                    })
                                }
                            </tbody>
                        </table>
                <br />    </div>

                </div>
                <div className='lg:col-span-3'>
                    {/* <p className='text-white'>Real Estate Royale</p> */}
                </div>
            </div>
        </div>
    )
}

export default contest