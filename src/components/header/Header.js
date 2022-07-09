import React, { useEffect, useRef } from 'react'
import './header.scss'

import { Link, useLocation } from 'react-router-dom'

import logo from '../../assets/tmovie.png'

const headerNav = [
  {
    display: 'Home',
    path: '/'
  },
  {
    display: 'Movies',
    path: '/movie'
  },
  {
    display: 'TV Series',
    path: '/tv'
  },
]

export default function Header() {

  const headerRef = useRef(null)
  const { pathname } = useLocation()

  const active = headerNav.findIndex(e => e.path === pathname)

  useEffect(() => {
    const shrikHeader = () => {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        headerRef.current.classList.add('shrink')
      }else {
        headerRef.current.classList.remove('shrink')
      }
    }

    window.addEventListener('scroll', shrikHeader)

    return () => {
      window.removeEventListener('scroll', shrikHeader)
    }
  }, [])


  return (
    <div ref={headerRef} className="header">
      <div className="header__wrap container">
        <div className="logo">
          <img src={logo} alt="logo" />
          <Link to='/'>Movies App</Link>
        </div>
        <ul className='header__nav'>
          {
            headerNav.map((e, index) => {
              return <li key={index} className={active === index ? 'active' : ''}>
                <Link to={e.path}>{e.display}</Link>
              </li>
            })
          }
        </ul>
      </div>
    </div>
  )
}
