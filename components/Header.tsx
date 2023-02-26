
import React from 'react';
import {useState } from 'react'

type Props = {}
import { motion } from "framer-motion"


import { BsFillMoonStarsFill } from "react-icons/bs";
export default function Header({}: Props) {

    const [darkMode, setDarkMode] = useState(false);
return (

    <div className={darkMode ? "dark" : ""}>
    <motion.nav initial={{
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
            duration:1.5,

          }}
          className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">code portfolio</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8 hover:bg-black"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </motion.nav>
          </div>


)


}



