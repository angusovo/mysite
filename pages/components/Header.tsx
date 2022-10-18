import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto p-5 xl:items-center z-20">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row it ems-center"
      >
        {/* social icon */}
        <SocialIcon
          url="https://github.com/angusovo"
          bgColor="transparent"
          fgColor="gray"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/ka-to-yip-16731318b/"
          bgColor="transparent"
          fgColor="gray"
        />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center justify-center"
      >
        <SocialIcon
          className="curosor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <Link href={"#contact"}>
          <p className="cursor-pointer uppercase hidden md:inline-flex text-sm">
            Contact Me!
          </p>
        </Link>
      </motion.div>
    </header>
  );
}
