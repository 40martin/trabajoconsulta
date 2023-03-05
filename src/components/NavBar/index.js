import CartWidget from "./CartWidget";

function NavBar() {
    return (
        <div className="nav-bar">
            <div className="left">
                <div className="logo">
                    <a href="/">
                        <img src="https://png.pngtree.com/element_our/20200702/ourmid/pngtree-cart-shopping-cart-icon-png-free-illustration-image_2284387.jpg" alt="logo"></img>
                    </a>
                </div>

                <ul className="menu">
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </div>
            <div className="right">
                <CartWidget />
            </div>
        </div>
    );
}