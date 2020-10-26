import React from 'react';
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Products from "./components/Products"
import Catalogs from "./components/Catalogs"
import Contact from "./components/Contact"
import Categories from './components/pages/Categories'
import { useMediaQuery } from "@material-ui/core"
import { BrowserRouter as Router, Route } from "react-router-dom"
import SubCategories from './components/pages/SubCategories';
import Item from './components/pages/Item'
import Search from './components/Search'
import User from './components/User'

function App() {

    // variable for using a media query
    const isNavSmall = useMediaQuery('(max-width: 599px)')

    const offset = {
        marginLeft: "65px",
        marginTop: "60px",
        padding: "0.4rem 1rem"
    }
    const offsetSmall = {
        marginLeft: "58px",
        marginTop: "55px",
        padding: "0.4rem 1rem"
    }
    return (
      <Router>
        <div style={isNavSmall ? offsetSmall : offset}>
          <Navbar />
          <Route exact path="/"><Home/></Route>
          <Route exact path="/catalogs"><Catalogs/></Route>
          <Route exact path="/contact"><Contact/></Route>
          <Route exact path="/categories"><Categories/></Route>
          <Route exact path="/:subCategory/subCategories"><SubCategories/></Route>
          <Route exact path="/:products/products"><Products/></Route>
          <Route exact path="/:item/item"><Item/></Route>
          <Route exact path="/search"><Search/></Route>
          <Route exact path="/user"><User/></Route>
        </div>
      </Router>
    )
}

export default App;