let db;
let docRef;
const currentUser = "User " + Math.floor(Math.random() * 1000);

function initializeFirebase() {
  console.log("Initializing Firebase...");

  const firebaseConfig = {
    apiKey: "YOUR API JEY",
    authDomain: "YOUR AUTH_DOMAIN",
    projectId: "YPIR PROJECT  ID",
    storageBucket: "STORAGE BUCKET",
    messagingSenderId: "MESSAGING SENDER ID",
    appId: "APP ID",
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  db = firebase.firestore();
  docRef = db.collection("documents").doc("doc1");

  // Initialize the document if not present
  docRef.get().then((doc) => {
    if (!doc.exists) {
      docRef.set({
        content: "Type or paste your text here...",
        users: {},
        lastUpdated: firebase.firestore.FieldValue.serverTimestamp(),
      });
    } else {
      console.log("Document exists:", doc.data());
    }

    setupFirebaseListeners();
    updateUserPosition(0); // Initialize user position at start
  });
}

function setupFirebaseListeners() {
  if (!db || !docRef) return;

  // Listen for content updates
  docRef.onSnapshot((doc) => {
    if (doc.exists) {
      const data = doc.data();
      const contentDiv = document.getElementById("content");

      // ✅ Only update if content actually changed
      if (data.content && contentDiv.innerHTML !== data.content) {
        contentDiv.innerHTML = data.content;
        window.lines = contentDiv.innerText.split("\n");
        updateWordCount();
      }

      // ✅ Update user cursors
      if (data.users) {
        updateUserCursors(data.users);
      }
    }
  });

  // Update Firebase when content changes
  document.getElementById("content").addEventListener("input", debounce(updateFirebaseContent, 300));

  // Handle user cursor movement
  document.getElementById("content").addEventListener("keyup", (e) => {
    const position = getCaretPosition();
    updateUserPosition(position);
  });

  // Cleanup on window close or refresh
  window.addEventListener("beforeunload", removeUser);
}

function updateFirebaseContent() {
  if (!docRef) return;

  const contentDiv = document.getElementById("content");
  const newContent = contentDiv.innerHTML;

  // ✅ Only update if content is different
  docRef.get().then((doc) => {
    if (doc.exists && doc.data().content !== newContent) {
      docRef.update({
        content: newContent,
        lastUpdated: firebase.firestore.FieldValue.serverTimestamp(),
      }).catch((error) => {
        console.error("Error updating content:", error);
      });
    }
  });
}

// ✅ Update user position (real-time cursor tracking)
function updateUserPosition(position) {
  if (!docRef) return;

  docRef.get().then((doc) => {
    if (doc.exists) {
      let users = doc.data().users || {};

      users[currentUser] = {
        position,
        timestamp: Date.now(),
      };

      docRef.update({ users }).catch((error) => {
        console.error("Error updating user position:", error);
      });
    }
  });
}

// ✅ Remove user from Firestore when they disconnect
function removeUser() {
  if (!docRef) return;

  docRef.get().then((doc) => {
    if (doc.exists) {
      let users = doc.data().users || {};
      delete users[currentUser];

      docRef.update({ users }).catch((error) => {
        console.error("Error removing user:", error);
      });
    }
  });
}

// ✅ Update user cursors on the document
function updateUserCursors(users) {
  // Remove old cursors
  document.querySelectorAll(".user-cursor").forEach((cursor) => cursor.remove());

  Object.keys(users).forEach((user) => {
    if (user !== currentUser) {
      const cursor = document.createElement("div");
      cursor.classList.add("user-cursor");
      cursor.innerText = user;
      cursor.style.left = `${users[user].position * 7}px`; // Approximate position
      cursor.style.top = "5px";
      cursor.style.backgroundColor = "#ff0000";

      document.getElementById("content").appendChild(cursor);
    }
  });
}

// ✅ Get the caret position (cursor position)
function getCaretPosition() {
  const selection = window.getSelection();
  if (!selection.rangeCount) return 0;

  const range = selection.getRangeAt(0);
  const tempRange = range.cloneRange();
  tempRange.selectNodeContents(document.getElementById("content"));
  tempRange.setEnd(range.endContainer, range.endOffset);

  return tempRange.toString().length;
}

// ✅ Debounce function to limit frequent calls
function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

window.initializeFirebase = initializeFirebase;
window.updateFirebaseContent = updateFirebaseContent;
