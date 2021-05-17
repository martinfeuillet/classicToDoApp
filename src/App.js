import logo from './logo.svg';
import './App.css';
import {Container} from "@material-ui/core";


function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <CreateField />
        <FilterField />
      </Container>
    </div>
  );
}

export default App;
