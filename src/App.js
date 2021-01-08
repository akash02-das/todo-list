import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

class App extends Component {
  state = {
    items: [],
    id: uuidv4(),
    item: "",
    editItem: false,
  };

  handleChange = (e) => {
    this.setState({ item: e.target.value });
  };

  addItem = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item,
    };
    const updatedItems = [...this.state.items, newItem];

    if (this.state.item.length > 0) {
      this.setState({
        items: updatedItems,
        item: "",
        id: uuidv4(),
        editItem: false,
      });
    }
  };

  clearList = () => {
    this.setState({ items: [] });
  };

  handleEdit = (id) => {
    console.log(`Edit Item ${id}`);
  };

  handleDelete = (id) => {
    const deleteItem = this.state.items.filter((item) => item.id !== id);
    this.setState({ items: deleteItem });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 col-md-8 mx-auto mt-4">
            <h2 className="text-capitalize text-center text-primary">
              Todo Input
            </h2>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              addItem={this.addItem}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleEdit={this.handleEdit}
              handleDelete={this.handleDelete}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
