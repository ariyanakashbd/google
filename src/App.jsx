import { Routes, Route} from "react-router";
import Sign from "./pages/Sign";
import Welcome from "./pages/Welcome";
import Verification from "./pages/Verification";
import Otp from "./pages/Otp";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Sign/>} />
        <Route path="/welcome" element={<Welcome/>} />
        <Route path="/verification" element={<Verification/>} />
        <Route path="/otp" element={<Otp/>} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </>
  )
}

export default App
