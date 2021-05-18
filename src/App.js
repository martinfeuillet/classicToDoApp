import logo from "./logo.svg";
import "./App.css";
import {Button, Card, Container, makeStyles} from "@material-ui/core";
import { Component } from "react";
import Header from "./Components/Header";
import CreateField from "./Components/CreateField";
import FilterField from "./Components/FilterField";
import todo from "./todo.json";
var initialArray = ["Finish Redux Tutorials", "Learn more about Relay", "Build 5 more React apps", "Review React Component Lifecycle", "Obtain Data Visualization Certificate", "Review Algorithms", "Tweet Progress", "Get a coffee!", "Browse Google Fonts", "Learn more about React Native"];


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listTodo: initialArray,
      search: "",
      newItem: "",
    };
  }
  handleSearch = (event) => {
      this.setState({search: event.target.value})
  };

  handleRemove = (event) => {
    let cloneState = this.state.listTodo.slice()
    cloneState.splice(event,1)
    this.setState({listTodo : cloneState})
  }

  handleCreateField = (event) => {
    event.preventDefault();
    if (this.state.newItem.length > 0){
      this.state.listTodo.push(this.state.newItem);
      this.setState({ newItem: '' });
    }
  }

  handleClear = () => {
    this.setState({listTodo : []})
  }

  handleReset = () => {
    this.setState({listTodo : initialArray})
  }

  handleNewItem = (e) => {
    this.setState({newItem : e.target.value})
  }

  render() {
    return (
      <div className="App">
        <Container maxWidth="xl" className="bloc">
          <Header />
          <Card className="card2">
            <CreateField onSearch={this.handleSearch} search={this.state.search} onCreateField={this.handleCreateField} onNewItem={this.handleNewItem}  newItem={this.state.newItem} />
            <FilterField list={this.state.listTodo} search={this.state.search} handleRemove={this.handleRemove} />
            <Button variant={"contained"} color={'primary'} onClick={this.handleClear}>Clear the list</Button>
            <Button variant={"contained"} color={'secondary'} onClick={this.handleReset}>Reset the list</Button>
          </Card>
        </Container>
      </div>
    );
  }


}

export default App;
