import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 0, value: 1 },
      { id: 1, value: 3 },
      { id: 2, value: 4 },
      { id: 3, value: 6 }
    ]
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);

    counters[index] = { ...counter };
    counters[index].value++;

    this.setState({ counters: counters });
  };

  handleDelete = counterId => {
    console.log("handle delete", counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
  };
  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          ></Counters>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
