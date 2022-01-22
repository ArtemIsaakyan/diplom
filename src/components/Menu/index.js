import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.scss';

export default function Menu() {
  return (
    <div className="menu">
      <div className="nav">
      <div className="logo">Fintess App</div>
        <ul>
          <li>
            <Link to="/Home">Главная страница</Link>
          </li>
          <li>
            <Link to="/info">Информация о себе</Link>
          </li>
          <li>
            <Link to="/calculate">Расчет ИМТ и калорий</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
