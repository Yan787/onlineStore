import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { IProduct } from "../../types/product.interface";
import styles from "./ProductItem.module.scss";

const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
  const navigate = useNavigate();

  const onProductClic = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div onClick={onProductClic} className={styles.wrapper}>
      <img
        className={styles.image}
        src={product.thumbnail}
        alt={product.title}
      />
      <div className={styles.title}>{product.title}</div>
      <div className={styles.price}>
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          maximumFractionDigits: 0,
        }).format(product.price)}
      </div>
    </div>
  );
};

export default ProductItem;
