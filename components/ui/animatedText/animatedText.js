import { motion } from "framer-motion";

import {
  greetingVariant,
  staggerVariant,
} from "../../../animations/variants";

const AnimatedText = (props) => {
  const { text } = props;
  const textLetters = text.split("").map((letter, i) => {
    if (letter === " ") {
      return (
        <motion.span
          key={i}
          onHoverEnd={() => "initial"}
          variants={greetingVariant}
          whileHover={greetingVariant.hover}
        >
          {" "}
        </motion.span>
      );
    } else {
      return (
        <motion.span
          key={i}
          className=" w-fit inline-block "
          onHoverEnd={() => "initial"}
          variants={greetingVariant}
          whileHover={greetingVariant.hover}
        >
          {letter}
        </motion.span>
      );
    }
  });

  return (
    <motion.div
      variants={staggerVariant}
      initial="initial"
      animate="show"
      className={props.className}
    >
      {textLetters}
    </motion.div>
  );
};

export default AnimatedText;
