import { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Footer from "../../components/Footer/Footer"
import axios from "axios";

const MainPage = () => {
  const [products, setProducts] = useState(null);

  const fetchProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setProducts(response.data);
  };
// console.log(response.data)
  useEffect(() => {
    fetchProducts();
  }, []);

  const links = [
    { link: "#", title: "Home" },
    { link: "#", title: "About" },
    { link: "#", title: "Contact" },
    { link: "#", title: "FAQs" },
  ];

  return (
    <div className={styles.container}>
      <Header links={links} />
      <Main products={products} setProducts={setProducts}/>
      <Footer/>
    </div>
  );
};

export default MainPage;
