import styles from "./Card.module.scss";

const Card = (props) => {
    const onClickBtn = () => {
      alert("Card clicked")
    }

    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
              <img src="/img/unliked.svg" alt="inliked"/>
            </div>
            <img width={133} height={112} src="/img/sneakers/1.jpg" alt="plus"/>
            <h5>{props.title}</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price: </span>
                <b>{props.price}</b>
              </div>
              <button className="button"  onClick={onClickBtn}>
                <img width={11} height={11} src="/img/plus.svg" alt="plus"/>
              </button>
            </div>
          </div>
     );
}
 
export default Card;