import Footer from "./components/Footer";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Selectuser from "./components/Signup/Selectuser";
function App() {
 
  return (
    <div className="App">
      <Navbar/>
          <Form/>
          <Selectuser/>
          <Footer/>
          
    </div>
  );
}

export default App;
