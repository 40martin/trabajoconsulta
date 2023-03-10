import { BsFillCartFill } from 'react-icons/bs';

function CartWidget() {
    return (
        <a href="#" className="cart-widget">
            <BsFillCartFill className="icon" />
            <span className="badge">3</span>
        </a>
    );
}

export default CartWidget;