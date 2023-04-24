import React from "react";
import { useParams } from "react-router-dom";
import CreateEditMemo from "../components/CreateEditMemo";

function EditMemo({ memosList, setMemosList }) {
  const { uuid } = useParams();
  const memo = memosList.find((m) => m.uuid === uuid);

  if (!memo) {
    return (
      <div>
        <h1>Memo is not found</h1>
      </div>
    );
  }

  return (
    <>
      <h1>Edit memo</h1>
      <CreateEditMemo
        memo={memo}
        memosList={memosList}
        setMemosList={setMemosList}
      />
    </>
  );
}

export default EditMemo;
