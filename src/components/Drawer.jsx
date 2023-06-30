const Drawer = () => {
    return ( 
        <div className="overlay">
            <div className="drawer">
            <h2 className="d-flex justify-between mb-30">Корзина <img className="cu-p" src="/img/btn-remove.svg" alt="Remove"/></h2>
            <div className="items">
                
                <div className="cartItem d-flex align-center mb-20">
                <div style={{ backgroundImage: 'url(/img/sneakers/1.jpg)'}} className="cartItemImg">
                </div>
                <div className="mr-20">
                    <p className="mb-5">мужские кросовки Nike </p>
                    <b>129 eur.</b>
                </div>
                <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
                </div>
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