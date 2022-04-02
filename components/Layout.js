import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = ({ children }) => {
  return (
    <div>
      <Header/>
      <main className='main_container'>
        {children}
      </main>
      <Footer/>
    </div>
  )
}

export default Layout