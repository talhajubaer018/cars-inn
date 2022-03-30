import React, {useRef} from 'react'
import Link from 'next/link'

const Header = () => {
  const hamburger = useRef(null)
  const navlist = useRef(null)

  const navToggle = () => {
    hamburger.current.classList.toggle('open')
    navlist.current.classList.toggle('open')
  }
  return (
    <header className='container flex header'>
      <div className='logo-container'>
        <i class="ri-steering-2-line ri-xl"></i>
        <h3 className='logo-name'>Cars Inn</h3>
      </div>
      <nav className='nav-container flex-center'>
        <div ref={navlist} className='nav-list-container'>
          <h3>
            <Link href="/">
              <a>Home</a>
            </Link>
          </h3>
          <h3>
            <Link href="/">
              <a>About</a>
            </Link>
          </h3>
          <h3>
            <Link href="/">
              <a>Popular</a>
            </Link>
          </h3>
          <h3>
            <Link href="/">
              <a>Featured</a>
            </Link>
          </h3>
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