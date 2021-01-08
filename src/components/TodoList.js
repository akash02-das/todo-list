import React, { Component } from "react";
import TodoItem from "./TodoItem";

export class TodoList extends Component {
  render() {
    const { items, handleEdit, handleDelete, clearList } = this.props;

    return (
      <div className="my-5">
        <h2 className="text-success text-center text-capitalize">todo list</h2>
        <ul className="list-group">
          {items.map((item) => {
            return (
              <TodoItem
                key={item.id}
                title={item.title}
                handleEdit={() => handleEdit(item.id)}
                handleDelete={() => handleDelete(item.id)}
              />
            );
          })}
        </ul>
        <button
          className="btn btn-block btn-danger text-capitalize my-3"
          disabled={items.length !== 0 ? false : true}
          onClick={clearList}
        >
          clear list
        </button>
      </div>
    );
  }
}

export default TodoList;
