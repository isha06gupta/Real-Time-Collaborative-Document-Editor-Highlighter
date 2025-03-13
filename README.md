# Real-Time Collaborative Document Editor & Highlighter  

## 🚀 Overview  
This project is a fully functional real-time document editor built with **Firebase Firestore** and **JavaScript (ES6+)**. It allows multiple users to work on the same document simultaneously, track changes, and get AI-based suggestions for improved writing.  

---  

## 🌟 Key Features  

### 🛠️ **Phase 1: Foundation Setup**  
- **Real-Time Collaboration** using Firebase Firestore for smooth multi-user syncing.  
- Handles editing conflicts with a "last edit wins" approach.  
- Seamless text syncing with minimal lag.  

- **Floating Toolbar for Styling**  
   - Supports **bold, italics, underline**, font size, color, and line spacing.  
   - Toolbar appears only when text is selected, keeping the UI clean.  

---  

### 🏆 **Phase 2: Collaboration Expansion**  
- **User Presence & Cursor Tracking**  
   - Displays user-specific colored cursors with names.  
   - Shows an "Active Users" list for better collaboration.  

- **Version Control**  
   - Saves document state automatically or on demand.  
   - Allows users to view and revert to previous versions.  

---  

### 📆 **Phase 3: External API Integration**  
- **Google OAuth for Authentication**  
   - Secure login with Google.  
   - Displays user profile info and manages role-based permissions.  

- **To-Do List Integration**  
   - In-editor task list synced across users with Firebase.  
   - Tasks can be assigned to specific users.  

---  

### 🧠 **Phase 4: AI Enhancement**  
- **Synonym Suggestions**  
   - Integrated Thesaurus API to provide better word choices.  
   - Suggestions appear in a small pop-up next to the selected word.  

- **Grammar Checking**  
   - AI-based grammar suggestions using LanguageTool API.  
   - "Accept/Ignore" options for easy correction.  

- **Smart Suggestions**  
   - OpenAI-based suggestions for better phrasing and improvements.  
   - Suggestions appear below the current line.  

---  

### 🛠️ **Phase 5: Final Touches**  
- **UI Cleanup**  
   - Responsive design across all screen sizes.  
   - Consistent fonts and color themes for a polished look.  

- **Performance Optimization**  
   - Fast syncing and reduced memory load.  
   - Quick loading of version history and minimal lag.  

- **Final Testing & Debugging**  
   - Tested with multiple users for sync issues.  
   - Fixed performance issues and set up error tracking with Sentry.  

---  

## 🏆 Tech Stack  
- **Frontend:** HTML, CSS, JavaScript (ES6+)  
- **Backend:** Firebase Firestore  
- **APIs:** OpenAI, LanguageTool, Google OAuth, Thesaurus API  
- **Tools:** Firebase

---  

## 💡 Future Scope  
- Offline editing with automatic sync on reconnection.  
- Support for additional file formats like PDF and DOCX.  
- Improved AI suggestions with more context awareness.  

---  

**Feel free to contribute or share your suggestions!** 😎  
