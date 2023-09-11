import React from "react";
import Heder from "../../components/Heder/Heder";
import ProductItem from "../../components/ProductItem/ProductItem";
import ProductsList from "../../components/ProductsList/ProductsList";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import styles from "./Cart.module.scss";

const Cart = () => {
  const { item } = useTypedSelector((store) => store.cart);

  const { removeFromCart } = useActions();

  return (
    <div>
      <Heder />
      <ProductsList title="Cart">
        {item.length ? (
          item.map((product) => {
            return (
              <div key={product.id} className={styles.wrapperRemove}>
                <ProductItem product={product} />;
                <div
                  onClick={() => removeFromCart(product.id)}
                  className={styles.removeBtn}
                >
                  delete
                </div>
              </div>
            );
          })
        ) : (
          <div className={styles.empty}>Cart is empty</div>
        )}
      </ProductsList>
    </div>
  );
};

export default Cart;
