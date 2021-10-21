import React from "react";
import Card from "../components/Card/Card.js";
import AppContext from "../contex.js";
function Favorites (){

  const {favorites, onAddToFavorites} = React.useContext(AppContext)

  return (
    
    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h1>Мои закладки</h1>
      </div>

      <div className="d-flex flex-wrap">


        {favorites.map((item) => (
            <Card
            key={item.id}
            favorited={true}
            onFavorite={onAddToFavorites}
            {...item}
          />  
        ))}
      </div>
    </div>
  );
};

export default Favorites;
