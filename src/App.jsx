//Hooks
import { BrowserRouter as Router } from "react-router-dom"
import AppContent from "./routes/AppRoutes"

function App() {

  return (
    <>
      <Router>
        <AppContent />
      </Router>

    </>
  )
}

export default App
