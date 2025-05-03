"use client"
import React from 'react'
import { FaFacebookF, FaYoutube, FaTwitterSquare,FaInstagram} from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='mt-10 mb-10'>
        <footer className='bg-gray-200 py-8 px-10 text-gray-800 flex justify-around'>
            <div className='container mx-auto grid grid-cols-3  md:grid-cols-3 gap-8'>
                <div>
                <h3 className='text-xl font mb-4 font-bold'>Core Cources</h3>
                <ul className='space-y-2  text-lg'>
               <Link href="#"><li>Web2 Using Nextjs</li></Link>
               <Link href="#"><li>Programming Fundamentals</li></Link>
               <Link href="#"><li>Earn as You Learn</li></Link>
                </ul>
                </div>
                <div>
                    <h3 className='text-xl mb-4 font-bold'>Advance Cources</h3>
                    <ul className='space-y-2 text-lg'>
                  <Link href="#"><li>Web3 and Metaverse</li></Link>
                  <Link href="#"><li>Cloud-Native Computing</li></Link>
                  <Link href="#"><li>Artificial Intelligence (AI) and Deep Learning</li></Link>
                  <Link href="#"><li>Ambient Computing and 10T</li></Link>
                  <Link href="#"><li>Genomics and Boinformatics</li></Link>
                  <Link href="#"><li>Network Programmability and Automation</li></Link>
                    </ul>
                </div>
                <div>
                    <h3 className='text-xl font-bold mb-4'>Social Links</h3>
                    <ul className='flex space-x-4 mb-4'>
                     <Link href="#"><li>< FaFacebookF className='bg-blue-700 w-6 h-6 text-white pt-1 pb-1 rounded-full'/></li></Link>
                     <Link href="#"><li><FaYoutube className='bg-red-600 text-white pt-1 pb-1 w-6 h-6 rounded-full ' /></li></Link>
                     <Link href="#"><li><FaTwitterSquare className='bg-blue-400 text-white pt-1 pb-1 rounded-full w-6 h-6' /></li></Link>
                     <Link href="#"><li><FaInstagram className='instagram bg-pink-600 text-white pt-1 pb-1 rounded-full w-6 h-6'/></li></Link>
                     <Link href="#"><li><AiFillTikTok className='bg-black text-white pt-1 pb-1 rounded-full w-6 h-6'/></li></Link>
                    </ul>
                    <Link href="/education@governorsondth.com" target='_blank' className='underline text-blue-800 flex items-center gap-3'>
                    <MdEmail size={16}/>
                    /education@governorsondth.com</Link >
                </div>   
            </div>
        </footer> 
    </div>
  )
}

export default Footer
