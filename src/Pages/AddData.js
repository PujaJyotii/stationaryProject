import { Button, Card, Form } from "react-bootstrap";
import classes from "./AddData.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listAction } from "../Redux/ListSlice";

function AddData() {
  const [nameI, setNameI] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const list = useSelector((state) => state.List.list);
  const dispatch = useDispatch();
  const SubmitHandler = async (e) => {
    e.preventDefault();
    if (nameI.length === 0 || +quantity < 0 || +price < 0) {
      return;
    }
    let obj = {
      nameI: nameI,
      quantity: quantity,
      price: price,
    };
    try {
      let resp = await fetch(
        "https://newprojectpractise-93cee-default-rtdb.firebaseio.com/data.json",
        {
          method: "POST",
          body: JSON.stringify(obj),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!resp.ok) {
        throw new Error(resp.status);
      }
      let data = await resp.json();
      obj = { ...obj, name: data.name };
      dispatch(listAction.add(obj));
    } catch (err) {
      console.log(err);
    }

    setNameI("");
    setPrice("");
    setQuantity("");
  };
  const DeleteHandler = async (item) => {
    let index = list.findIndex((el) => el.nameI === item.nameI);
    try {
      let resp = await fetch(
        `https://newprojectpractise-93cee-default-rtdb.firebaseio.com/data/${list[index].id}.json`,
        {
          method: "DELETE",
        }
      );
      if (!resp.ok) {
        throw new Error(resp.status);
      }
      let data = await resp.json();
      console.log(data);
      dispatch(listAction.delete(item));
    } catch (error) {
      console.log(error);
    }
  };
  const EditHandler = async (item) => {
    setNameI(item.nameI);
    setPrice(item.price);
    setQuantity(item.quantity);
    let index = list.findIndex((el) => el.nameI === item.nameI);
    try {
      let resp = await fetch(
        `https://newprojectpractise-93cee-default-rtdb.firebaseio.com/data/${list[index].id}.json`,
        {
          method: "DELETE",
        }
      );
      if (!resp.ok) {
        throw new Error(resp.status);
      }
      let data = await resp.json();
      console.log(data);
      dispatch(listAction.delete(item));
    } catch (error) {
      console.log(error);
    }
  };
  const UpdateHandler = async (item) => {
    if (nameI.length === 0 || +price < 0 || +quantity < 0) {
      return;
    }

    let obj = {
      nameI: nameI,
      price: price,
      quantity: quantity,
    };
    let index = list.findIndex((el) => el.nameI === item.nameI);
    try {
      let resp = await fetch(
        `https://newprojectpractise-93cee-default-rtdb.firebaseio.com/data/${list[index].id}.json`,
        {
          method: "PUT",
          body: JSON.stringify(obj),
          headers: { "Content-Type": "application/json" },
        }
      );
      if (!resp.ok) {
        throw new Error(resp.status);
      }
      let data = await resp.json();
      console.log(data);
      dispatch(listAction.update({ obj, item }));
    } catch (error) {
      console.log(error);
    }

    setNameI("");
    setPrice("");
    setQuantity("");
  };
  useEffect(() => {
    const getData = async () => {
      let resp = await fetch(
        "https://newprojectpractise-93cee-default-rtdb.firebaseio.com/data.json"
      );
      let data = await resp.json();
      let res = [];
      for (let key in data) {
        res.push({
          ...data[key],
          id: key,
        });
      }
      dispatch(listAction.get(res));
    };
    getData();
  }, [dispatch]);
  return (
    <>
      <Card className={classes.add}>
        <Card.Body>
          <Card.Title>Add data </Card.Title>

          <Form onSubmit={SubmitHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name of Item</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter item"
                value={nameI}
                onChange={(e) => setNameI(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                placeholder="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Price of Item</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Price of each item"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>
            <Button className={classes.btn} type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <Card className={classes.addN}>
        <ul className={classes.name}>
          {list.map((el) => (
            <li key={el.nameI}>
              <div className={classes.outer}>
                <div className={classes.val}>
                  <div>Name of Item : {el.nameI}</div>
                  <div>Price of each Item : Rs.{el.price}</div>
                  <div>Quantity of Items : {el.quantity}</div>
                </div>
                <div className={classes.outer1}>
                  <Button
                    className={classes.btn}
                    onClick={() => UpdateHandler(el)}
                  >
                    Update
                  </Button>
                  <Button
                    className={classes.btn}
                    onClick={() => EditHandler(el)}
                  >
                    Edit
                  </Button>
                  <Button
                    className={classes.btn}
                    onClick={() => DeleteHandler(el)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
              <div className={classes.inner}>
                <Button className={classes.btn}>Add One</Button>
                <Button className={classes.btn}>Add Two</Button>
                <Button className={classes.btn}>Add Three</Button>
              </div>
            </li>
          ))}
        </ul>
      </Card>
    </>
  );
}

export default AddData;
