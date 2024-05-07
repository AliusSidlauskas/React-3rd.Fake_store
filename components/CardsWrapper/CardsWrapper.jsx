import styles from "./CardsWrapper.module.css"
import ProductCard from "../ProductCard/ProductCard";

const CardsWrapper = ({ products }) => {
  return (
    <div className={styles.container}>
      {products &&
        products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            description={product.description}
            category={product.category}
            image={product.image}
            rating={product.rating}
            rate={product.rate}
            count={product.count}
          />
        ))}
    </div>
  );
};

export default CardsWrapper;
