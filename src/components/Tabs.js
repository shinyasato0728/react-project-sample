import React from "react";
import { Link } from 'react-router-dom'

export const Tabs1 = () => {
  return (
    <nav>
      <Link to="/About">About</Link>
    </nav>
  )
}

export const Tabs2 = () => {
  return (
    <nav>
      <Link to="/Policy">Policy</Link>
    </nav>
  )
}