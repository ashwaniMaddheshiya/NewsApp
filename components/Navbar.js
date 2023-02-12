import styles from "@/styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href="/" className={styles.my_link}>
          NewsApp
        </Link>
      </div>
      <div className={styles.items}>
        <ul className={styles.ul}>
          <li>
            <Link href="/business" className={styles.my_link}>
              Business
            </Link>
          </li>
          <li>
            <Link href="/technology" className={styles.my_link}>
              Technology
            </Link>
          </li>
          <li>
            <Link href="/science" className={styles.my_link}>
              Science
            </Link>
          </li>
          <li>
            <Link href="/health" className={styles.my_link}>
              Health
            </Link>
          </li>
          <li>
            <Link href="/entertainment" className={styles.my_link}>
              Entertainment
            </Link>
          </li>
          <li>
            <Link href="/sports" className={styles.my_link}>
              Sports
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

