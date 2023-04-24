import { useState } from "react";

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
// eslint-disable-next-line no-undef
const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.continuous = true;

let final_transcript = "";

function useRecognitionSpeech() {
  const [speechText, setSpeechText] = useState(null);
  const [isListening, setIsListening] = useState(false);

  function startSpeechRecognition() {
    resetSpeechRecognition();
    recognition.start();
    setIsListening(true);
  }

  function stopSpeechRecognition() {
    recognition.stop();
    setIsListening(false);
  }

  function resetSpeechRecognition() {
    recognition.abort();
    final_transcript = "";
    setSpeechText("");
    setIsListening(false);
  }

  recognition.onresult = (e) => {
    let interim_transcript = "";

    for (let i = e.resultIndex; i < e.results.length; ++i) {
      if (e.results[i].isFinal) {
        final_transcript += e.results[i][0].transcript;
      } else {
        interim_transcript += e.results[i][0].transcript;
      }
    }

    setSpeechText(final_transcript + interim_transcript);
  };

  return {
    speechText,
    startSpeechRecognition,
    stopSpeechRecognition,
    resetSpeechRecognition,
    isListening,
  };
}

export default useRecognitionSpeech;
