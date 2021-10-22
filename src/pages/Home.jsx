import React from "react";
import Card from "../components/Card/Card";
const Home = ({
  items,
  searchValue,
  onAddToCart,
  onChangeSearchInput,
  setSearchValue,
  onAddToFavorites,
  isLoading,
}) => {
  const renderItems = () => {
    const filtredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );  
    return (isLoading ? [...Array(8)] : filtredItems).map((item, index) => (
    
      <Card
        key={index}
        onFavorite={(obj) => onAddToFavorites(obj)}
        onPlus={(obj) => onAddToCart(obj)}
        loading={isLoading}
        {...item}
      />
    ));
  };

  return (
    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h1>
          {searchValue ? `Поиск по запросу: "${searchValue}"` : `Все кросовки`}
        </h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="Search" />
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            placeholder="Поиск..."
          />
          {searchValue && (
            <img
              onClick={() => setSearchValue("")}
              src="/img/clear.svg"
              alt="Clear"
            />
          )}
        </div>
      </div>

      <div className="d-flex flex-wrap">{renderItems()}</div>
      
    </div>
  );
};

export default Home;
