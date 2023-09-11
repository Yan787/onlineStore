import React from "react";
import { Link } from "react-router-dom";
import { CartIcon, HomeIcon } from "../../assets/icons";
import styles from "./Heder.module.scss";

const Heder = () => {
  return (
    <div className={styles.wrapper}>
      <Link className={styles.nav} to={"/"}>
        <HomeIcon /> Home
      </Link>
      <Link className={styles.nav} to={"/Cart"}>
        <CartIcon /> Cart
      </Link>
    </div>
  );
};

export default Heder;
