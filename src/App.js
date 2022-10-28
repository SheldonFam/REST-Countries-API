import Home from "./pages/Home";
import Header from "./components/Header";
import CountryDetails from "./pages/CountryDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/:name" element={<CountryDetails />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
