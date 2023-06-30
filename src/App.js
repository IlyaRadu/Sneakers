import Card from "./components/Card";
import Header from "./components/Header";
import Search from "./components/Search";
import Drawer from "./components/Drawer";

function App() {
  return (
      <div className="wrapper clear">
      
        <Drawer />
        <Header />

        <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1> Все кросовки</h1>
          <Search />
        </div>

        <div className="d-flex">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        </div>
      </div>
  )
}

export default App;
