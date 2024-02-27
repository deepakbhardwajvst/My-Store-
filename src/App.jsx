import "./App.css";
import { FilteredProducts } from "./Components/FilteredProducts/FilteredProducts";
import { Main } from "./Components/Main/Main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SingleProduct } from "./Components/SingleProduct/SingleProduct";
import { useSelector } from "react-redux";
import { PageNotFound } from "./Components/PageNotFound/PageNotFound";
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";

function App() {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="App">
  
      <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/filteredProducts/:type"
            element={<FilteredProducts />}
          />
          <Route
            path="/filteredProducts/:type/:id"
            element={<SingleProduct />}
          />
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
