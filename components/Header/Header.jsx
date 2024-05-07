import styles from "./Header.module.css";

const Header = ({ links }) => {
  return (
    <header className={styles.container}>
      <div>
      <h1>Fake Store</h1>
      </div>

      <div>
      {links.map((link, id) => (
        <a href={link.link} key={id}  className={styles.link}>
          {link.title}
        </a>
      ))}
      </div>
    </header>
  );
};

export default Header;
