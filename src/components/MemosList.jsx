import React, { memo } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function MemosList({ memosList, setMemosList }) {
  const navigate = useNavigate();

  function deleteMemoClickHandler(uuid) {
    const newMemosList = memosList.filter((memo) => memo.uuid !== uuid);
    setMemosList(newMemosList);
    localStorage.setItem("memosList", JSON.stringify(newMemosList));
    navigate("/");
  }

  return (
    <div>
      <NavLink to="/new" className={"new-memo link-button"}>
        + New memo
      </NavLink>
      <nav>
        {memosList.map((memo) => (
          <div key={memo.uuid}>
            <NavLink
              to={`/edit/${memo.uuid}`}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {memo.description}
            </NavLink>
            <button onClick={() => deleteMemoClickHandler(memo.uuid)}>X</button>
          </div>
        ))}
      </nav>
    </div>
  );
}

export default memo(MemosList);
