import './App.css';
import './home.css';
import Navbar from './Pages/Navbar';
import "./Pages/Page.css";
import Allroutes from "./Components/Allroutes"

function App() {
    return (
      <div className='App'>
        <div className="container">
          <Navbar />
          <Allroutes />
        </div>
      </div>
    );
}

export default App;
