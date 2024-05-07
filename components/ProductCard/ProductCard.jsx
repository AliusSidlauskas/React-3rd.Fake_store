import styles from "./ProductCard.module.css"
const ProductCard = ({
  title,
  price,
  description,
  category,
  image,
  rating,
}) => {
  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <h4>{price}</h4>
      <p>{description}</p>
      <h4>{category}</h4>
      <img src={image} />
      <h5>{rating.rate}</h5>
      <h5>{rating.count}</h5>
    </div>
  );
};

export default ProductCard;
