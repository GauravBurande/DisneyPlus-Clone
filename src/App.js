import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Login />}>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
