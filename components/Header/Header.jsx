import styles from "./styles.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <h1> Logo </h1>
      <nav>
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
      </nav>
    </div>
  );
};

export default Header;
