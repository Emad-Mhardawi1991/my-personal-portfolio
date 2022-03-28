import AnimatedText from "../animatedText/animatedText";
import GridContainer from "../gridContainer/gridContainer";

import classes from "./myWorkSection.module.css";

const MyWorkSection = () => {
  return (
    <section className={classes.myWorkSection}>
      <AnimatedText text="My Work" className={classes.title} />
      <p className={classes.title_sub}>
        is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry`s
      </p>
      <GridContainer />
        
  
    </section>
  );
};

export default MyWorkSection;
