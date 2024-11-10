import '../Navbar/navbar.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import LOGO from '../../Assets/images.jpeg';
import CART from '../../Assets/cart.png';
import { useState } from 'react';

export function MyNav() {

    const [menu, setMenu] = useState('')
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary navbar">
                <Container>
                    <Navbar.Brand href="#home">
                        <div className='nav-logo'>
                           <div>
                           <img src={LOGO} alt="logo" />
                           </div>
                            <p>Jaram Store</p>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto">
                            <div className='navbar-items m-auto'>
                                <ul className='list-items'>
                                    <li onClick = {() => {setMenu("shop")}}><Nav.Link href="/">Shop</Nav.Link> {menu === "shop" ? <hr/> : <></>}</li>
                                    <li  onClick = {() => {setMenu("grains")}}><Nav.Link href="/grains">Grains</Nav.Link> {menu === "grains" ? <hr/> : <></>}</li>
                                    <li  onClick = {() => {setMenu("tubers")}}><Nav.Link href="/tubers">Tubers</Nav.Link>{menu === "tubers" ? <hr/> : <></>}</li>
                                    <li  onClick = {() => {setMenu("driedFish")}}><Nav.Link href="#link">Dried Fish</Nav.Link>{menu === "driedFish" ? <hr/> : <></>}</li>
                                    <li  onClick = {() => {setMenu("oil")}}><Nav.Link href="/oil">Oil</Nav.Link>{menu === "oil" ? <hr/> : <></>}</li>
                                </ul>
                            </div>
                        </Nav>
                        <Nav className="ms-auto nav-btn"> {/* Added ms-auto class */}
                            <button>Sign in</button>
                            <div>
                                <img src={CART} alt="Cart" />
                            </div>
                            <div className='nav-cart-count'>0</div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
