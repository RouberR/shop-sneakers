const Drawer = ({onClose, items = [], onRemove} ) => {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between">
          Корзина <img onClick={onClose} className="cu-p" src="/img/bt_remove.svg" alt="Close" />
        </h2>


    {
      items.length > 0 ?
      <div>
         <div className="items">
          {items.map((obj) => (
            <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: `url(${obj.img})` }}
              className="cartItemImg"
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5">{obj.title}</p>
              <b>{obj.price}$</b>
            </div>
            <img onClick={() => onRemove(obj.id)} className="removeBtn" src="/img/bt_remove.svg" alt="Remove" />
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
        </div></div>
         :  
          <div className="cartEmpty d-flex align-center justify-center flex-column flex" >
      <img className="box" src='/img/box.png' alt="Box"/>
      <h1>Корзина пустая</h1>
      <p >Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
      <button onClick={onClose} className="greanButton"><img src="/img/arrow_back.svg" alt="arrow" />Вернуться назад</button>
    </div>
    }

  






      </div>
    </div>
  );
};

export default Drawer;
