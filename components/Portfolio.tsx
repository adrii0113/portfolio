import { motion } from "framer-motion"


import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";


export default function Portofolio(){

    return(

        <section className="py-10">
        <div className="text-center">
          {/* <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3> */}
          
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Projects</span></h1>
          {/* <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            Since 
            <span className="text-teal-500"> agencies </span>
            consulted for <span className="text-teal-500">startups </span>
            and c
          </p>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            
          </p> */}
        </div>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <motion.div className="basis-1/3 flex-1 " whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <a href="https://socialapp-ruddy.vercel.app/">
            <Image
              className="rounded-lg object-cover"
              alt=''
              layout="responsive"
              src={web1}
            />
            </a>
          </motion.div>
          <motion.div className="basis-1/3 flex-1" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Image
              className="rounded-lg object-cover hover:hover08"
              alt=''
              layout="responsive"
              src={web2}
            />
          </motion.div>
          <motion.div className="basis-1/3 flex-1" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Image
              className="rounded-lg object-cover hover:"
              alt=''
              layout="responsive"
              src={web3}
            />
          </motion.div>
          <motion.div className="basis-1/3 flex-1" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Image
              className="rounded-lg object-cover"
              alt=''
              layout="responsive"
              src={web4}
            />
          </motion.div>
          <motion.div className="basis-1/3 flex-1" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Image
              className="rounded-lg object-cover"
              alt=''
              layout="responsive"
              src={web5}
            />
          </motion.div>
          <motion.div className="basis-1/3 flex-1" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Image
              className="rounded-lg object-cover"
              alt=''
              layout="responsive"
              src={web6}
            />
          </motion.div>
        </div>
      </section>


    )



}