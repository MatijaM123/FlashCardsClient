import './App.css';
import LogInSignUp from './components/LogInSignUp';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './components/Main';
import OpenedPile from './components/OpenedPile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<LogInSignUp/>} />
        <Route path="main" element={<Main/>} />
        <Route path="openedPile" element={<Main/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
