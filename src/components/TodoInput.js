import React, { Component } from "react";

export class TodoInput extends Component {
  render() {
    const { item, handleChange, addItem, editItem } = this.props;

    return (
      <div className="card card-body my-3">
        <form onSubmit={addItem}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book"></i>
              </div>
            </div>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="add todo item"
              value={item}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            disabled={item ? false : true}
            className={
              editItem
                ? "btn btn-block btn-success text-capitalize mt-3"
                : "btn btn-block btn-primary text-capitalize mt-3"
            }
          >
            {editItem ? "edit item" : "add item"}
          </button>
        </form>
      </div>
    );
  }
}

export default TodoInput;
