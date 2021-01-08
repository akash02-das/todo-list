import React, { Component } from "react";
import TodoItem from "./TodoItem";

export class TodoList extends Component {
  render() {
    const { items, handleEdit, handleDelete, clearList } = this.props;

    return (
      <ul className="list-group my-5">
        <h2 className="text-success text-center text-capitalize">todo list</h2>
        {items.map((item) => {
          return (
            <TodoItem
              key={item.id}
              title={item.title}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          );
        })}
        <button
          className="btn btn-block btn-danger text-capitalize my-5"
          onClick={clearList}
        >
          clear list
        </button>
      </ul>
    );
  }
}

export default TodoList;
