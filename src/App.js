import Card from "./components/Card/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

const arr = [
  {
    name: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: "650",
    img: "/img/sneakers/1.png",
  },
  {
    name: "Мужские Кроссовки Nike Air Max 270",
    price: "650",
    img: "/img/sneakers/2.png",
  },
  {
    name: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: "650",
    img: "/img/sneakers/3.png",
  },
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />

      <Header />

      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1> Все кросовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex">
          {arr.map((obj) => (
            <Card name={obj.name} price={obj.price} img={obj.img} onClick={()=>alert(obj.name)} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
