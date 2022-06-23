import axios from "axios"
import { useState, useRef } from "react"
import { motion, AnimatePresence } from 'framer-motion'

import { useEffect } from "react"
import s from '../styles/Featured.module.scss'

import { featuredCarData, brands } from "../data/data"

export default function Featured() {
  const [featuredCars, setFeaturedCars] = useState([])
  const [filteredCars, setFilteredCars] = useState([featuredCars])
  const [activeMake, setActiveMake] = useState('all')

  const button = useRef(null)
  const brandContainer = useRef(null)

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

  const setBrand = function (brand) {
    console.log(brand)
    if(brand === 'porsche') {
      setActiveMake('porsche')
    }
    else if(brand === 'audi') {
      setActiveMake('audi')
    }
    else if(brand === 'tesla') {
      setActiveMake('tesla')
    }
    else {
      setActiveMake('all')
    }
  }

  useEffect(() => {
    fetchData()
    selectActiveMake()
    console.log(activeMake)
  }, [activeMake])

  return (
    <>
      <h1 className={s.heading}>Featured Luxury Cars</h1>
      <div ref={brandContainer} className={s.brands}>
        {brands.map((brand) => (
          <button key={brand.id} id={brand.id} className={s.brand_item} onClick={() => setBrand(brand.name)}>
            <span>{brand.text}</span>
            <img src={brand.image} />
          </button>
        ))}
        <button className={activeMake === 'all' ? `${s.brand_item} active` : s.brand_item} onClick={() => setBrand('all')}>
          <span>All</span>
        </button>
        <button className={activeMake === 'porsche' ? `${s.brand_item} active` : s.brand_item} onClick={() => setBrand('porsche')}>
          <img src="/images/logo1.png" />
        </button>
        <button className={activeMake === 'audi' ? `${s.brand_item} active` : s.brand_item} onClick={() => setBrand('audi')}>
          <img src="/images/logo2.png" />
        </button>
        <button className={activeMake === 'tesla' ? `${s.brand_item} active` : s.brand_item} onClick={() => setBrand('tesla')}>
          <img src="/images/logo3.png" />
        </button>
      </div>
      <motion.div layout className={s.car_group}>
        {filteredCars.map((car) => (
          <AnimatePresence>
            <motion.div animate={{opacity: 1}} initial={{opacity: 0}} exit={{opacity: 0}} layout className={s.card} key={car.id} >
              <div className="shape shape_smaller"></div>
              <h1 className={s.title}>{car.title}</h1>
              <h3 className={s.subtitle}>{car.subtitle}</h3>
              <img className={s.image} src={car.image} />

              <h3 className={s.price}>{car.price}</h3>
              <button className={s.button}>
                <i className="ri-shopping-bag-2-line"></i>
              </button>
            </motion.div>
          </AnimatePresence>
        ))}
      </motion.div>
    </>
  )
}
