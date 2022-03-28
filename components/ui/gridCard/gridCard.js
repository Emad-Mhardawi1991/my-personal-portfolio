import classes from "./gridCard.module.css";

const GridCard = (props) => {
  return (
    <div className={classes.grid_card}>
      <div className={classes.card_content}>
        <div className={classes.card_image_box}>
          <img className={classes.card_image} src="./images/website.jpg" />
        </div>
        
        <div className={classes.desc}>
          <h3>Animated Fox</h3>
          <p>three.js/ javascript</p>
        </div>

      </div>
    </div>
  );
};

export default GridCard;

