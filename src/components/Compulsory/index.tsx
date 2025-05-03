import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import programmingFundamentals from '../../../public/programming_fundamentals.jpg'
import nextjs from '../../../public/nextjs.jpg'
import metaverse from '../../../public/metaverse.jpg'
import iot from '../../../public/iot.jpg'
import genomics from '../../../public/genomics.jpg'
import automation from '../../../public/automation.jpg'
import AI from '../../../public/AI.jpg'
import cloudComputing from '../../../public/cloudComputing.jpg'
import earn_as_you_learn from '../../../public/earn_as_you_learn.jpg'

const Compulsory = () => {
  return (
    <>
    <div className='xl:w-[1300px] lg:w-[90%] w-[95%] m-auto mt-10'>
      <h1 className='lg:text-4xl sm:text-4xl text-2xl sm:text-left text-center text-main font-extrabold mt-10'>Core Courses Sequence</h1>
      <div className='grid xl-lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 xl-lg:gap-10 gap-5 mt-10'>
        <Link href={"/Compulsory/1"} className="hover:scale-105 duration-300 transition-all">
        <div className='overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold'>
            <div>
                <Image alt="programming fundamentals" src={programmingFundamentals} className="object-cover w-full"/>
            </div>
            <div className='px-4 flex justify-center items-center h-[70px] '>
                <text>
                    Programming Fundamentals
                </text>
            </div>
        </div>
        </Link>
        <Link href={"/Compulsory/2"} className="hover:scale-105 duration-300 transition-all">
        <div className='overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold'>
            <div>
                <Image alt="nextjs" src={nextjs} className="object-cover w-full"/>
            </div>
            <div className='px-4 flex justify-center items-center h-[70px] '>
                <text>
                    Web2 Using NextJs
                </text>
            </div>
        </div>
        </Link>
        <Link href={"/Compulsory/3"} className="hover:scale-105 duration-300 transition-all">
        <div className='overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold'>
            <div>
                <Image alt="earn_as_you_learn" src={earn_as_you_learn} className="object-cover w-full"/>
            </div>
            <div className='px-4 flex justify-center items-center h-[70px] '>
                <text>
                    Earn as You Learn
                </text>
            </div>
        </div>
        </Link>
      </div>
    </div>
    <div className='xl:w-[1300px] lg:w-[90%] w-[95%] m-auto mt-10 mb-10'>
      <h1 className='lg:text-4xl sm:text-4xl text-2xl sm:text-left text-center text-main font-extrabold mt-10'>Advance Courses</h1>
      <div className='grid xl-lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 xl-lg:gap-10 gap-5 mt-10'>
        <Link href={"/tracks/ai"} className="hover:scale-105 duration-300 transition-all">
        <div className='overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold'>
            <div>
                <Image alt="ai" src={AI} className="object-cover w-full"/>
            </div>
            <div className='px-4 flex justify-center items-center h-[70px] '>
                <text>
                Artificial Intelligence
                </text>
            </div>
        </div>
        </Link>
        <Link href={"/tracks/wmd"} className="hover:scale-105 duration-300 transition-all">
        <div className='overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold'>
            <div>
                <Image alt="metaverse" src={metaverse} className="object-cover w-full"/>
            </div>
            <div className='px-4 flex justify-center items-center h-[70px] '>
                <text>
                Web3 and Metaverse
                </text>
            </div>
        </div>
        </Link>
        <Link href={"/tracks/cnc"} className="hover:scale-105 duration-300 transition-all">
        <div className='overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold'>
            <div>
                <Image alt="cloudComputing" src={cloudComputing} className="object-cover w-full"/>
            </div>
            <div className='px-4 flex justify-center items-center h-[70px] '>
                <text>
                Cloud-Native Computing
                </text>
            </div>
        </div>
        </Link>
        <Link href={"/tracks/iot"} className="hover:scale-105 duration-300 transition-all">
        <div className='overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold'>
            <div>
                <Image alt="iot" src={iot} className="object-cover w-full"/>
            </div>
            <div className='px-4 flex justify-center items-center h-[70px] '>
                <text>
                Ambient Computing and 10T
                </text>
            </div>
        </div>
        </Link>
        <Link href={"/tracks/gbs"} className="hover:scale-105 duration-300 transition-all">
        <div className='overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold'>
            <div>
                <Image alt="genomics" src={genomics} className="object-cover w-full"/>
            </div>
            <div className='px-4 flex justify-center items-center h-[70px] '>
                <text>
                Genomics and Boinformatics
                </text>
            </div>
        </div>
        </Link>
        <Link href={"/tracks/npa"} className="hover:scale-105 duration-300 transition-all">
        <div className='overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold'>
            <div>
                <Image alt="automation" src={automation} className="object-cover w-full"/>
            </div>
            <div className='px-4 flex justify-center items-center h-[70px] '>
                <text>
                Network Programmability and Automation
                </text>
            </div>
        </div>
        </Link>
      </div>
    </div> 
    </>
  )
}

export default Compulsory
