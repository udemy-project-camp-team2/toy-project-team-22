import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Seat from "./pages/Seat";
import Landing from "./pages/Landing";
import Main from "./pages/Main";
import Cafe from "./pages/Cafe";
import Layout from "./components/layout/Layout";
import Login from "./components/login/Login"

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={<Main />} />
          <Route path="/cafe/:id" element={<Cafe />} />
          <Route path="/seat/:id" element={<Seat />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
