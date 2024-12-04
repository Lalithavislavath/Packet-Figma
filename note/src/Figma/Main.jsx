import { useState } from "react";
import "./Figma.css";

function Main({ selectedGroup }) {
  const [inputValue, setInputValue] = useState("");

  const getInitials = (name) => {
    const words = name.trim().split(" ");
    if (words.length === 1) {
      return words[0].slice(0, 2).toUpperCase();
    } else {
      const firstInitial = words[0][0];
      const lastInitial = words[words.length - 1][0];
      return (firstInitial + lastInitial).toUpperCase();
    }
  };

  const handleAddParagraph = () => {
    if (inputValue.trim()) {
      const currentDateTime = new Date().toLocaleString();
      const newPara = document.createElement("div");
      newPara.className = "para";
      newPara.innerHTML = `
        <span class="text">${inputValue}</span>
        <span class="date-time">${currentDateTime}</span>
      `;

      // Add event listener to toggle border
      newPara.addEventListener("click", (e) => {
        document.querySelectorAll(".para").forEach((para) => {
          para.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
      });

      const paragraphContainer = document.querySelector(".paragraph-container");
      paragraphContainer.appendChild(newPara);

      setInputValue("");
    }
  };

  return (
    <div className="main-content">
      {selectedGroup ? (
        <div style={{ background: "Lightblue", height: "200vh" }}>
          <div className="navbar">
            <header className="initial">{getInitials(selectedGroup.name)}</header>
            <h1>{selectedGroup.name}</h1>
          </div>
          <div className="paragraph-container"></div>
          <div className="input-container">
            <input type="text" className="input-box" placeholder="Enter your text here..." value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}/>
            <button className="send-button" onClick={handleAddParagraph}>
              ➤
            </button>
          </div>
        </div>
      ) : (
        <div style={{ background: " #DAE5F5", height: "100vh" }}>
          <img className="notes" src="./Assets/image.png" alt="pocket notes" />
          <h1 style={{ color: "black", textAlign: "center", margin: "auto" }}>Pocket Notes</h1>
          <p style={{ color: "black", textAlign: "center" }}>
            Send and receive messages without keeping your phone online.
            <br />
            Use Pocket Notes on up to 4 linked devices and 1 mobile phone.
          </p>
          <div className="key">
            <img className="vector" src="/Assets/Vector.png" alt="vector" />
            <p>end-to-end encrypted</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Main;
