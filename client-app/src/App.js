import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import ProductPage from "./Pages/ProductPage";
import HomePage from "./Pages/HomePage";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {LinkContainer} from 'react-router-bootstrap';
import { Badge, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Store } from './Store';
import CartPage from "./Pages/CartPage";
import LoginPage from "./Pages/LoginPage";

function App() {
  const { state } = useContext(Store);
  const { cart }= state;
  return (
    <div className="d-flex flex-column site-container">
      <header className="App-header">
        <Navbar bg="dark " variant="dark">
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>MOON</Navbar.Brand>
            </LinkContainer>
           <Nav className="me-auto">
            <Link to="/cart" className="nav-link">
              Cart 
              {cart.cartItems.length > 0 && (
                <Badge pill bg="danger">
                  {cart.cartItems.reduce ((a, c) => a + c.quantity, 0 )}
                </Badge>
              )}
            </Link>
           </Nav>
          </Container>
        </Navbar>
        
      </header>
      <main>
        <Container className='mt-3'>
         <Routes>
           <Route path="/product/:slug" element={<ProductPage/>}/>
           <Route path="/cart" element={<CartPage/>}/>
           <Route path="/login" element={<LoginPage/>}/>
           <Route path="/" element={<HomePage/>}/>
         </Routes>
       </Container>
      </main>
      <footer>
        <div className="text-center">
          All rights reserved
        </div>
      </footer>
    </div>
  );
}

export default App;



