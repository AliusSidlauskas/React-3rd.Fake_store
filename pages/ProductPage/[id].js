import React, { useEffect, useState } from "react";
import styles from "./product.module.css"
import { useRouter } from "next/router";
// import Header from "../../components/Header/Header";
import axios from "axios";
import Image from "next/image";
import NoImage from "../../assets/NoImage.png";

const Item = () => {
  const router = useRouter();
  const [product, setProduct] = useState(null);

  const fetchProduct = async () => {
    const result = await axios.get(
      `https://fakestoreapi.com/products/${router.query.id}`
    );
    // console.log(result)

    setProduct(result.data);
  };

 useEffect(() => {
    router.query.id && fetchProduct();
  }, [router.query.id]);

  return (<div className={styles.container}>
    {product && (
        <div className={styles.contentWrapper}>
         <h3>{product.title}</h3>
         <h4>{`Price: ${product.price ? product.price : "No price available"}`}</h4>
         <p>{`Description: ${product.description}`}</p>
         <h4>{`Category: ${product.category}`}</h4>
 
         {product.image ? (
           <img src={product.image} alt="" className={styles.image}/>
         ) : (
           <Image src={NoImage} alt="No Image" className={styles.noImage} />
           // <div className={styles.noImage}>No Image</div>
         )}
 
         <h5>{`Rate ${product.rating.rate}`}</h5>
         <h5>{`count: ${product.rating.count}`}</h5>
         </div>
    )}
  </div>)
};

export default Item;
