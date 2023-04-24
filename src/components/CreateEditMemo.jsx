import React, { useEffect, useState } from "react";
import useRecognitionSpeech from "../hooks/useRecognitionSpeech";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function CreateEditMemo({ memosList, setMemosList, memo }) {
  const [memoText, setMemoText] = useState("");
  const navigate = useNavigate();
  const {
    isListening,
    resetSpeechRecognition,
    speechText,
    startSpeechRecognition,
    stopSpeechRecognition,
  } = useRecognitionSpeech();

  useEffect(() => {
    setMemoText(speechText || "");
  }, [speechText]);

  useEffect(() => {
    if (memo) {
      setMemoText(memo.description);
    }
  }, [memo]);

  function saveMemo() {
    resetSpeechRecognition();
    let newMemosList;
    if (memo) {
      const index = memosList.findIndex((m) => m.uuid === memo.uuid);
      newMemosList = [...memosList];
      newMemosList[index].description = memoText;
    } else {
      newMemosList = [...memosList, { uuid: uuidv4(), description: memoText }];
    }
    localStorage.setItem("memosList", JSON.stringify(newMemosList));
    setMemosList(newMemosList);
    setMemoText("");
    navigate("/");
  }

  function cancelNewMemo() {
    resetSpeechRecognition();
    setMemoText("");
    navigate("/");
  }

  return (
    <div>
      <p>{isListening ? "Recording..." : "Press start button to record"}</p>
      <textarea
        name=""
        id=""
        cols="80"
        rows="10"
        placeholder="Write your memos here or start speech recognition"
        value={memoText}
        disabled={isListening}
        onChange={(e) => setMemoText(e.target.value)}
      />
      <div className="actions">
        <button
          onClick={isListening ? stopSpeechRecognition : startSpeechRecognition}
        >
          {isListening ? "Stop" : "Start"}
        </button>
        <button onClick={saveMemo} disabled={!memoText}>
          Save
        </button>
        <button onClick={cancelNewMemo}>Cancel</button>
      </div>
    </div>
  );
}

export default CreateEditMemo;
