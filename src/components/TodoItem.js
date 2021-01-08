import React, { Component } from "react";

export class TodoItem extends Component {
  render() {
    const { title, handleEdit, handleDelete } = this.props;
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between">
        <h6>{title}</h6>
        <div>
          <span
            className="text-success mx-2"
            style={{ cursor: "pointer" }}
            onClick={handleEdit}
          >
            <i className="fas fa-pen"></i>
          </span>
          <span
            className="text-danger mx-2"
            style={{ cursor: "pointer" }}
            onClick={handleDelete}
          >
            <i className="fas fa-trash"></i>
          </span>
        </div>
      </li>
    );
  }
}

export default TodoItem;
