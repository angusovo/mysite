import React from "react";
import { motion } from "framer-motion";
type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col text-center md:text-left md:flex-row relative h-screen max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 tracking-[20px] text-white text-2xl">
        ABOUT
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1,
          opacity: 1,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        src="/about.jpg"
        className="mt-20 -mb-20 md:mb-0 flex-shrink-0 w-40 h-40 rounded-full object-cover md:rounded-lg md:w-[350px] md:h-[350px] xl:w-[500px] xl:h-[500px]"
      />
      <div className="space-y-5 px-0 md:px-10 mt-20">
        <h4 className="text-4xl font-semibold">Background of me</h4>
        <p>
          I'm Angus from Hong Kong &#127469;&#127472;! I love outdoor activities
          like camping&#127957;, surfing&#127940;, skiing&#127938;.
        </p>
        <p>
          I have been working as an associate application developer for the past
          year and during that time I have gained huge experience in a variety
          of web development frameworks in both front and backend.
        </p>
        <p>
          {" "}
          I am proficient in HTML,CSS,Javascript, React and Nodejs. I am also
          familiar with AWS Cloud Service.{" "}
        </p>
      </div>
    </motion.div>
  );
}

export default About;
