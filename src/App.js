import Card from "./components/Card";
import Header from "./components/Header";
import Search from "./components/Search";
import Drawer from "./components/Drawer";

const arr = [
  { title: "мужские кросовки Nike", price: 79 },
  { title: "мужские кросовки Addidas", price: 96 },
  { title: "мужские кросовки Puma", price: 119 },
  { title: "мужские кросовки NUIU", price: 82 },
]

function App() {
  return (
      <div className="wrapper clear">
      
        <Drawer />
        <Header />

        <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>All sneakers</h1>
          <Search />
        </div>

        <div className="d-flex">
        {arr.map((obj) => (
          <Card title={obj.title} price={obj.price}/>
        ))}
               
        </div>
        </div>
      </div>
  )
}

export default App;
