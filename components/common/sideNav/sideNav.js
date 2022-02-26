import classes from "./sideNav.module.css";
const SideNav = (props) => {
  return (
    <div className={classes.side_nav}>
      <div className={classes.side_nav_header}>
        <p>E</p>
      </div>
      <ul className={classes.side_nav_links}>
        <li>About</li>
        <li>My Work</li>
        <li>Skills</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default SideNav;
