import Home from "./pages/Home";
import CountryDetails from "./pages/CountryDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
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
