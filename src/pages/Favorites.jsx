import Card from "../components/Card/Card.js";
function Favorites ({ items, onAddToFavorites }){
  return (
    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h1>Мои закладки</h1>
      </div>

      <div className="d-flex flex-wrap">
        {items.map((item) => {
          return(
            <Card
            key={item.id}
            favorited={true}
            onFavorite={onAddToFavorites}
            {...item}
          />
          )
        }
       
        )}
      </div>
    </div>
  );
};

export default Favorites;
