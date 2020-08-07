import React from 'react';

const Header = () => (
    <header className="header">
        <div className="header__logo">
          <img className="logo" src="src/img/logo.png" alt="logo"/>
        </div>
        <div className="header__nav">
          <span>Переваги</span>
          <span>Ціни</span>
          <span>Лікування</span>
          <span>Контакти</span>
        </div>
        <button className="header__btn">Записатись на прийом</button>
    </header>
);

export default Header;