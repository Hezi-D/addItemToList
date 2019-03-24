import React, { Component } from "react";
import { Button } from "react-bootstrap";

class Table extends React.Component {
  state = {
    buyItems: ["Milk", "Bread", "Cheese"]
  };

  addItem(e) {
    e.preventDefault();
    //1. Get our items list from our state:
    const { buyItems } = this.state;

    //2. Insert the new item from the user into varibels
    const newItem = this.newItem.value;

    //3.Spread the old arr list & adding the new item from the user
    this.setState({ buyItems: [...this.state.buyItems, newItem] });
  }

  render() {
    const { buyItems } = this.state;
    return (
      <div>
        <header>
          <h1>Shoping list</h1>

          <form
            className="form-inline"
            onSubmit={e => {
              this.addItem(e);
            }}
          >
            <div className="form-group">
              <label className="sr-only" htmlFor="newItemInput">
                Add new item
              </label>
              <input
                ref={input => {
                  this.newItem = input;
                }}
                type="text"
                placeholder="add..."
                className="form-control"
                id="newItemInput"
              />
            </div>

            <Button type="submit" bsStyle="success">
              Add
            </Button>
          </form>
        </header>

        <div className="content">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Item</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {buyItems.map(item => {
                return (
                  <tr key={item}>
                    <th scope="row">1</th>
                    <td>{item}</td>
                    <td>Button</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Table;
