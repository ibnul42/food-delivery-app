import Image from 'next/image';
import React, { useState } from 'react';
import styles from '../../styles/Product.module.css';

const Product = () => {
    const [size, setSize] = useState(0);
    const product = {
        id: 1,
        name: 'Pizza Burg',
        img: "/img/pizza.png",
        price: [19.9, 24.9, 29.9],
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, similique"
    }
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imgContainer}>
                    <Image src={product.img} layout='fill' alt='' />
                </div>
            </div>
            <div className={styles.right}>
                <h1 className={styles.title}>{product.name}</h1>
                <span className={styles.price}>{product.price[size]}$</span>
                <p className={styles.desc}>{product.desc}</p>
                <h3 className={styles.choose}>Please choose the size</h3>
                <div className={styles.sizes}>
                    <div className={styles.size} onClick={() => setSize(0)}>
                        <Image src='/img/size.png' alt='' layout='fill' />
                        <span className={styles.number}>Small</span>
                    </div>
                    <div className={styles.size} onClick={() => setSize(1)}>
                        <Image src='/img/size.png' alt='' layout='fill' />
                        <span className={styles.number}>Medium</span>
                    </div>
                    <div className={styles.size} onClick={() => setSize(2)}>
                        <Image src='/img/size.png' alt='' layout='fill' />
                        <span className={styles.number}>Large</span>
                    </div>
                </div>
                <h3 className={styles.choose}>Please choose ingredients</h3>
                <div className={styles.ingredients}>
                    <div className={styles.option}>
                        <input type="checkbox" name="double" id="double" className={styles.checkbox} />
                        <label htmlFor="double">Double Ingredients</label>
                    </div>
                    <div className={styles.option}>
                        <input type="checkbox" name="cheese" id="cheese" className={styles.checkbox} />
                        <label htmlFor="cheese">Extra Cheese</label>
                    </div>
                    <div className={styles.option}>
                        <input type="checkbox" name="spicy" id="spicy" className={styles.checkbox} />
                        <label htmlFor="spicy">Spicy Sauce</label>
                    </div>
                    <div className={styles.option}>
                        <input type="checkbox" name="garlic" id="garlic" className={styles.checkbox} />
                        <label htmlFor="garlic">Garlic Sauce</label>
                    </div>
                </div>
                <div className={styles.add}>
                    <input type="number" name="quantity" id="quantity" defaultValue={1} className={styles.quantity} />
                    <button className={styles.button}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
};

export default Product;
