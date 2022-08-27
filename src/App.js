import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import DashBase from './components/Dashboard/DashBase/DashBase';
import ConfigBroker from './components/Settings/ConfigBroker';
import Settings from './components/Settings/Settings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Settings />}/>
        <Route path="configbroker" element={<ConfigBroker />}/>
        <Route path="dash" element={<DashBase />}/>

      </Routes>
    </Router>
  );
}

export default App;
