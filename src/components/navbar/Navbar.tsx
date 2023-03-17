import styles from "./Navbar.module.css";
import { AiOutlineSearch } from "react-icons/Ai";

interface Link {
  name: string;
  link: string;
}

interface Props {
  links: Link[];
}

const Navbar = ({ links }: Props) => {
  return (
    <header className={styles.header}>
      <ul className={styles.list}>
        <li>
          <a href="">Logo</a>
        </li>
        <div className={styles.listContainer}>
          {links.map((link, index) => (
            <li className={styles.li} key={index}>
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
          <li>
            <a href="">
              <AiOutlineSearch
                className={styles.search}
                size="40px"
              ></AiOutlineSearch>
            </a>
          </li>
          <li>
            <button className={styles.btn} role="button">
              Let's Talk
            </button>
          </li>
        </div>
      </ul>
    </header>
  );
};

export default Navbar;
