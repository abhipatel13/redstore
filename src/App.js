import Header from "../src/components/Header/Header"
import "./App.css";
import Brands from "./components/Brands/Brands";
import Category from "./components/Category/Category";
import Footer from "./components/Footer/Footer";
import Offer from "./components/Offer/Offer";
import Products from "./components/Products/Products";
import Testimonial from "./components/Testimonial/Testimonial";

function App() {
  return (
    <>
      <Header/>
      <Category/>
      <Products/>
      <Offer/>
      <Testimonial/>
      <Brands/>
      <Footer/>
    </>
  );
}

export default App;
