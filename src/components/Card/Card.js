import React from "react";
import styles from './Card.module.scss';

const Card = ({id, onFavorite, img, title, price, onPlus, favorited = false}) => {

  const[isAdded, setIsAdded] = React.useState(false);
  const[isFavorite, setIsFavorite] = React.useState(favorited);

  const onClickPlus = () => {
    onPlus({img, title, price})
    setIsAdded(!isAdded);
  }

  const onClickFavorite = () => {
    onFavorite({id, img, title, price})
    setIsFavorite(!isFavorite);
  }

  
  return (
    <div className={styles.card}>
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
          <img className={styles.plus} onClick={onClickPlus}  src={isAdded ? "/img/bt.png" : "/img/plus.svg"} alt="Plus" />
      </div>
    </div>
  );
};

export default Card;
