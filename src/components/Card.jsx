const Card = () => {
    return ( 
        <div className="card">
            <div className="favorite">
              <img src="/img/unliked.svg" alt="inliked"/>
            </div>
            <img width={133} height={112} src="/img/sneakers/1.jpg" alt="plus"/>
            <h5>мужские кросовки Nike </h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price: </span>
                <b>79 eur.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus"/>
              </button>
            </div>
          </div>
     );
}
 
export default Card;