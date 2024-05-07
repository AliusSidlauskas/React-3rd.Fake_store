import styles from "./Header.module.css";
import logo from "../../assets/fake.png";
import Image from "next/image";

const Header = ({ links }) => {
  return (
    <header className={styles.container}>
      <div className={styles.logo_name}>
        <Image alt="logo" className={styles.logo} src={logo} />
        <h1>Fake Store</h1>
      </div>

      <div>
        {links.map((link, id) => (
          <a href={link.link} key={id} className={styles.link}>
            {link.title}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;
