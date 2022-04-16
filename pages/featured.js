import axios from "axios"
import { useState, useRef } from "react"

import { useEffect } from "react"
import s from '../styles/Featured.module.scss'

import { featuredCarData } from "../data/data"

export default function Featured() {
  const [featuredCars, setFeaturedCars] = useState([])
  const [filteredCars, setFilteredCars] = useState([featuredCars])
  const [activeMake, setActiveMake] = useState(['all'])

  const allButton = useRef(null)
  const porscheButton = useRef(null)

  const fetchData = async () => {
    setFeaturedCars(featuredCarData)
  }
  const selectActiveMake = () => {
    if (activeMake == 'all') {
      setFilteredCars(featuredCarData)
    }
    else {
      const filtered = featuredCars.filter((car) =>
        car.make.includes(activeMake)
      )
      setFilteredCars(filtered)
    }
  }
  useEffect(() => {
    fetchData()
    selectActiveMake()

  }, [activeMake])

  return (
    <>
      <h1 className={s.heading}>Featured Luxury Cars</h1>
      <div className={s.brands}>
        <button ref={allButton} className={s.brand_item} onClick={() => setActiveMake('all')}>
          <span>All</span>
        </button>
        <button ref={porscheButton} className={s.brand_item} onClick={() => setActiveMake('porsche')}>
          <img src="/images/logo1.png" />
        </button>
        <button className={s.brand_item} onClick={() => setActiveMake('audi')}>
          <img src="/images/logo2.png" />
        </button>
        <button className={s.brand_item} onClick={() => setActiveMake('tesla')}>
          <img src="/images/logo3.png" />
        </button>
      </div>
      <div className={s.car_group}>
        {filteredCars.map((car) => (
          <div className={s.card} key={car.id} >
            <div className="shape shape_smaller"></div>
            <h1 className={s.title}>{car.title}</h1>
            <h3 className={s.subtitle}>{car.subtitle}</h3>
            <img className={s.image} src={car.image} />

            <h3 className={s.price}>{car.price}</h3>
            <button className={s.button}>
              <i className="ri-shopping-bag-2-line"></i>
            </button>
          </div>
        ))}
      </div>
    </>
  )
}
