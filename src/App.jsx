import "./App.css";
import Navbar from "./components/Navbar/Navbar";
// import ProductCard from "./components/ProductCard/ProductCard";
import ProductList from "./components/ProductList/ProductList";
import SearchBar from "./components/SearchBar/SearchBox";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <div className='App'>

      <Navbar />
      <HomePage/>

    </div>
  );
}

export default App;
