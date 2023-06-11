import { useState } from "react";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export const TaskForm = () => {
  const [form, setForm] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setForm({
      ...form,
      [name]: value,
    });
  };
  console.log(form);
  // send data to the api

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    //  send data to the api
    const respPromise = postTask(form);
    toast.promise(rspPromise, {
      pending: "please wait....",
    });
    const { status, message } = await postTask(form);
    console.log(status);
    toast[status](message);
  };

  return (
    <Form className=" border p-2 bg-light rounded">
      <Row className="g-2">
        <Col md="6">
          <Form.Control required placeholder="watching tv" name="task" />
        </Col>
        <Col md="2">
          <Form.Control required placeholder="33" type="number" />
        </Col>
        <Col className="d-grid">
          <Button variant="primary">Add Task</Button>
        </Col>
        <Col md="2"></Col>
      </Row>
    </Form>
  );
};
