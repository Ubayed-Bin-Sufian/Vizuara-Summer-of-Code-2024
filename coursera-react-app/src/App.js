import Heading from "./components/Heading";
import Main from "./components/Main"
import Sidebar from "./components/Sidebar"
import './App.css'

function App(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <Heading name='Ubayed' color='green' />
      <Main greet='Assalamu Alaikum' />
      <Sidebar greeting='Ahlan wa Sahlan' />
    </div>
  );
}

export default App;