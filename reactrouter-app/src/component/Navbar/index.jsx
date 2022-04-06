import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className={styles.Link}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className={styles.Link}>
            About App
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
