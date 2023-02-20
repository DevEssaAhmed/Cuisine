import "./App.css";
import Navbar from "./components/Navbar/Navbar";
// import ProductCard from "./components/ProductCard/ProductCard";
import ProductList from "./components/ProductList/ProductList";
import SearchBar from "./components/SearchBar/SearchBox";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage"
import ContactPage from "./pages/ContactPage/ContactPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/checkout",
    element: <CheckoutPage />,
  },
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
