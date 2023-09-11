import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Heder from "../../components/Heder/Heder";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { ProductService } from "../../services/productService";
import Gallery from "./Gallery/Gallery";
import styles from "./Product.module.scss";
import classNames from "classnames";

const Product = () => {
  const product = useParams();
  const productId = product.id;

  const { data, isLoading } = useQuery(["product", productId], () =>
    ProductService.getProductById(productId || "")
  );

  const { item } = useTypedSelector((store) => store.cart);
  const isInCart = item.some((product) => product.id === Number(productId));

  const { addToCart, removeFromCart } = useActions();

  if (!data) {
    return <div>404!</div>;
  }

  return (
    <div>
      <Heder />
      {isLoading ? (
        <div className={styles.loding}>Loding...</div>
      ) : (
        <>
          {data && <Gallery images={data.images} />}
          <div className={styles.title}>{data?.title}</div>
          <div className={styles.price}>${data?.price}</div>
          <div
            onClick={() =>
              isInCart ? removeFromCart(Number(productId)) : addToCart(data)
            }
            className={classNames(styles.button, {
              [styles.isInCart]: isInCart,
            })}
          >
            {isInCart ? "This product is already in cart" : "Add to Cart"}
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
