// import Home from "./pages/Home";
import CountryList from "./components/CountryList";
import Header from "./components/Header";
import CountryDetails from "./pages/CountryDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<CountryList />} />
          <Route path="/:name" element={<CountryDetails />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
