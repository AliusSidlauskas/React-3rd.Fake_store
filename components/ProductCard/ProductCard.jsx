import styles from "./ProductCard.module.css";
import NoImage from "../../assets/NoImage.png";
import Image from "next/image";

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
    <div
      className={styles.container}
      //  onClick={displayId}
      onClick={removeProduct}
    >
      <h3>{title}</h3>
      <h4>{price ? <>{price}</> : <>No price available</>}</h4>
      <p>{description}</p>
      <h4>{category}</h4>

      {image ? (
        <img src={image} alt="" />
      ) : (
        <Image src={NoImage} alt="No Image" className={styles.noImage}/>
        // <div className={styles.noImage}>No Image</div>
      )}

      <h5>{rating.rate}</h5>
      <h5>{rating.count}</h5>
    </div>
  );
};

export default ProductCard;
