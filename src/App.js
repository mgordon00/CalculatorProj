import './App.scss';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { ResourcesPage } from './pages/ResourcesPage';
import { HomePage } from './pages/HomePage';
import { FAQPage } from './pages/FAQPage';

import { ProjectNavbar } from './components/ProjectNavbar';

function App() {
  return (
    <Router>
      <ProjectNavbar />
    <div className="container" style={{marginTop: '35px'}}>
      <div className="row">
        <div className="col-12">
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route path="/resources" element={<ResourcesPage/>} />
        <Route path="/faqs" element={<FAQPage/>} />
      </Routes>
    </div></div></div>
    </Router>
  );
}

export default App;
