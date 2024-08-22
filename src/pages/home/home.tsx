import React from 'react';
import SwiperCarousel from '../../components/SwiperCarousel/SwiperCarousel';
import style from './home.module.scss';

function Home() {
    return (
        <div className={style.main}>
            <div className={style.header}>
                <h2>What User says</h2>
                <div className={style.headerContent}>
                    <p>Testimonials that speak louder than words! Customer stories that light up our day.</p>
                </div>
            </div>

            <div className={style.carouselView}>
                <SwiperCarousel />
            </div>        
        </div>
    )
}

export default Home