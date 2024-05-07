import styles from "./CardsWrapper.module.css";
import Spinner from "../Spinner/Spinner";
import ProductCard from "../ProductCard/ProductCard";

const CardsWrapper = ({ products, setProducts }) => {
  console.log(products)
  return (
    <div>
      {products ? (
        <div className={styles.container}>
          {products &&
            products.map((product) => (
              <ProductCard
                id={product.id}
                key={product.id}
                title={product.title}
                description={product.description}
                category={product.category}
                image={product.image}
                rating={product.rating}
                rate={product.rate}
                count={product.count}
                setProducts={setProducts}
              />
            ))}
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default CardsWrapper;
