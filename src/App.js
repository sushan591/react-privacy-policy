import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsOfService from "./TermsOfService";
import UserDeletePolicy from "./UserDeletePolicy";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms-of-service">Terms of Service</Link>
            </li>
            <li>
              <Link to="/user-delete-policy">User Delete Policy</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Routes>
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/user-delete-policy" element={<UserDeletePolicy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
