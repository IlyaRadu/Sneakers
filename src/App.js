import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React from "react";
import axios from "axios";
function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
  const [cartOpened, setCartOpened] = React.useState(false)

  React.useEffect(() => {
    axios.get('https://64a30e8db45881cc0ae61220.mockapi.io/items')
    .then((response) => {setItems(response.data)});

    axios.get('https://64a30e8db45881cc0ae61220.mockapi.io/cart')
    .then((response) => {setCartItems(response.data)});
  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://64a30e8db45881cc0ae61220.mockapi.io/cart', obj)
    setCartItems([...cartItems, obj]);
  };

  const onRemoveToCart = (id) => {
    axios.delete(`https://64a30e8db45881cc0ae61220.mockapi.io/cart/${id}`)
    setCartItems((prev) => prev.filter(item => item.id !== id));
  };
  const onChangeInput = (e) => {
    setSearchValue(e.target.value)
    
  }

  return (
      <div className="wrapper clear">
        {cartOpened && <Drawer items={cartItems} onRemove={onRemoveToCart} onCloseCart={() => setCartOpened(false)}/>}
        <Header onClickCart={() => setCartOpened(true)} />
        <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>{searchValue ? searchValue : 'All sneakers'}</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search"/>
            <input onChange={onChangeInput} placeholder="Search . . ." />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items
            .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
            .map((item, index) => (
            <Card 
              key={index}
              title={item.title}
              price={item.price}
              imgIrl={item.imgIrl}
              onPlus={(obj) => onAddToCart(item)}
            />
          ))}
               
        </div>
        </div>
      </div>
  )
}

export default App;
