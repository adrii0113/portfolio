
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
        <div>
          <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            Since 
            <span className="text-teal-500"> agencies </span>
            consulted for <span className="text-teal-500">startups </span>
            and c
          </p>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            
          </p>
        </div>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <div className="basis-1/3 flex-1 ">
            <a href="https://socialapp-ruddy.vercel.app/">
            <Image
              className="rounded-lg object-cover"
              alt=''
              layout="responsive"
              src={web1}
            />
            </a>
          </div>
          <div className="basis-1/3 flex-1">
            <Image
              className="rounded-lg object-cover hover:hover08"
              alt=''
              layout="responsive"
              src={web2}
            />
          </div>
          <div className="basis-1/3 flex-1">
            <Image
              className="rounded-lg object-cover hover:"
              alt=''
              layout="responsive"
              src={web3}
            />
          </div>
          <div className="basis-1/3 flex-1">
            <Image
              className="rounded-lg object-cover"
              alt=''
              layout="responsive"
              src={web4}
            />
          </div>
          <div className="basis-1/3 flex-1">
            <Image
              className="rounded-lg object-cover"
              alt=''
              layout="responsive"
              src={web5}
            />
          </div>
          <div className="basis-1/3 flex-1">
            <Image
              className="rounded-lg object-cover"
              alt=''
              layout="responsive"
              src={web6}
            />
          </div>
        </div>
      </section>


    )



}