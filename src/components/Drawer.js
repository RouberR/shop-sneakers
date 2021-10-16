const Drawer = () => {
  return (
    <div style={{ display: "none" }} className="overlay">
      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between">
          Корзина <img className="cu-p" src="/img/bt_remove.svg" alt="Remove" />
        </h2>

        <div className="items">
          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: "url(img/sneakers/1.png)" }}
              className="cartItemImg"
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>650$</b>
            </div>
            <img className="removeBtn" src="/img/bt_remove.svg" alt="Remove" />
          </div>

          <div className="cartItem d-flex align-center  mb-20">
            <div
              style={{ backgroundImage: "url(img/sneakers/2.png)" }}
              className="cartItemImg"
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>650$</b>
            </div>
            <img className="removeBtn" src="/img/bt_remove.svg" alt="Remove" />
          </div>
        </div>

        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого</span>
              <div></div>
              <b>650$</b>
            </li>
            <li>
              <span>Налог 5%</span>
              <div></div>
              <b>42$</b>
            </li>
          </ul>
          <button className="greanButton">
            Оформить заказ
            <img src="/img/arrow.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
