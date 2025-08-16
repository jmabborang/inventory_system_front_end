import LandingPage from './view/landing_page';
import Login from './view/login';
import Dashboard from './view/dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LoadingExample from './view/loading_example';

function App() {
  return (
    // <LoadingExample/>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
