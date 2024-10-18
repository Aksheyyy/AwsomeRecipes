import { BrowserRouter as Router,Route, Routes } from "react-router-dom"
import Home from "./Components/Home"
import View from "./Components/View"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import { useState } from "react"



function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch=()=>{

  }
  return (
    <>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSearch={handleSearch}/>
      <Router>
        <Routes>
          <Route path='/'  element={<Home searchTerm={searchTerm}/>}></Route>
          <Route path='/view/:id' element={<View/>}></Route>
        </Routes>
      </Router>
      <Footer/>
    </>
  )
}

export default App
