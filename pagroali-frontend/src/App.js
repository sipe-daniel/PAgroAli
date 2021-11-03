import Home from './Containers/Home/Home'
import Register from './Containers/Register/Register'
import Login from './Containers/Login/Login'
import Logout from './Containers/Logout/Logout'
import Contact from './Containers/Contact/Contact'
import Navbar from './Components/Navbar/Navbar'
import NotFound from './Components/NotFound/NotFound'
import ProductDescription from './Containers/Product/Product'
import ProductEdit from './Containers/EditProduct/EditProduct'
import AddProduct from './Containers/AddProduct/AddProduct'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  let menu=(localStorage.getItem('user-info')===null|| typeof(localStorage.getItem('user-info'))===undefined)

    return (
      <>
      {  menu ?(

        <Router>

          <Navbar menu={menu}/>
          <Switch>

            <Route path="/" exact component={Home}/>
            <Route path="/contact"  component={Contact}/>
            <Route path="/products/description/:slug" exact component={ProductDescription}/>
            <Route path="/register" exact component={Register}/>
            <Route path="/login" exact component={Login}/>
          
          </Switch>
        </Router>
        ):(
        <Router>

          <Navbar  menu={menu}/>
          <Switch>

            <Route path="/" exact component={Home}/>

            <Route path="/products/description/:slug" exact component={ProductDescription}/>
            <Route path="/products/edit/:slug" exact component={ProductEdit}/>

            <Route path="/addProduct"  component={AddProduct}/>
            <Route path="/logout" exact component={Logout}/>

          
          </Switch>
        </Router>

        ) }
      </>
    )
 

 
}

export default App;
