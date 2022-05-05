import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import Home from "./Home";
import Header from "./Header";

function App() {
  return (
    <div className="App">
        <Header/>
        <Home/>
      <Footer />
    </div>
  );
}

export default App;
