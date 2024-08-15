import { Button, Modal } from "react-bootstrap";
import classes from "./Cart.module.css";
import { useSelector } from "react-redux";

function Cart(props) {
  let cartList = useSelector((state) => state.CartList.cartList);
  let totalAmount = cartList.reduce((total, item) => {
    return total + item.price * item.amount;
  }, 0);
  return (
    <Modal
      show={props.onShow}
      onHide={props.onHide}
      style={{ backgroundColor: "black", opacity: "0.9" }}
    >
      <Modal.Header closeButton>
        <Modal.Title>Cart</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <ul className={classes.cart}>
          {cartList.map((el) => (
            <li key={el.nameI}>
              <div>Name of Item: {el.nameI}</div>
              <div>Price of Item: Rs.{el.price}</div>
              <div>Quantity:{el.amount}</div>
            </li>
          ))}
        </ul>
        <div>Total Amount :Rs{totalAmount}</div>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Close
        </Button>
        <Button variant="primary">Purchase</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Cart;
