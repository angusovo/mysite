import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import HeroBg from "./HeroBg";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Hello, this is Angus", "A Self-taught developer"],
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col sapce-y-8 items-center justify-center text-center overflow-hidden">
      {/* <HeroBg /> */}
      <Image
        className="relative rounded-full h-42 w32 mx-auto"
        src="/propic.jpg"
        width={150}
        height={150}
      />
      <div className="z-20">
        <h1 className="text-sm mt-5 pb-2 tracking-[10px] text-gray-400">
          SOFTWARE DEVELOPER
        </h1>
        <h1 className="text-5xl lg:text-6xl font-semibold scroll-px-10">
          <span>{text}</span>
          <Cursor cursorColor="lightgray" />
        </h1>
        <div className="mt-10">
          <Link href={"#about"}>
            <button className="heroButton">ABOUT</button>
          </Link>
          <Link href={"#experience"}>
            <button className="heroButton">EXPERIENCE</button>
          </Link>
          <Link href={"#skills"}>
            <button className="heroButton">SKILLS</button>
          </Link>
          <Link href={"#projects"}>
            <button className="heroButton">PROJECTS</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
