import axios from "axios";
import React from "react";
import AppContext from "../contex";
import Info from "./Info";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const Drawer = ({onClose, items = [], onRemove} ) => {
  const {cartItems, setCartItems } = React.useContext(AppContext)
  const [oderId, setOderId] = React.useState(null);
  const [isOderComplete, setIsOderComplete] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const onClickOder = async() => {
    try {
    setIsLoading(true)
    const {data} = await axios.post('https://616cb34137f997001745d6f8.mockapi.io/oders', 
    {items: cartItems});

    setOderId(data.id)
    setIsOderComplete(true);
    setCartItems([]);

    for (let i = 0; i < cartItems.length; i++) {
      const item = cartItems[i];
      axios.delete('https://616cb34137f997001745d6f8.mockapi.io/cart' + item.id);
      await delay(3000);
    }
    
    } catch (error) {
      alert('Ошибка при создании заказа :(')
    }
    setIsLoading(false)
  }

  return (
    <div className="overlay " >
      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between">
          Корзина <img onClick={onClose} className="cu-p" src="/img/bt_remove.svg" alt="Close" />
        </h2>


    {
      items.length > 0 ?
      <div className='d-flex flex-column flex'>
         <div className="items">
          {items.map((obj) => (
            <div key={obj.id} className="cartItem d-flex align-center mb-20">
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
          <button disabled={isLoading} onClick={onClickOder} className="greanButton">
            Оформить заказ
            <img src="/img/arrow.svg" alt="arrow" />
          </button>
        </div></div>
         :  
        <Info 
        title={isOderComplete ? 'Заказ оформлен!' : 'Корзина пустая' }
        image={isOderComplete ? '/img/oder.png' : '/img/box.png'}
        description={isOderComplete ? `Ваш заказ #${oderId} скоро будет передан курьерской доставке` : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'} />
 
          
    }

  






      </div>
    </div>
  );
};

export default Drawer;
