import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component.js"
import ExcercisesList from "./components/excercises-list.component"
import EditExcercise from "./components/edit-excercise.component"
import CreateExcercise from "./components/create-excercise.component"
import CreateUser from "./components/create-user.component"

function App() {
  return (
    <Router>

        <Navbar />

        <Routes>
          <Route path = '/' exact element={<ExcercisesList />} />
          <Route path = '/edit/:id' element={<EditExcercise />} />
          <Route path = '/create' element={<CreateExcercise />} />
          <Route path = '/user' element={<CreateUser />} />      
        </Routes>
    </Router>
  );
}

export default App;
