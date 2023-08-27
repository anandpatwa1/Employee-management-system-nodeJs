import { Provider } from "react-redux"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import store from "./feature/store/store"
import ProfileList from "./components/ProfileList"
import Form from "./components/Form"


function App() {


  return (
    <Router>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProfileList/>}/>
          <Route path="/Login" element={<Form />}/>
        </Routes>
      </Provider>
    </Router>
  )
}

export default App
