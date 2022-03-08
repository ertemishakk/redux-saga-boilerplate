import React from "react";
import { Form, Input, InputGroup, Row, Col, Button } from "reactstrap";
import { useState } from "react";
import addToDo from "../actions/addToDo";
import { connect } from "react-redux";
import lodash from "lodash";
import Alert from "./Alert";

function ToDoInput(props) {
  const [todo, setTodo] = useState("");
  const [alert, setAlert] = useState(false);

  const handleClick = e => {
    if (todo !== "") {
      props.addToDo(todo);
      setTodo("");
      setAlert(true);
      lodash.delay(() => setAlert(false), 2000);
    }
  };

  return (
    <div>
      <Row>
        <Col>
          <Row>
            <Col>
              <div className="pb-1">
                <Form onSubmit={e => e.preventDefault()}>
                  <InputGroup>
                    <Input
                      placeholder="Add your new todo"
                      value={todo}
                      name="todo"
                      onChange={e => setTodo(e.target.value)}
                    />
                    <Button
                      className="border-0"
                      style={{ backgroundColor: "rgb(72,95,238)" }}
                      onClick={e => handleClick(e)}
                    >
                      <span style={{ fontWeight: 700, fontSize: 20 }}>+</span>
                    </Button>
                  </InputGroup>
                </Form>
              </div>

              {alert && <Alert />}
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    addToDo: todo => dispatch(addToDo(todo))
  };
};

export default connect(undefined, mapDispatchToProps)(ToDoInput);
