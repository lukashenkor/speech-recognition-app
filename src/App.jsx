import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NewMemo from "./pages/NewMemo";
import EditMemo from "./pages/EditMemo";
import NotFound from "./pages/NotFound";
import { useEffect, useState } from "react";
import MemosList from "./components/MemosList";

function App() {
  const [memosList, setMemosList] = useState([]);

  useEffect(() => {
    const localStorageMemos = localStorage.getItem("memosList");
    if (localStorageMemos) {
      setMemosList(JSON.parse(localStorageMemos));
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <NavLink to="/">My Voice Memos</NavLink>
      </header>
      <div className="wrapper">
        <MemosList memosList={memosList} setMemosList={setMemosList} />
        <main>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route
              path="/new"
              exact
              element={
                <NewMemo memosList={memosList} setMemosList={setMemosList} />
              }
            />
            <Route
              path="/edit/:uuid"
              element={
                <EditMemo memosList={memosList} setMemosList={setMemosList} />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
