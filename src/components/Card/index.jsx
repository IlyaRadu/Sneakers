import React from "react";
import styles from "./Card.module.scss";

const Card = ({onFavorite, imgIrl, title,  price, onPlus }) => {
  const [isAdded, setIsAdded] = React.useState(false);

  const handle = () => {
    onPlus({imgIrl, title,  price});
    setIsAdded(!isAdded);
  }
    return (
        <div className={styles.card}>
            <div className={styles.favorite}  onClick={onFavorite}>
              <img src="/img/unliked.svg" alt="inliked"/>
            </div>
            <img width={133} height={112} src={imgIrl} alt="plus"/>
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price: </span>
                <b>{price}</b>
              </div>
             
                <img onClick={handle} src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="plus"/>
             
            </div>
          </div>
     );
}
 
export default Card;