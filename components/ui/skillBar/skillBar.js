import { motion } from "framer-motion";
import {
  staggerVariant,
  skillBarVariant,
  skillBarContainerVariant
} from "../../../animations/aboutSectionVariants";
import classes from "./skillBar.module.css";

const SkillBar = (props) => {
  const { title, title_sub, skill_Percent } = props;
  return (
    <motion.div className={classes.skillBar} variants={skillBarContainerVariant}> 
      <h3 className={classes.title}>{title}</h3>
      <p className={classes.title_sub}>{title_sub}</p>
      <div className={classes.bar}>
        <motion.div
          variants={skillBarVariant}
          style={{ width: `${skill_Percent}%` }}
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default SkillBar;
