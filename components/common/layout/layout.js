import Button from "../../ui/button/button";
import NavBar from "../navBar/navBar";
import SideNav from "../sideNav/sideNav";
import classes from "./layout.module.css";
const Layout = (props) => {
  return (
    <div className={classes.root}>
      <header>
        <NavBar/>
      </header>
      <main className={classes.main}>
        <SideNav/>
      
     
        {props.children}
      </main>
    </div>
  );
};

export default Layout;
