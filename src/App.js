import './App.css';
import Navbar from './Components/Navbar.jsx';
import "./Pages/Page.css";
import Allroutes from "./Components/Allroutes"
function App() {
    return (
      <div className='App'>
          <Navbar />
        <Allroutes />
      </div>
    );
}
export default App;