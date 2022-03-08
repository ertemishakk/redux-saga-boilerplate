import React from "react";
import Header from "../components/Header";
import { Container, Row, Col } from "reactstrap";
import ToDoInput from "../components/ToDoInput";
import addToDo from "../actions/addToDo";
import { connect } from "react-redux";
import TodoList from "../components/TodoList";

function InitialScreen() {
  return (
    <div style={{ height: "100vh" }}>
      <Container className="h-100">
        <Row className="h-100">
          <Col className=" my-auto ">
            <div
              className=" mx-auto  p-3"
              style={{
                backgroundColor: "white",
                maxWidth: 500,
                borderRadius: 10
              }}
            >
              <Header />
              <ToDoInput />
              <TodoList />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    addToDo: () => dispatch(addToDo())
  };
};

const mapStateToProps = state => ({
  todoList: state.todoList
});

export default connect(mapStateToProps, mapDispatchToProps)(InitialScreen);
