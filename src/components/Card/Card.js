import React from "react";
import styles from './Card.module.scss';
import ContentLoader from "react-content-loader"
import AppContext from "../../contex";
const Card = ({id, onFavorite, img, title, price, onPlus, favorited = false, added = false, loading = false}) => {

  const {isItemAdded, onAddToFavorites} = React.useContext(AppContext)
  const[isFavorite, setIsFavorite] = React.useState(favorited);

  const onClickPlus = () => {
    onPlus({id, img, title, price})
  }

  const onClickFavorite = () => {
    onAddToFavorites({id, img, title, price})
    setIsFavorite(!isFavorite);
  }

  
  return (
    <div className={styles.card}>
    { loading ?   <ContentLoader 
    speed={2}
    width={210}
    height={225}
    viewBox="0 0 210 200"
    backgroundColor="#e4d7d7"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="6" ry="6" width="150" height="90" /> 
    <rect x="0" y="120" rx="3" ry="3" width="90" height="15" /> 
    <rect x="0" y="100" rx="3" ry="3" width="150" height="15" /> 
    <circle cx="422" cy="31" r="20" /> 
    <rect x="0" y="140" rx="3" ry="3" width="80" height="25" /> 
    <rect x="115" y="133" rx="5" ry="5" width="32" height="32" />
  </ContentLoader> :
  
    <>
      <div className={styles.favorite}>
        <img onClick={onClickFavorite} src={isFavorite ? "/img/heart_liked.png" : "/img/heart_unliked.svg"} alt="Unliked" />
      </div>
      <img width={133} height={112} src={img} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price}$</b>
        </div>
          <img className={styles.plus} onClick={onClickPlus}  src={isItemAdded(id) ? "/img/bt.png" : "/img/plus.svg"} alt="Plus" />
      </div>
    </> }

    </div>
  );
};

export default Card;
