import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/App.css';
import Home from "./Home";
import Header from "./Header";

function App() {
  return (
    <div className="App">
        <Header/>
        <Home/>
    </div>
  );
}

export default App;
