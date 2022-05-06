import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/App.css';
import Footer from './Footer';
import Header from "./Header";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./Home";
import HousingList from "./HousingList";
import HousingSingle from "./HousingSingle";
import React from "react";

function App() {
  return (
      <Router>
            <div className="App">
              <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/liste" element={<HousingList />} >
                        <Route path=":id"  element={<HousingSingle />} />
                    </Route>
                </Routes>
              <Footer />
            </div>
      </Router>
  );
}

export default App;
