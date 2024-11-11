"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import TwitterIcon from "../../public/twitter-icon.svg";
import InstagramIcon from "../../public/instagram-icon.svg";


const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <div className="text-white mb-4 text-1xl sm:text-1xl lg:text-4xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Nishan Dangal",
                2000,
                // "Software Developer",
                // 2000,
              ]}
              wrapper="span"
              speed={0}
              repeat={Infinity}
              cursor={false}
            />
          </div>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl text-left">
          Aspiring software developer with a passion in Software and Application Development.
          Eager to leverage my academic foundation and passion for coding.</p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-purple-500 to-blue-500 hover:bg-slate-800 text-white"
            >
              Contact Info
            </Link>
            <a href="/resume.pdf" target="_blank" rel="nopener noreferrer"
            className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-purple-500 to-blue-500 hover:bg-blue-200 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-white-400 rounded-full px-5 py-2">
                Download Resume
               </span>
            </a>
          </div>
          <br></br>
          <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/nishan-dangal"  target="_blank" rel="noopener noreferrer">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/nishan-dangal-2aa87317a/"  target="_blank" rel="noopener noreferrer">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
          <Link href="https://x.com/nishandangal8"  target="_blank" rel="noopener noreferrer">
            <Image src={TwitterIcon} alt="Twitter Icon" />
          </Link>
          <Link href="https://www.instagram.com/nishan.dangal_/"  target="_blank" rel="noopener noreferrer">
            <Image src={InstagramIcon} alt="Instagram Icon" />
          </Link>
        </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#b5d8d8] w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] relative">
            <Image
              src="/images/profile.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={250}
              height={250}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
