import './App.css';
import LogInSignUp from './components/LogInSignUp';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './components/Main';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<LogInSignUp/>} />
        <Route path="main" element={<Main/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
