// Initialize variables for highlighting functionality
let currentLine = 0;
const currentHighlightClass = "highlight";
let lines = [];

// Original text editor functionality
function startHighlighting() {
  const contentDiv = document.getElementById("content");
  lines = contentDiv.innerText.split("\n");

  if (lines.length === 1 && lines[0] === "Type or paste your text here...") {
    return;
  }

  highlightLine(0);
  document.addEventListener("keydown", handleKeydown);
  updateWordCount();
}

function handleKeydown(event) {
  if (event.key === "ArrowDown") {
    currentLine = Math.min(currentLine + 1, lines.length - 1);
    highlightLine(currentLine);
  }
  if (event.key === "ArrowUp") {
    currentLine = Math.max(currentLine - 1, 0);
    highlightLine(currentLine);
  }
}

function highlightLine(lineIndex) {
  const contentDiv = document.getElementById("content");
  const highlightColor = getCurrentHighlightColor();

  contentDiv.innerHTML = lines
    .map((line, index) => {
      return `<div class="${index === lineIndex ? currentHighlightClass : ""}" 
            style="background-color:${index === lineIndex ? highlightColor : "transparent"};">
            ${line}
        </div>`;
    })
    .join("");

  // ✅ Keep highlighted text vertically centered
  const highlightedElement = contentDiv.querySelector(`.${currentHighlightClass}`);
  if (highlightedElement) {
    highlightedElement.scrollIntoView({ block: "center", behavior: "smooth" });
  }

  updateWordCount();

  // Update Firebase with the new content
  if (typeof updateFirebaseContent === "function") {
    updateFirebaseContent();
  }
}

// ✅ Update color picker value properly
function getCurrentHighlightColor() {
  const highlightColorSelect = document.getElementById("highlight-color");
  if (highlightColorSelect) {
    highlightColorSelect.addEventListener("input", (e) => {
      highlightColorSelect.value = e.target.value;
    });
    return highlightColorSelect.value || "#ffff00";
  }
  return "#ffff00";
}

function updateWordCount() {
  const contentDiv = document.getElementById("content");
  const text = contentDiv.innerText || contentDiv.textContent;
  const wordCount = text.trim().split(/\s+/).length;
  document.getElementById("word-count").textContent = `Word Count: ${wordCount}`;
}

// ✅ Apply Font Size and Line Spacing Correctly
function setupStyleListeners() {
  document.getElementById("font-type")?.addEventListener("change", function () {
    document.getElementById("content").style.fontFamily = this.value;
  });

  document.getElementById("line-spacing")?.addEventListener("input", function () {
    document.getElementById("content").style.lineHeight = this.value;
  });

  document.getElementById("font-size")?.addEventListener("input", function () {
    const contentDiv = document.getElementById("content");
    contentDiv.style.fontSize = `${this.value}px`;
    contentDiv.style.lineHeight = document.getElementById("line-spacing").value;
  });

  // ✅ Add Bold, Italic, Underline Functionality
  document.getElementById("bold-btn")?.addEventListener("click", () => {
    document.execCommand("bold");
    saveContent(); // Save changes after formatting
  });

  document.getElementById("italic-btn")?.addEventListener("click", () => {
    document.execCommand("italic");
    saveContent(); // Save changes after formatting
  });

  document.getElementById("underline-btn")?.addEventListener("click", () => {
    document.execCommand("underline");
    saveContent(); // Save changes after formatting
  });

  document.getElementById("night-mode")?.addEventListener("change", function () {
    document.body.classList.toggle("night-mode", this.checked);
  });
}

// Placeholder Text Functions
function removePlaceholder() {
  const contentDiv = document.getElementById("content");
  if (contentDiv.innerText === "Type or paste your text here...") {
    contentDiv.innerText = "";
    contentDiv.style.color = "black";
  }
}

function addPlaceholder() {
  const contentDiv = document.getElementById("content");
  if (contentDiv.innerText.trim() === "") {
    contentDiv.innerText = "Type or paste your text here...";
    contentDiv.style.color = "gray";
    localStorage.removeItem("content");
  }
}

// Save and Load Functions
function saveContent() {
  const contentDiv = document.getElementById("content");
  localStorage.setItem("content", contentDiv.innerHTML);

  if (typeof updateFirebaseContent === "function") {
    updateFirebaseContent();
  }
}

function loadContent() {
  const savedContent = localStorage.getItem("content");
  const contentDiv = document.getElementById("content");
  if (savedContent) {
    contentDiv.innerHTML = savedContent;
    contentDiv.style.color = "black";
  } else {
    addPlaceholder();
  }
}

// Clear Content Function
function clearContent() {
  const contentDiv = document.getElementById("content");
  contentDiv.innerText = "";
  addPlaceholder();

  if (typeof updateFirebaseContent === "function") {
    updateFirebaseContent();
  }
}

// Initialize everything when the page loads
window.onload = () => {
  console.log("Page loaded, initializing...");

  setupStyleListeners();
  loadContent();

  // Save content every 2 seconds
  setInterval(saveContent, 2000);
  window.addEventListener("beforeunload", saveContent);

  if (typeof initializeFirebase === "function") {
    initializeFirebase();
  } else {
    console.error("Firebase initialization function not found");
  }

  window.startHighlighting = startHighlighting;
  window.clearContent = clearContent;
  window.updateWordCount = updateWordCount;
};
