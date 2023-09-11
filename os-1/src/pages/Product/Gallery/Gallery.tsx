import React, { FC, useState } from "react";
import styles from "./Gallery.module.scss";
import classNames from "classnames";

const Gallery: FC<{ images: string[] }> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className={styles.gallery}>
      <img className={styles.image} src={images[currentIndex]} />

      <div className={styles.list}>
        {images.map((image, index) => {
          return (
            <img
              key={image}
              onClick={() => setCurrentIndex(index)}
              className={classNames(styles.imageList, {
                [styles.active]: currentIndex === index,
              })}
              src={image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
