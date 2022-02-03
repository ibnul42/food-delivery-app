import Image from 'next/image';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src='/img/bg.png' layout='fill' />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.moto}>
            We Did it
          </h2>
        </div>
        <div className={styles.card}>
          <h2 className={styles.title}>
            Find Us
          </h2>
          <p className={styles.text}>
            Don't run
          </p>
        </div>
        <div className={styles.card}>
          <h2 className={styles.title}>
            Find Us
          </h2>
          <p className={styles.text}>
            Don't run
          </p>
        </div>
      </div>
    </div>
  )
};

export default Footer;
