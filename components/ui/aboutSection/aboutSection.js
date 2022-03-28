import AnimatedText from "../animatedText/animatedText";
import { motion } from "framer-motion";
import { staggerVariant} from "../../../animations/aboutSectionVariants";
import Button from "../button/button";
import SkillBar from "../skillBar/skillBar";
import classes from "./aboutSection.module.css";

const AboutSection = () => {
  return (
    <section className={classes.aboutSection}>
      <AnimatedText text="About Me" className={classes.title} />
      <div className={classes.about_content}>
        <div className={classes.text_content}>
          <motion.p className={classes.paragraph} initial={{ opacity:0}} whileInView={{ opacity:1}} transition={{duration:1, delay:0.5}} viewport={{ once: true }}  >
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry`s standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the
            release
          </motion.p>
          <motion.div  initial={{ opacity:0}} whileInView={{ opacity:1}} transition={{duration:1, delay:1.5}} viewport={{ once: true }} >
               <Button className={classes.button}>Contact Me</Button>
          </motion.div>
         
        </div>

        <motion.div className={classes.skills}  variants={staggerVariant} whileInView='show'   initial="initial" viewport={{ once: true }} >
          <SkillBar
            title="Front End"
            title_sub="Html / Css / Javascript / React / Tailwind / Next.js"
            skill_Percent={60}
          />
            <SkillBar
            title="Back End"
            title_sub="Node.JS / express / MongoDb / Sql"
            skill_Percent={50}
          />
          <SkillBar
            title="Tools"
            title_sub="Npm / Git / Docker"
            skill_Percent={40}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
