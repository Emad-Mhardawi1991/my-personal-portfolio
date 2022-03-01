import { motion, AnimatePresence } from "framer-motion";
import Button from "../button/button";
import classes from "./hero.module.css";
import {textVariant, staggerVariant, buttonVariant } from "../../../animations/heroSectionVariants";
import AnimatedText from "../animatedText/animatedText";
import ScrollDownButton from "../scrollDownButton/scrollDownButton";

const Hero = () => {
  const greeting = "Hi,";
  const name = "Iam Emad";
  const jobTitle = "Fullstack Web";
  const coloredText = "Developer";

  const greetingsLetters = greeting.split("").map((letter, i) => {
    return (
      <motion.span
        className=" w-fit inline-block "
        variants={textVariant}
        whileHover={textVariant.hover}
      >
        {letter}
      </motion.span>
    );
  });

  const nameLetters = name.split("").map((letter, i) => {
    if (letter === " ") {
      return <motion.span> </motion.span>;
    } else {
      return (
        <motion.span
          className=" w-fit inline-block "
          variants={textVariant}
          whileHover={textVariant.hover}
        >
          {letter}
        </motion.span>
      );
    }
  });

  const jobTitleLetters = jobTitle.split("").map((letter, i) => {
    if (letter === " ") {
      return <motion.span> </motion.span>;
    } else {
      return (
        <motion.span
          className=" w-fit inline-block "
          variants={textVariant}
          whileHover={textVariant.hover}
        >
          {letter}
        </motion.span>
      );
    }
  });

  const coloredTextLetters = coloredText.split("").map((letter, i) => {
    if (letter === "D")
      return (
        <motion.span
          className=" w-fit text-primary_green pl-4 inline-block"
          variants={textVariant}
          whileHover={textVariant.hover}
        >
          {letter}
        </motion.span>
      );
    return (
      <motion.span
        className=" w-fit text-primary_green inline-block "
        variants={textVariant}
        whileHover={textVariant.hover}
      >
        {letter}
      </motion.span>
    );
  });

  return (
    <div className={classes.hero}>
      <motion.div
        className={classes.hero_content}
        variants={staggerVariant}
        initial="initial"
        animate="show"
      >
        <div>{greetingsLetters}</div>
        <div>{nameLetters}</div>
        <div>
          {jobTitleLetters}
          {coloredTextLetters}
        </div>

<motion.div variants={buttonVariant}>
  <Button className={classes.contact_button}>Contact Me</Button>
</motion.div>
        
        <ScrollDownButton className='absolute bottom-20 -left-10'/>
        <ScrollDownButton className='absolute bottom-20 -right-10'/>
      </motion.div>
    
    </div>
  );
};

export default Hero;
