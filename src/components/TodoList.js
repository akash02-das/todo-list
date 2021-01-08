import React, { Component } from "react";
import TodoItem from "./TodoItem";

export class TodoList extends Component {
  render() {
    return (
      <section>
        <h1>Todo List</h1>
        <TodoItem />
      </section>
    );
  }
}

export default TodoList;
