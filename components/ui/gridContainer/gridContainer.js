import GridCard from "../gridCard/gridCard";
import classes from "./gridContainer.module.css";

const GridContainer = () => {
  return (
    <div className={classes.grid_container}>
      <GridCard />
			<GridCard />
			<GridCard />
			<GridCard />
			<GridCard />
    </div>
  );
};

export default GridContainer;
