import styles from "./ProductCard.module.css";
import NoImage from "../../assets/NoImage.png";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
  setProducts,
}) => {
  const removeProduct = () => {
    setProducts((prevState) =>
      prevState.filter((product) => product.id !== id)
    );
  };

  // const displayId = () => {
  //   console.log(id)
  // }

  return (
    <Link href={`/ProductPage/${id}`} className={styles.link}>
      <div
        className={styles.container}
        //  onClick={displayId}
        onClick={removeProduct}
      >
        <h3>{title}</h3>
        <h4>{`Price: ${price ? price : "No price available"}`}</h4>
        <p>{`Description: ${description}`}</p>
        <h4>{`Category: ${category}`}</h4>

        {image ? (
          <img src={image} alt="" className={styles.image} />
        ) : (
          <Image src={NoImage} alt="No Image" className={styles.noImage} />
          // <div className={styles.noImage}>No Image</div>
        )}

        <h5>{`Rate ${rating.rate}`}</h5>
        <h5>{`count: ${rating.count}`}</h5>
        <button onClick={removeProduct}>Remove</button>
      </div>
    </Link>
  );
};

export default ProductCard;
