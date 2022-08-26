import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ConfigBroker from './components/Settings/ConfigBroker';
import Settings from './components/Settings/Settings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Settings />}/>
        <Route path="configbroker" element={<ConfigBroker />}/>
      </Routes>
    </Router>
  );
}

export default App;
