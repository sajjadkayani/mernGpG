import Footer from "./components/Footer";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Selectuser from "./components/Signup/Selectuser";
import { BrowserRouter, Routes , Route } from "react-router-dom";
import Signuppharma from "./components/Signup/Signuppharma";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path="/a" element={<Form/>} />
        <Route path="selectuser" element={<Selectuser/>} />
        <Route path="pharmasignup" element={<Signuppharma/>} />
      </Routes>
      </BrowserRouter>
      <Footer/>      
    </div>
  );
}

export default App;
