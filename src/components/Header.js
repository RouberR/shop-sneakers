import React from "react";
const Header = () => {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center ">
        <img width={70} height={60} src="/img/logo.png" alt="Logo" />
        <div className="headerInfo">
          <h3 className="text-uppercase">React Sneakers</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>

      <ul className="d-flex">
        <li className="mr-30">
          <img width={18} height={18} src="/img/cart.svg" alt="cart" />
          <span>650$</span>
        </li>
        <li>
          <img width={20} height={20} src="/img/user.svg" alt="user" />
        </li>
      </ul>
    </header>
  );
};

export default Header;
