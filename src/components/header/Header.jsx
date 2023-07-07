import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.scss"

export default function Header() {
  return (
    <header>
        <Link className="logo" to="/">LOGO</Link>
        <Link to="/store">Shop</Link>
    </header>
  )
}
