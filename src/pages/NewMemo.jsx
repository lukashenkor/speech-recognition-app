import CreateEditMemo from "../components/CreateEditMemo";

function NewMemo({ memosList, setMemosList }) {
  return (
    <>
      <h1>Create new memo</h1>
      <CreateEditMemo memosList={memosList} setMemosList={setMemosList} />
    </>
  );
}

export default NewMemo;
