import React from 'react';
import styles from '../styles/ProductList.module.css';
import ProductCard from './ProductCard';

const ProductList = () => {
  return(
    <div className={styles.container}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit tempore ex amet quo! Placeat, hic provident. Perspiciatis ipsa quasi a est, animi labore alias magnam molestiae necessitatibus vitae molestias repellat perferendis! Ex consequuntur repudiandae, dolore pariatur sequi praesentium, sint voluptatum corrupti, impedit aliquam omnis autem iure iusto expedita accusamus laborum.</p>

        <div className={styles.wrapper}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
        
    </div>
  )
};

export default ProductList;
