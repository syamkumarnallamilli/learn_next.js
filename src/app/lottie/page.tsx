'use client';

import Lottie from "lottie-react";
import motorcycleAnimation from "../lottie/motorcycle.json"; 
import { motion, MotionConfig } from "framer-motion";
import Button from "../reusable/button";

function Animation() {
  const handleClick = () => {
    console.log("Button clicked!");
  };
  return (
    <div className="bg-purple-600  h-64 w-full">
        <motion.div
        initial={{x:'-100%'}}
        animate={{x:"900%"}}
         transition={{ duration: 10, ease: 'linear',  }}
         className="w-32 h-32"
        >
            <Lottie
      animationData={motorcycleAnimation}
      loop={false}
      
    />
        </motion.div>
        <Button label="Click Me" onClick={handleClick}
        
      ></Button>
    
    </div>
  );
}

export default Animation;
