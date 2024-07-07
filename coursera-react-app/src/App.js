import Heading from "./components/Heading";

function App(props) {
  return (
    <div className="App">
      <h1>{props.title}</h1>
      <Heading />
    </div>
  );
}

export default App;