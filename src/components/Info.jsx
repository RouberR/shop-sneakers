import React from "react";
import AppContext from "../contex";

export const Info = ({title, image, description }) => {
    const {setCartOpened} = React.useContext(AppContext)
  return (
      <div className="cartEmpty d-flex align-center justify-center flex-column flex ">
        <img className="box" src={image} alt="Box" />
        <h1>{title}</h1>
        <p>{description}</p>
        <button onClick={() => setCartOpened(false)} className="greanButton">
          <img src="/img/arrow_back.svg" alt="arrow" />
          Вернуться назад
        </button>
      </div>
  );
};

export default Info;
