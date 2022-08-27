import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ConfigConn from './components/Dashboard/ConfigureConnection/ConfigConn';
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
        <Route path="configconn" element={<ConfigConn />}/>

      </Routes>
    </Router>
  );
}

export default App;
