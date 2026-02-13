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
    <div className="relative -mt-16 flex h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100">
      {/* Floating hearts background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float text-pink-400 opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
              fontSize: `${20 + Math.random() * 30}px`,
            }}
          >
            ♥
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {yesPressed ? (
          <div className="animate-fadeIn text-center">
            <div className="mb-6 transform animate-bounce">
              <img
                src="https://i.pinimg.com/originals/1f/a2/2b/1fa22befc10e3cbacd58c5b407a97997.gif"
                className="mx-auto rounded-3xl shadow-2xl max-w-md"
                alt="Happy celebration"
              />
            </div>
            <div className="my-6 text-5xl font-black bg-gradient-to-r from-pink-500 via-red-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
              WOOOOOO!!! I love you pookie!! 💕
            </div>
            <div className="mt-4 text-2xl text-pink-600">✨ Best decision ever! ✨</div>
          </div>
        ) : (
          <div className="animate-fadeIn text-center">
            {/* Image with nice styling */}
            <div className="mb-8 transform transition-transform hover:scale-105">
              <img
                className="h-[250px] mx-auto rounded-full shadow-2xl border-8 border-white ring-4 ring-pink-300"
                src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
                alt="Cute bear with roses"
              />
            </div>

            {/* Question text with gradient */}
            <h1 className="my-8 text-5xl font-black bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 bg-clip-text text-transparent drop-shadow-lg">
              Inna-chan will you be my Valentine? 💖
            </h1>

            {/* Jelly Buttons */}
            <div className="flex items-center justify-center gap-6 mt-8">
              {/* Yes Button - Purple/Pink Jelly */}
              <button
                className="jelly-button"
                style={{ 
                  fontSize: yesButtonSize,
                  padding: `${yesButtonSize * 0.5}px ${yesButtonSize * 1.2}px`,
                  minWidth: `${yesButtonSize * 5}px`,
                  height: 'auto',
                  minHeight: '55px',
                }}
                onClick={() => setYesPressed(true)}
              >
                Yes 💕
              </button>
              
              {/* No Button - Red/Rose Jelly */}
              <button
                onClick={handleNoClick}
                className="jelly-button-no"
              >
                {noCount === 0 ? "No" : getNoButtonText()}
              </button>
            </div>

            {/* Hint text */}
            {noCount > 3 && (
              <p className="mt-6 animate-bounce text-sm text-pink-600 font-semibold">
                ✨ Hint: The "Yes" button is getting bigger... ✨
              </p>
            )}
          </div>
        )}
      </div>

      {/* Custom CSS for jelly buttons and animations */}
      <style>{`
        /* Jelly button styling - Yes button (Purple/Pink) */
        .jelly-button {
          position: relative;
          border-radius: 45px;
          border: none;
          background-color: rgb(151, 95, 255);
          color: white;
          box-shadow: 0px 10px 10px rgb(210, 187, 253) inset,
                      0px 5px 10px rgba(5, 5, 5, 0.212),
                      0px -10px 10px rgb(124, 54, 255) inset;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          padding: 0 20px;
          transition: all 0.3s ease;
        }

        .jelly-button::before {
          width: 70%;
          height: 2px;
          position: absolute;
          background-color: rgba(250, 250, 250, 0.678);
          content: "";
          filter: blur(1px);
          top: 7px;
          border-radius: 50%;
        }

        .jelly-button::after {
          width: 70%;
          height: 2px;
          position: absolute;
          background-color: rgba(250, 250, 250, 0.137);
          content: "";
          filter: blur(1px);
          bottom: 7px;
          border-radius: 50%;
        }

        .jelly-button:hover {
          animation: jello-horizontal 0.9s both;
        }

        /* Jelly button styling - No button (Red/Rose) */
        .jelly-button-no {
          position: relative;
          width: 150px;
          height: 55px;
          border-radius: 45px;
          border: none;
          background-color: rgb(236, 72, 153);
          color: white;
          box-shadow: 0px 10px 10px rgb(252, 211, 227) inset,
                      0px 5px 10px rgba(5, 5, 5, 0.212),
                      0px -10px 10px rgb(190, 24, 93) inset;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          transition: all 0.3s ease;
        }

        .jelly-button-no::before {
          width: 70%;
          height: 2px;
          position: absolute;
          background-color: rgba(250, 250, 250, 0.678);
          content: "";
          filter: blur(1px);
          top: 7px;
          border-radius: 50%;
        }

        .jelly-button-no::after {
          width: 70%;
          height: 2px;
          position: absolute;
          background-color: rgba(250, 250, 250, 0.137);
          content: "";
          filter: blur(1px);
          bottom: 7px;
          border-radius: 50%;
        }

        .jelly-button-no:hover {
          animation: jello-horizontal 0.9s both;
        }

        /* Jello animation */
        @keyframes jello-horizontal {
          0% {
            transform: scale3d(1, 1, 1);
          }
          30% {
            transform: scale3d(1.25, 0.75, 1);
          }
          40% {
            transform: scale3d(0.75, 1.25, 1);
          }
          50% {
            transform: scale3d(1.15, 0.85, 1);
          }
          65% {
            transform: scale3d(0.95, 1.05, 1);
          }
          75% {
            transform: scale3d(1.05, 0.95, 1);
          }
          100% {
            transform: scale3d(1, 1, 1);
          }
        }

        /* Floating hearts animation */
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-100vh) rotate(180deg);
          }
        }

        .animate-float {
          animation: float linear infinite;
        }

        /* Fade in animation */
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}