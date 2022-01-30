import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.scss';

export default function Menu() {
  return (
    <div className="menu">
      <div className="nav">
        <div className="logo">Fitness App</div>
        <ul>
          <li>
            <Link to="/Home">Главная страница</Link>
          </li>
          <li>
            <Link to="/info">Внести данные</Link>
          </li>
          <li>
            <Link to="/calculate">Создание тренировки</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
