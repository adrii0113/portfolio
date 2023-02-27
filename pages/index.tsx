

import React from "react";

import { color, motion, useScroll } from "framer-motion"

import deved from "../public/dev-ed-wave.png";

import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";

// Components
import Head from '@/components/Head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Presentation from '@/components/Presentation';
import Skills from '@/components/Skills';
import Portfolio from "@/components/Portfolio";


import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import individualfeatures from '@/styles/individualfeatures.module.css';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const {scrollYProgress} = useScroll();
  return (
    <div className="dark">

      {/* HEAD */}
      <Head></Head>

      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
     

        <section className="min-h-screen">
          {/* HEADER */}
          <Header></Header>
          {/* OWN INFORMATION SECTION */}
          <Presentation></Presentation>
        </section>

        {/* SKILLS SECTION */}
        <Skills></Skills>
        {/* PORTFOLIO SECTION */}
        <Portfolio></Portfolio>
        <Footer></Footer>
      </main>
    
    </div>
  );
}