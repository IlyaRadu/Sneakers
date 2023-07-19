const Drawer = ({onCloseCart, items = []}) => {
    return ( 
        <div className="overlay">
            <div className="drawer">
            <h2 className="d-flex justify-between mb-30">Корзина <img onClick={onCloseCart} className="cu-p" src="/img/btn-remove.svg" alt="Remove"/></h2>
            <div className="items">
                
            {items.map((obj) => (
                    <div className="cartItem d-flex align-center mb-20">
                    <div style={{ backgroundImage: `url(${obj.imgIrl})`}} className="cartItemImg">
                    </div>
                    <div className="mr-20">
                        <p className="mb-5">{obj.title}</p>
                        <b>{obj.price} eur.</b>
                    </div>
                    <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
                    </div>
                ))}
            </div>
            
            
            
            <div className="cartTotalBlock">
            <ul>
                <li className="d-flex">
                <span>Итого: </span>
                <div></div>
                <b>220.5 eur.</b>
                </li>
            </ul>
            <button className="greenButton">Оформить заказ</button>
            </div>
            </div>
        </div>
     );
}
 
export default Drawer;