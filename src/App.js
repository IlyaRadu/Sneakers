import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React from "react";



function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
  const [cartOpened, setCartOpened] = React.useState(false)

  React.useEffect(() => {
    fetch('https://64a30e8db45881cc0ae61220.mockapi.io/items')
    .then((response) => {return response.json()})
    .then((json) => {setItems(json)})
  }, []);

  const onAddToCart = (obj) => {
    setCartItems([...cartItems, obj]);
  };

  const onChangeInput = (e) => {
    setSearchValue(e.target.value)
    
  }

  return (
      <div className="wrapper clear">
      
        {cartOpened && <Drawer items={cartItems}  onCloseCart={() => setCartOpened(false)}/>}
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
