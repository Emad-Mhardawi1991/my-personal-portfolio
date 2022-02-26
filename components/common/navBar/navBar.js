import classes from "./navBar.module.css";
import { MenuIcon } from "@heroicons/react/solid";
import LinkedinIcon from "../icons/linkedin-icon";
import GitHubIcon from "../icons/github-icon";
import Link from "next/link";

const NavBar = (props) => {
  return (
    <div className={classes.navBar}>
        <div className={classes.navBar_container}>
            <button >
                <MenuIcon className={classes.menuIcon} />
            </button>
            <div className={classes.socialMedia}>
            <Link href={"https://www.linkedin.com/in/emad-mhardawi-55b09419b"}>
            <a target='_blank'>
              <LinkedinIcon className={classes.socialMediaIcon} />
            </a>
          </Link>
          <Link href="https://github.com/Emad-Mhardawi1991">
            <a target='_blank'>
              <GitHubIcon className={classes.socialMediaIcon} />
            </a>
          </Link>
            </div>
        </div>
    </div>
  );
};

export default NavBar;
