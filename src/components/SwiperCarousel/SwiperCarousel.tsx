import React, { Fragment } from 'react';
import style from './SwiperCarousel.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'
import 'swiper/css';
import imgOne from '../../assets/images/JacobJones.png';
import imgTwo from '../../assets/images/MarvinMcKinney.png';
import imgThree from '../../assets/images/TheresaWebb.png';

function SwiperCarousel() {
    const arr = [
        { img: imgOne, title: 'Jacob Jones', content: 'Reliable banking solutions for your financial operations Reliable banking solutions for your financial operations Reliable banking solutions for your financial' },
        { img: imgTwo, title: 'Marvin McKinney', content: 'Since switching to Swift Revel, I finally have peace of mind regarding my business finances. With their secure platform, I trust my datas protection completely.' },
        { img: imgThree, title: 'Jacob Jones', content: 'As a budding startup, we sought a financial solution that was simple, secure, and scalable. Swift Revel checked all the boxes, enabling focus on growth.' },
        { img: imgTwo, title: 'Theresa Webb', content: 'Swift Revel empowers me to manage my business finances with confidence and ease. Their integrated tax solutions ensure Im always tax compliant.' },
        { img: imgOne, title: 'Ronald Richards', content: 'We needed a payment gateway that could handle our diverse customer base. Swift Revel offers a wide range of payment options, making it easy for our clients to pay.  ' }
    ]
    return (
        <div className={style.swiperCarousel}>
            <Swiper
                modules={[Autoplay]}
                speed={2200}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                spaceBetween={30}
                slidesPerView={3}
                loop={true}
                breakpoints={{
                    '@0.00': {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    '@0.75': {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    '@1.00': {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    '@1.50': {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
            >
                {
                    arr.map((el, _) =>
                        <SwiperSlide className={style.slide}>
                            <div className={style.userImg}>
                                <img src={el.img} />
                            </div>
                            <h3>{el.title}</h3>
                            <p>{el.content}</p>
                        </SwiperSlide>
                    )
                }

            </Swiper>
        </div>
    )
}

export default SwiperCarousel