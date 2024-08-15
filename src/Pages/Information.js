import { Button, Card, Form } from "react-bootstrap";
import classes from "./Information.module.css";
import { useState } from "react";

function Information() {
  const [req, setReq] = useState("");
  const SubmitH = (e) => {
    e.preventDefault();
    if (req.length === 0) {
      return;
    }
    console.log(req);
    setReq("");
  };
  return (
    <Card className={classes.item}>
      <Card.Header>Know us</Card.Header>
      <Card.Body>
        <Card.Text>
          "Day to Day Stationery" is your trusted destination for all your
          stationery needs. We offer a wide selection of quality products, from
          pens and notebooks to art supplies and office essentials. Our focus is
          on providing high-quality items at affordable prices, ensuring you
          find exactly what you need without compromising on value. We are
          committed to delivering a great shopping experience, whether you're
          visiting our physical store or browsing online. Our friendly staff is
          always ready to help you find the perfect products, and our range
          includes eco-friendly options for those who prioritize sustainability.
          At Day to Day Stationery, we believe in the power of good stationery
          to enhance creativity, organization, and productivity. Visit us today
          to discover the joy of finding the right tools for your day-to-day
          tasks.
        </Card.Text>

        <Form onSubmit={SubmitH}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Make a request</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter item"
              value={req}
              onChange={(e) => setReq(e.target.value)}
            />
          </Form.Group>
          <Button className={classes.btn} type="submit">
            Submit
          </Button>
        </Form>

        <Card.Footer className={classes.footer}>Have a nice day!</Card.Footer>
      </Card.Body>
    </Card>
  );
}

export default Information;
