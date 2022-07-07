import React, {useRef} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';

const Header = () => {
  const hamburger = useRef(null)
  const navlist = useRef(null)

  const router = useRouter()

  const navToggle = () => {
    hamburger.current.classList.toggle('open')
    navlist.current.classList.toggle('open')
  }
  return (
    <header className='container flex header'>
      <Link href="/">
        <div className='logo-container'>
          <i className="ri-steering-2-line ri-xl"></i>
          <h3 className='logo_name'>Cars Inn</h3>
        </div>
      </Link>
      <nav className='nav-container flex-center'>
        <div ref={navlist} className='nav-list-container'>
          <Link href="/">
            <h3 className={(router.pathname == `/` ? 'active' : '')}>
              <a onClick={navToggle}>Home</a>
            </h3>
          </Link>
          <Link href="/about">
            <h3 className={(router.pathname == `/about` ? 'active' : '')}>
              <a onClick={navToggle}>About</a>
            </h3>
          </Link>
          <Link href="/popular">
            <h3 className={(router.pathname == `/popular` ? 'active' : '')}>
              <a onClick={navToggle}>Popular</a>
            </h3>
          </Link>
          <Link href="/featured">
            <h3 className={(router.pathname == `/featured` ? 'active' : '')}>
              <a onClick={navToggle}>Featured</a>
            </h3>
          </Link>
        </div>
        <button ref={hamburger} onClick={navToggle} className='hamburger'>
          <span className='hamburger-top'></span>
          <span className='hamburger-middle'></span>
          <span className='hamburger-bottom'></span>
        </button>
      </nav>
    </header>
  )
}

export default Header