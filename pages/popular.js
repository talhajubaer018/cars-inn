import axios from "axios"
import { useState } from "react"

import { Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { useEffect } from "react"
import s from '../styles/Popular.module.scss'

export default function Popular() {
  const [popularCars, setPopularCars] = useState([])

  const fetchData = async() => {
    const { data } = await axios.get('/data/data.json')
    setPopularCars(data.popular_car_data)
    console.log(popularCars)
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <h1 className={s.heading}>Popular Cars</h1>
      <Swiper
        modules={[Pagination, Scrollbar]}
        spaceBetween={24}
        slidesPerView='1'
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        grabCursor={true}
        pagination={{clickable: true}}
      >
        {popularCars.map((car) => (
          <SwiperSlide className={s.card} key={car.id}>
            <div className="shape shape_smaller"></div>
            <h1 className={s.title}>{car.title}</h1>
            <h3 className={s.subtitle}>{car.subtitle}</h3>
            <img className={s.image} src={car.image} />
            <div className={s.data}>
              <div className={s.data_group}>
                <i className="ri-dashboard-3-line"></i>{car.time}
              </div>
              <div className={s.data_group}>
                <i className="ri-funds-box-line"></i>{car.speed}
              </div>
              <div className={s.data_group}>
                <i className="ri-charging-pile-2-line"></i>{car.type}
              </div>
            </div>
            <h3 className={s.price}>{car.price}</h3>
            <button className={s.button}>
              <i className="ri-shopping-bag-2-line"></i>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>

    </>
  )
}
