
import React from 'react';
import {useState } from 'react'
import { color, motion, useScroll, useSpring } from "framer-motion"
import { BsFillMoonStarsFill } from "react-icons/bs";
import './../styles/individualfeatures.module.css'
import {cv} from './../public/cv.pdf'


type Props = {}
// import './../styles/individualfeatures.module.css';

export default function Header({}: Props) {

    const [darkMode, setDarkMode] = useState(false);
    
    const {scrollYProgress} = useScroll();
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    });
    return (

    <div className={darkMode ? "dark" : ""}>
      <motion.div
        
        className="progress-bar"
        style={{ scaleX, backgroundColor:"black", color:"black", position: "fixed", top: "0", left: "0", right: "0", height: "10px", background:"#2dd4bf", transformOrigin:"0%"}}
      />

      {/* <button >hola</button> */}
      
    <motion.div/>
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
            <motion.h1 className="font-burtons text-xl" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>adrian portfolio</motion.h1>
            <ul className="flex items-center">
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              {/* <a href = {cv} target = "_blank">Resume</a> */}
                  
                
              </motion.li>
            </ul>
          </motion.nav>
          </div>


)


}



