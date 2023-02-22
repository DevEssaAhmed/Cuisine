import "./App.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Footer from "./components/Footer/Footer";
import RestaurantMenu from "./components/RestaurantMenu/RestaurantMenu";
import LoginPage from "./pages/LoginPage/LoginPage";


const AppLayout = () => {
  return(
  <>
    <Navbar/>
    <Outlet/>
    <Footer/>
  </>
  ) 
}


const appRouter = createBrowserRouter([
  // { path: "outlet", element: <Navbar /> },

  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage />,
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
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu/>
      }
    ],
  },
  {
    path: "/login",
    element: <LoginPage/>
  }
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
