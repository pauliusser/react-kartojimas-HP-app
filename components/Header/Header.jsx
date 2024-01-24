import styles from "./styles.module.css";
import burger from "../../images/menu-burger.svg";
import { useState } from "react";

const Links = () => {
  return (
    <>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </>
  );
};

const Header = () => {
  const [isBurgerActive, setBurgerState] = useState(false);
  return (
    <>
      <div className={styles.header}>
        <h1> Logo </h1>
        <nav className={styles.navPc}>
          <Links />
        </nav>
        <img
          onClick={() => {
            setBurgerState(!isBurgerActive);
          }}
          src={burger.src}
          className={styles.burger}></img>
      </div>
      <div className={styles.spaceFiller}></div>
      <nav className={`${styles.navMobile} ${isBurgerActive && styles.navBugerActive}`}>
        <Links />
      </nav>
    </>
  );
};

export default Header;
