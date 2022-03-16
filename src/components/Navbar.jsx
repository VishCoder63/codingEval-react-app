import styles from "./css/navbar.module.css";
import { Link } from "react-router-dom";

const links = [
  {
    title: "Home",
    link: "/",
    id: "header-link-home",
  },
  {
    title: "About",
    link: "/about",
    id: "header-link-about",
  },
  {
    title: "Movies",
    link: "/movies",
    id: "header-link-movies",
  },
  //   add the other link as well
];
export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <ul>
        {links.map((el, index) => {
          return (
            <Link key={index} to={el.link}>
              <li id={el.id}>{el.title}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
