import React from 'react';
import firstImage from '../assets/images/aboutStandard.png';
import secondImage from '../assets/images/aboutMachine.png';
import Aboutdesign from '../components/Aboutdesign.jsx';
import styles from '../styles/Aboutpage.module.css';

const Aboutpage = () => {
  return (
    <div className="flex w-full h-screen gap-1 relative">
      <div className={styles.imageContainer}>
        <img
          src={firstImage}
          alt="First"
          className={styles.image}
        />
        <Aboutdesign title="wholesale" title1="Standard" title2="Machine Trading Company "  paragraph="Welcome to Standard machne trading company Wholesale Division, where we specialize in supplying high-quality power tools, agricultural machines, construction equipment, and more to businesses and retailers. Since [Year], we have been a trusted partner for many businesses, providing them with reliable products at competitive prices.
         Our wholesale division is committed to helping our clients succeed by offering a vast selection of tools and equipment tailored to meet the diverse needs of various industries" />
      </div>
      <div className={styles.imageContainer}>
        <img
          src={secondImage}
          alt="Second"
          className={styles.image}
        />
        <Aboutdesign title="retail" title1="Machine Mart" paragraph="Welcome to Standard machine trading company, your trusted source for power tools, agricultural machines, construction equipment, and more in Mangalore. We have been committed to providing high-quality products and exceptional customer service to our community. Our retail store offers an extensive range of tools and equipment, ensuring that you find exactly what you need for your projects." />
      </div>
    </div>
  );
}

export default Aboutpage;