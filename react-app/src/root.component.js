import { HashRouter as Router, Route, Routes, Redirect } from 'react-router-dom';
import Microservices from './components/microservices.component';
import Microfrontends from './components/microfrontends.component';
import Navigation from './components/navigation.component';
import './root.css'

export default function Root(props) {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Microservices />} />
        <Route path="/ms" element={<Microservices />} />
        <Route path="/mf" element={<Microfrontends />} />
      </Routes>
    </Router>
  );
}
