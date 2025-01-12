// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Course from "./pages/Course";
import ScrollToTop from "./components/ScrollToTop";
 
function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="font-alexandria bg-primaryBgColor">
      <Router>
        {/* <Layout> */}
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course/:id" element={<Course />} />
          <Route path="*" element={<Navigate to="/" replace />} />

        </Routes>
        {/* </Layout> */}
      </Router>
    </div>
  );
}

export default App;
