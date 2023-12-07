import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p>
          <h2 className="text-4xl font-bold">Achievements</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Real Estate Platform (MERN Stack)."
            subTitle="Developed a Comprehensive Real Estate Application"
            result="Success"
            des="Led the end-to-end development of a feature-rich real estate platform using the MERN stack (MongoDB, Express.js, React, Node.js)."
          />
          <ResumeCard
            title=" E-commerce Platform (React)."
            subTitle="Created a Scalable and Responsive E-commerce Solution."
            result="Success"
            des="Spearheaded the development of a modern e-commerce platform using React.js, Redux for state management, and integrated with RESTful APIs.!"
          />
          <ResumeCard
            title="Ice Cream Store Project (React, Bootstrap, Tailwind CSS)."
            subTitle="Crafted an Engaging Online Ice Cream Store. "
            result="Success"
            des="Developed an immersive ice cream store project using React, enhanced with Bootstrap and Tailwind CSS for responsive and visually appealing design.!"
          />
        </div>
      </div>
      <div>
      </div>
    </motion.div>
  );
};

export default Achievement;
