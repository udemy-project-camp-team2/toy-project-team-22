import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Seat from "./pages/Seat";
import Landing from "./pages/Landing";
import Main from "./pages/Main";
import Cafe from "./pages/Cafe";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/main" element={<Main />} />
        <Route path="/cafe/:id" element={<Cafe />} />
        <Route path="/seat/:id" element={<Seat />} />
      </Routes>
    </Router>
  );
};

export default App;
