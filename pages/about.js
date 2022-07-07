import Image from "next/image"
import Link from "next/link"
import s from '../styles/About.module.scss'

export default function About() {
  return (
    <>
      <div className={s.group}>
        <div className={s.img_container}>
          <img className={s.img} src="/images/about.png" alt="Picture of the author"/>
          <div className={s.card}>
            <h3 className={s.card_title}>2500+</h3>
            <p className={s.card_description}>Supercharges placed along popular routes</p>
          </div>
        </div>
        <div className={s.data}>
          <h2 className={s.title}>
            Machines with <br/> Future Technology
          </h2>
          <p className={s.description}>
            See the future with high-performance electric cars produced by
            renowned brands. They feature futuristic builds and designs with
            new and innovative platforms that last a long time.
          </p>
          <Link href="/popular">
            <h3 className={s.button}>
              <a>Know More</a>
            </h3>
          </Link>
        </div>
      </div>
    </>
  )
}
