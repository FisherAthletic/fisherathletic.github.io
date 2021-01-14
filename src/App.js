import React from 'react';
import { FormspreeProvider } from '@formspree/react'
// import Navbar from "./components/Navbar"
import TopNav from './components/subComponents/TopNav'
import Home from "./components/Home"
import Products from "./components/Products"
import Catalogs from "./components/Catalogs"
import Contact from "./components/Contact"
import Categories from './components/pages/Categories'
import { useMediaQuery } from "@material-ui/core"
import { BrowserRouter as Router, Route } from "react-router-dom"
import SubCategories from './components/pages/SubCategories';
import Groups from './components/pages/Groups'
import Item from './components/pages/Item'
import Search from './components/Search'
import User from './components/User'
import Footer from './components/Footer'
import Downloads from './components/Downloads'
import Policies from './components/Policies'
import './App.css'

function App() {

    // variable for using a media query
    const isNavSmall = useMediaQuery('(max-width: 599px)')

    return (
      <FormspreeProvider project="1560865689529482483">
        <Router>
          <TopNav />
        <div>
              <Route exact path="/"><Home/></Route>
              <Route exact path="/catalogs"><Catalogs/></Route>
              <Route exact path="/contact"><Contact/></Route>
              <Route exact path="/categories"><Categories/></Route>
              <Route exact path="/:subCategory/subCategories"><SubCategories/></Route>
              <Route exact path="/:products/products"><Products/></Route>
              <Route exact path="/:groups/groups"><Groups/></Route>
              <Route exact path="/:item/item"><Item/></Route>
              <Route exact path="/search"><Search/></Route>
              <Route exact path="/user"><User/></Route>
              <Route exact path='/downloads'><Downloads /></Route>
              <Route exact path='/policies'><Policies /></Route>
              </div>
          <Footer class='footer_container' />
        </Router>
      </FormspreeProvider>
    )
}

export default App;