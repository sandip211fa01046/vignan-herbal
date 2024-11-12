import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import DetailsPage from "./component/DetailsPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:titleforRouting" element={<DetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
