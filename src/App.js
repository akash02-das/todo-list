import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

class App extends Component {
  state = {
    items: [
      { id: 1, title: "wake up" },
      { id: 2, title: "take lunch" },
    ],
    id: uuidv4(),
    item: "",
    editItem: false,
  };

  handleChange = (e) => {
    console.log("Handle Change");
  };

  addItem = (e) => {
    console.log("Add Item");
  };

  clearList = (e) => {
    console.log("Clear List");
  };

  handleEdit = (id) => {
    console.log(`Edit Item ${id}`);
  };

  handleDelete = (id) => {
    console.log(`Delete Item ${id}`);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 col-md-8 mx-auto mt-4">
            <h3 className="text-capitalize text-center">Todo Input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              addItem={this.addItem}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
