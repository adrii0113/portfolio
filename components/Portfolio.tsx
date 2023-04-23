import { motion } from "framer-motion"


import Image from "next/image";
import web1 from "../public/web1.png";
import socialapp from "../public/socialapp.png";
import moviefinder from "../public/moviefinder.png";
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
          <motion.div className="basis-1/3 flex-1 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <a href="https://socialapp-ruddy.vercel.app/">
            <Image
              className="rounded-lg h-full w-full object-cover transition-transform duration-500"
              alt=''
              layout="responsive"
              src={socialapp}
              
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-3xl font-bold text-white">Social App</h1>
             <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Página web realizada como proyecto final, la aplicación consiste en una red social en la que los usuarios tienen su propio perfil en el que pueden compartir tanto de forma escrita como mediante imágenes sus experiencias, a su vez, pueden comentar, reaccionar y seguir las diferentes publicaciones de otros usuarios a los que tengan en su lista de amigos, también esta implantado un sistema de chat en tiempo real creado mediante socket.io. 
              Este proyecto se realizó utilizando el stack MERN.</p>
              <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">Visitar web</button>
            </div>
            
            </a>
            
          </motion.div>
          <motion.div className="basis-1/3 flex-1 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <a href="https://moviewebappclone.netlify.app/">
            <Image
              className="rounded-lg object-cover hover:hover08"
              alt=''
              layout="responsive"
              src={moviefinder}
            />
             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-3xl font-bold text-white">Movie clon</h1>
             <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Proyecto realizado con el objetivo de aprender nuevas tecnologías ( NextJs, tailwindcss y typescript), este proyecto consiste en una aplicación de búsqueda de contenido audiovisual, con una página principal en la que se muestran las películas y series de televisión más vistas en el momento, también tiene la funcionalidad de poder buscar películas y series para conocer toda la información sobre ellas.</p>
              <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">Visitar web</button>
            </div>
            </a>
          </motion.div>
          {/* <motion.div className="basis-1/3 flex-1" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
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
          </motion.div> */}
        </div>
      </section>


    )



}