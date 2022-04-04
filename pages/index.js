import Image from "next/image"
import Link from "next/link"
import s from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <div className="shape shape_big"></div>
      <div className="shape shape_small"></div>
      <h1 className={s.title}>Choose The Best Car</h1>
      <h2 className={s.subtitle}>Porsche Mission E</h2>
      <h3 className={s.car_type}>
        <i className="ri-flashlight-fill"></i>Electric car
      </h3>
      <div className={s.img}>
        <Image src="/images/home.png" alt="Picture of the author" layout="intrinsic" width={300} height={200} />
      </div>
      <div className={s.car_info}>
        <div>
          <div className={s.car_icon}>
            <i className="ri-temp-cold-line ri-xl"></i>
          </div>
          <h2 className={s.car_number}>24°</h2>
          <h3 className={s.car_text}>TEMPERATURE</h3>
        </div>
        <div>
          <div className={s.car_icon}>
            <i className="ri-dashboard-3-line ri-xl"></i>
          </div>
          <h2 className={s.car_number}>873</h2>
          <h3 className={s.car_text}>MILEAGE</h3>
        </div>
        <div>
          <div className={s.car_icon}>
            <i className="ri-flashlight-fill ri-xl"></i>
          </div>
          <h2 className={s.car_number}>94%</h2>
          <h3 className={s.car_text}>BATTERY</h3>
        </div>
      </div>
      <Link href="/featured">
        <h3 className={s.button}>
          <a>Start</a>
        </h3>
      </Link>
    </>
  )
}
