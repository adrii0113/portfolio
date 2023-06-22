import React from 'react';

import { Typewriter, Cursor, useTypewriter } from 'react-simple-typewriter'
import { motion } from "framer-motion"

// COMPONENTS
import Aboutme from './Aboutme';
import Image from "next/image";

import { BsFillMoonStarsFill } from "react-icons/bs";
import {
    AiFillTwitterCircle,
    AiFillMail,
    AiFillLinkedin,
    AiFillGithub
  } from "react-icons/ai";

  import deved from "../public/dev-ed-wave.png";
  import avatar from "../public/avataaars (1).svg";
export default function Presentation(){
  const handleType = (count: number) => {
      // access word count number
      console.log(count)
  }
    const handleDone = () => {
      console.log(`Done after 5 loops!`)
    }

    const [text, count] = useTypewriter(
      {
        words : [
          '<Hola!/>', '<Mi nombre es Adrian/>', '<Soy un desarrollador de software en constante aprendizaje!/>'
        ],
        loop:6,
            // Cursor,
            // cursorStyle:'_',
            typeSpeed:70,
            deleteSpeed:50,
            delaySpeed:1000,
            onLoopDone:handleDone,
            onType:handleType,
      }
    )

    const [textPresentation, countPresentation] = useTypewriter(
      {
        words: [
          'Actualmente soy un desarrollador con menos de un ,',
          'actually learning and improving my development skills,',
          'scroll down to discover more about my projects,'
        ],
        loop:6,
            // Cursor,
            // cursorStyle:'_',
            typeSpeed:120,
            deleteSpeed:50,
            delaySpeed:1000,
            onLoopDone:handleDone,
            onType:handleType,
      }
    )
    return (

        <div>
            <motion.div initial={{
            x: -500,
            opacity:0,
            scale:0.5,
          }}
          animate={{
            x:0,
            opacity:1,
            scale:1,
          }}
          transition={{
            duration:2.5,

          }}
          
          className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
            
            {/* <Typewriter
            words={['<Hi/>', '<Im/>', '<Adrian/>', '<Im a junior software developer!/>']}
            loop={6}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}
          /> */}
          <span>{text}</span>
          <Cursor />
              {/* Adrian Calleja Polanco */}
            </h2>
            {/* <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Junior fullstack developer.
            </h3> */}
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              {/* <Aboutme></Aboutme> */}
              {/* {textPresentation} */}
            </p>
         
           
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              {/* <AiFillTwitterCircle /> */}
              <motion.div  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}><a href=""><AiFillMail/></a></motion.div>
              
              <motion.div  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}> <a href="https://www.linkedin.com/in/adrian-calleja-juniordeveloper/"><AiFillLinkedin /></a></motion.div>
              <motion.div  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}><a href="https://github.com/adrii0113"><AiFillGithub/></a></motion.div>
             
            </div>
            <div className='flex justify-center'>
            <motion.div className=" bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 " whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            
              <Image src={avatar} layout="fill" objectFit="cover" alt='a'/>

            </motion.div>

            </div>
          </motion.div>
           
        </div>

    )


}