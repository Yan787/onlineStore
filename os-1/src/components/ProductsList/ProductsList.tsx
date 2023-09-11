import React, { FC, ReactNode } from "react";
import styles from "./ProductsList.module.scss";

const ProductsList: FC<{ title?: string; children: ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <>
      <div className={styles.title}>{title}</div>
      <div className={styles.wrapper}>{children}</div>
    </>
  );
};

export default ProductsList;
