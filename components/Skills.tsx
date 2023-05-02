import React from 'react';
import Image from "next/image";


import { motion } from "framer-motion"

type Props = {}


//images
import javascriptlogo from "../public/javascript-svgrepo-com.svg";
import reactlogo from "../public/reactlogo.svg"
import javalogo from "../public/java.svg"
import htmllogo from "../public/htmllogo.svg"
import nodejslogo from "../public/nodejs.svg"
import mongodblogo from "../public/mongodblogo.svg"
import mysqllogo from "../public/mysqllogo.svg"
import csslogo from "../public/csslogo.svg"
import expresslogo from "../public/express.svg"

import phplogo from "../public/php-1.svg"
import php from "../public/php-logo.svg"


export default function Skills({}: Props){


    return (

    <section>
    <div className="text-center">
     
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl "><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Tecnhology stack</span></h1>
      
    </div>
   
    <div className="lg:flex gap-10">
      <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1 flex flex-wrap justify-between">
    
        <h1 className="mb-4 mt-0 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl mm:ml-3"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 sm:bg-slate-50 md:ml-3 lg:w-48">Front-end stack</span></h1>

       
        <motion.div className='ml-2'  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}><Image src={javascriptlogo} width={90} height={80} alt="design" /></motion.div>
        <motion.div  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}><Image src={reactlogo} width={100} height={100} alt="design" /></motion.div>
        <motion.div  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}><Image src={htmllogo} width={100} height={100} alt="design" /></motion.div>
        <motion.div  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}><Image src={csslogo} width={100} height={100} alt="design" /></motion.div>
      </div>
      
      <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1 flex flex-wrap align-items: center justify-between">
        
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Back-end stack</span></h1>

        <motion.div  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}><Image src={javalogo} width={100} height={100} alt="design" /></motion.div>
        <motion.div  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}><Image src={nodejslogo} width={100} height={100} alt="design" /></motion.div>
        <motion.div  className='mt-6' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}><Image  src={phplogo} width={100} height={100} alt="design" /></motion.div>
        <motion.div  className='mt-9 ml-3' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}><Image src={expresslogo} width={100} height={100} alt="design" /></motion.div>
      </div>


      <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1 flex flex-wrap justify-between">
      
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Database stack</span></h1>
        <motion.div  className='ml-5 mt-3' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}><Image src={mongodblogo} width={100} height={100} alt="design" /></motion.div>
        <motion.div  className='ml-5' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}><Image src={mysqllogo} width={100} height={100} alt="design" /></motion.div>
        
       
      </div>
      
    </div>
  </section>

    )
}