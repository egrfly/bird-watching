import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Sightings from "./pages/Sightings"
import "./App.scss"

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/sightings" element={<Sightings />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
