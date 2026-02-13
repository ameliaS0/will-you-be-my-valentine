"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "I'm better than any men !",
      "What if I asked really nicely?",
      "Pwetty please 🥺",
      "With a chocolate cake",
      "What about heart shaped cookies?",
      "PLEASE POOKIE",
      "But 😭",
      "I am going to die",
      "Yep im dead",
      "ok ur talking to amelia's ghost",
      "please sweetieeeee",
      "🥹🥹🥹",
      "PWETTY PLEASEEE",
      "Estoy muerto",
      "No??",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center relative overflow-hidden" style={{ backgroundColor: "#FFF0F5" }}>
      {yesPressed ? (
        <>
          <img src="https://i.pinimg.com/originals/1f/a2/2b/1fa22befc10e3cbacd58c5b407a97997.gif" />
          <div className="my-4 text-4xl font-bold">WOOOOOO!!! I love you pookie!!</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="my-4 text-4xl">Inna-chan will you be my Valentine?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-purple-600 px-4 py-2 font-bold text-white hover:bg-purple-800`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className="rounded px-4 py-2 font-bold text-white"
              style={{ backgroundColor: "#AB274F" }}
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
