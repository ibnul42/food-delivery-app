import Image from 'next/image';
import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = () => {
  return <div className={styles.container}>
    <Image src='/img/pizza.png' alt='Pizza' width='500' height='500' />
    <h1 className={styles.title}>Product</h1>
    <span className={styles.price}>$20.99</span>
    <p className={styles.desc}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit dignissimos temporibus voluptatem numquam nam vel?
    </p>
  </div>;
};

export default ProductCard;
