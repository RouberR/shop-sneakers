import Card from "./components/Card/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import React from "react";


function App() {
  const [items, setitems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://616cb34137f997001745d6f8.mockapi.io/items').then(res => {
    return res.json();
  }).then((json) => {
    setitems(json);
  });
  }, []);


  const onAddToCart = (obj) => {
    setCartItems(prev =>[...prev, obj])
  };


  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer onClose={() => setCartOpened(false)} items={cartItems}/>}

      <Header onClickCart={() => setCartOpened(true)}/>

      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1> Все кросовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {items.map((item) => (
            <Card name={item.name} 
               price={item.price}
              img={item.img}
              onClickFavorite={() => alert("favorite")}
              onPlus={(obj) => onAddToCart(obj)}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
