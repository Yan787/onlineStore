import React from "react";
import { useQuery } from "react-query";
import ProductItem from "../../components/ProductItem/ProductItem";
import { ProductService } from "../../services/productService";
import Heder from "../../components/Heder/Heder";
import styles from "./Home.module.scss";
import ProductsList from "../../components/ProductsList/ProductsList";

const Home = () => {
  const { data, isLoading } = useQuery(
    ["products"],
    () => ProductService.getProducts(),
    {
      select: ({ products }) => products,
    }
  );

  return (
    <div>
      <Heder />
      {isLoading ? (
        <div className={styles.loding}>Loding...</div>
      ) : data?.length ? (
        <ProductsList title="Shop the collection">
          {data.map((product) => {
            return <ProductItem key={product.id} product={product} />;
          })}
        </ProductsList>
      ) : (
        <div>Products not found!</div>
      )}
    </div>
  );
};

export default Home;
