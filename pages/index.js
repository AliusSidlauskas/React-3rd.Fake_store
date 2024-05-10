// import { useState, useEffect } from "react";
// import Header from "../components/Header/Header";
// import Main from "../components/Main/Main";
// import Footer from "../components/Footer/Footer"
// import axios from "axios";

// const MainPage = () => {
//   const [products, setProducts] = useState(null);

//   const fetchProducts = async () => {
//     const response = await axios.get("https://fakestoreapi.com/products");
//     setProducts(response.data);
//   };
// // console.log(response.data)
//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const links = [
//     { link: "#", title: "Home" },
//     { link: "#", title: "About" },
//     { link: "#", title: "Contact" },
//     { link: "#", title: "FAQs" },
//   ];

//   return (
//     <div className={styles.container}>
//       <Header links={links} />
//       <Main products={products} setProducts={setProducts}/>
//       <Footer/>
//   );
//     </div>
// };

// export default MainPage;

import styles from "../styles/Home.module.css";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/fake.png";

const index = () => {
  return (
    <div className={styles.main}>
      <Image alt="logo" className={styles.logo} src={logo} />
      <h1>WELCOME</h1>
      <h2>To the MOST FAKE store</h2>
      <Link href="./HeroPage/Hero" className={styles.link}>
        Please, Welcome
      </Link>
    </div>
  );
};

export default index;
