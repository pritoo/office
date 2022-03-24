import './App.css';
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Wedig from './components/Wedig';
import Allemployee from './components/Allemployee';
import Addemployee from './components/Addemployee';
import Notfound from './components/Notfound';

function App() {
  return (
    <>
    <div className="App">
    <Router>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Wedig />} />
          <Route exact path="/all" element={<Allemployee />} />
          <Route exact path="/add" element={<Addemployee />} />
          <Route element={<Notfound />}/>
        </Routes>
   </Router>
    </div>
    </>
  );
}

export default App;
