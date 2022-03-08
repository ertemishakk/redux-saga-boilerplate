import React from "react";
import { connect } from "react-redux";
import lodash from "lodash";
import removeToDo from "../actions/removeToDo";

const TodoList = props => {
  return (
    <div style={{ maxHeight: 400, overflow: "scroll" }}>
      {props.todoList.map((todo, index) => (
        <div key={index} onClick={() => props.removeToDo(index)}>
          <p
            className="mt-1 p-2 "
            style={{
              backgroundColor: "whitesmoke",
              textAlign: "left",
              cursor: "pointer"
            }}
          >
            {lodash.upperFirst(todo)}
          </p>
        </div>
      ))}
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    removeToDo: id => dispatch(removeToDo(id))
  };
};
const mapStateToProps = state => {
  return {
    todoList: state.todoList
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
