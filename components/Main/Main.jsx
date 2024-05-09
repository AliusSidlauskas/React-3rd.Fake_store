import CardsWrapper from "../CardsWrapper/CardsWrapper";

const Main = ({ products, setProducts }) => {
  return (
    <main>
      <CardsWrapper products={products} setProducts={setProducts} />
    </main>
  );
};

export default Main;
