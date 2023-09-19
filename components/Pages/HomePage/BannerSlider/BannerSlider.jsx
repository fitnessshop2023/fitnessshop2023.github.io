'use client'
import React from 'react'
import Slider from "react-slick";
import styles from './BannerSlider.module.scss';
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";



export default function BannerSlider() {
    const settings = {
        arrows: false,
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    };
    return (
        <section className={styles.slider_container}>
            <Slider  className={styles.slider} {...settings}>
                <div className={styles.slide}>
                    <img className={styles.img} src="img/banner1.png" alt="Banner img" />
                    <div className={styles.content}>
                        <h1 className={styles.title}>
                            <span className='mb-[4px] text-[20px] font-semibold leading-[1] text-white'>Знижка</span> 
                            <span className='mb-[4px] italic text-[32px] font-bold leading-[1] text-[#4C7A53]'>-20%</span> 
                            <span className='text-[16px] font-bold leading-[1.2] text-white'>на замовлення від <br/> 2000грн</span>
                        </h1>
                    </div>
                    <div className={styles.shadow}></div>
                </div>
                <div className={styles.slide}>
                    <img className={styles.img} src="img/banner2.png" alt="Banner img" />
                    <div className={styles.content}>
                        <h1 className={styles.title}>
                            <span className='mb-[4px] text-[20px] font-semibold leading-[1] text-white'>Знижка</span> 
                            <span className='mb-[4px] italic text-[32px] font-bold leading-[1] text-[#4C7A53]'>-20%</span> 
                            <span className='text-[16px] font-bold leading-[1.2] text-white'>на замовлення від <br/> 2000грн</span>
                        </h1>
                    </div>
                    <div className={styles.shadow}></div>
                </div>
            </Slider>
        </section>
    )
}
