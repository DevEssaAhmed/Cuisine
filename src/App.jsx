import "./App.css";
import Navbar from "./components/Navbar/Navbar";
// import ProductCard from "./components/ProductCard/ProductCard";
import ProductList from "./components/ProductList/ProductLIst";
import SearchBar from "./components/SearchBar/SearchBox";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <ProductList/>

    </div>
  );
}

export default App;
