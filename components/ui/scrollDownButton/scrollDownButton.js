import { ArrowDownIcon, ArrowRightIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";

const ScrollDownButton = (props) => {
  return (
    <button className= {`${props.className} flex  justify-center  items-center gap-3 w-fit leading-none rotate-90 text-sm font-sans  `}>
      <motion.p 
      initial={{x:0}}
      animate={{ x: ["-15px", '0px' , '-15px'] }}
      transition={{
        type:'spring',
        repeat:Infinity,
      }}
      >
        scroll down
      </motion.p>
      <ArrowRightIcon className="w-4" />
    </button>
  );
};

export default ScrollDownButton;
