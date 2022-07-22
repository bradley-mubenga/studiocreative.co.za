import React from 'react';
//React Router DOM
import { Link } from 'react-router-dom';
//CSS
import '../styles/Buttons.css';

//INCLUDE HOW THIS BUTTON WORKS IN DOCUMENTATION

export default function Button({ text, href, type }) {
  return (
    <Link to={href} className={type}>{text}</Link>
  )
}
