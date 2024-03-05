import Home from './Home';
import Login from './Login';
import Register from './Register';
import MultipleCards from '../MultipleCards';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {

  return (
    <div style={{marginTop : '-3.5rem'}}>
      <BrowserRouter >
        <Routes>
        <Route path="/muliti" element={<MultipleCards />} />
        <Route path="/cardDetails/:id" element={<CardDetails />} />
        <Route path="/bargraph/:id" element={<Bargraph />} />
        <Route path="/barline/:id" element={<Barline />} />
          <Route path="/" element ={<Register/>} />
          <Route path="/register" element ={<Register/>} />
          <Route path="/login" element ={<Login/>} />
          <Route path="/home" element ={<Home/>} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
