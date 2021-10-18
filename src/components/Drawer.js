const Drawer = ({onClose, items = []}) => {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between">
          Корзина <img onClick={onClose} className="cu-p" src="/img/bt_remove.svg" alt="Close" />
        </h2>

        <div className="items">

      {items.map((obj) => (
        <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: `url(${obj.img})` }}
              className="cartItemImg"
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5">{obj.name}</p>
              <b>{obj.price}$</b>
            </div>
            <img className="removeBtn" src="/img/bt_remove.svg" alt="Remove" />
          </div>
      ))}
          

         
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
