import React from "react";
const Home = ({items, searchValue, onAddToCart, Card, onChangeSearchInput, setSearchValue, onAddToFavorites}) => {
    return (
<div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : `Все кросовки`}</h1>
          <div className="search-block d-flex">
            
            <img src="/img/search.svg" alt="Search" />
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
            {searchValue &&
            <img onClick={() => setSearchValue('')} src="/img/clear.svg" alt="Clear" />}
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {items
          .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
          .map((item, index) => (
            <Card 
              key={index}
              onFavorite={(obj) => onAddToFavorites(obj)}
              onPlus={(obj) => onAddToCart(obj)}
              {...item}
              
              />
          ))}
        </div>
      </div>
    )
}

export default Home;