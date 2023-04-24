import { NavLink, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NewMemo from './pages/NewMemo';
import EditMemo from './pages/EditMemo';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavLink to="/">My Voice Memos</NavLink>
      </header>
      <main>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/new" exact element={<NewMemo />} />
          <Route path="/edit/:uuid" element={<EditMemo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
