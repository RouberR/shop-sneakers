import React from "react";
import { Link } from "react-router-dom";
import AppContext from "../contex";
const Header = (props) => {
  const { cartItems } = React.useContext(AppContext);
  const totaPrice = cartItems.reduce(
    (sum, obj) => Number(obj.price) + Number(sum), 0);
  return (
    <header className="d-flex justify-between align-center p-40">

      <Link to="">
        <div className="d-flex align-center ">
          <img width={70} height={60} src="img/logo.png" alt="Logo" />
          <div className="headerInfo">
            <h3 className="text-uppercase">React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>

      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img width={18} height={18} src="img/cart.svg" alt="cart" />
          <span>{totaPrice}$</span>
        </li>
        <li className="mr-30 cu-p">
          <Link to="favorites">
            <img
              width={20}
              height={20}
              src="img/favorite.svg"
              alt="Favorite"
            />
          </Link>
        </li>
        <li>
          <Link to="orders">
            <img width={20} height={20} src="img/user.svg" alt="user" />
          </Link>
        </li>
      </ul>
      
    </header>
  );
};

export default Header;
