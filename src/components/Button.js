import React from 'react';
//React Router DOM
import { Link } from 'react-router-dom';
//CSS
import '../styles/Button.css';

export default function Button({ text, href, type }) {
  return (
    <Link to={href} className={type}>{text}</Link>
  )
}
