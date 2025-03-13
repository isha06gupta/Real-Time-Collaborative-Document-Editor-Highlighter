# **Real-Time Collaborative Document Editor & Highlighter**  

## 🚀 **Overview**  
This project is a **full-featured real-time document editor** built using **Firebase Firestore** and **JavaScript (ES6+)**. It supports **multi-user collaboration**, advanced text editing, and AI-powered suggestions. The editor allows multiple users to edit the same document simultaneously, track changes, and enhance productivity with smart AI-based features.  

---  

## 🌟 **Features**  

### **🛠️ Phase 1: Foundation Setup**  
✅ **Real-Time Collaboration**  
- Built using **Firebase Firestore** for real-time text syncing.  
- Handles conflict resolution (last edit wins).  
- Multiple users can edit the same document simultaneously.  

✅ **Basic Styling + Floating Toolbar**  
- Floating toolbar for text styling: **Bold, Italics, Underline**.  
- Options for **font size, color, and line spacing**.  
- Toolbar appears only when text is selected.  

---  

### **🏆 Phase 2: Collaboration Expansion**  
✅ **User Presence & Cursor Tracking**  
- Displays user-specific colored cursors with user names.  
- Active users list shows who is currently editing.  

✅ **Version Control**  
- Saves document state at regular intervals or on explicit save.  
- Provides a sidebar for viewing and reverting previous versions.  

---  

### **📆 Phase 3: External API Integration**  
✅ **Google OAuth for Authentication**  
- Secure login using **Google OAuth**.  
- Displays user profile image and name.  
- Role-based editing permissions (owner, editor, viewer).  
  

✅ **To-Do List Integration**  
- Collapsible sidebar for task management.  
- Tasks synced across users using **Firebase**.  
- Option to assign tasks to specific users.  

---  

### **🧠 Phase 4: AI Enhancement**  
✅ **Thesaurus API for Synonyms**  
- Suggests synonyms via a floating toolbar button.  
- Displays suggestions in a small popup.  

✅ **Grammar Checking**  
- AI-powered grammar checking using **LanguageTool API**.  
- Displays suggestions with **Accept/Ignore** options.  

✅ **AI Suggestions (Smart Completion)**  
- Smart phrase suggestions using **OpenAI API**.  
- Provides alternative phrasing and improvements.  

---  

### **🛠️ Phase 5: Final Polish + Testing**  
✅ **UI Cleanup and Refinement**  
- Responsive design for all screen sizes.  
- Consistent color themes and font sizes.  
- Cross-browser compatibility.  

✅ **Performance Optimization**  
- Optimized real-time syncing to prevent lag.  
- Reduced memory load and fast version history loading.  

✅ **Final Testing + Debugging**  
- Tested with multiple users for sync issues.  
- Fixed merge conflicts and performance bottlenecks.  
- Set up error tracking with **Sentry** for real-time bug reports.  

---  

## 🚀 **Tech Stack**  
- **Frontend:** HTML, CSS, JavaScript (ES6+)  
- **Backend:** Firebase Firestore  
- **APIs:** OpenAI, LanguageTool, Google OAuth, Thesaurus API  
- **Tools:** Firebase

---  

## 💡 **Outcome**  
✅ Enhanced user experience with real-time editing and collaboration.  
✅ AI-driven writing assistance for improved productivity.  
✅ Secure login and role-based access for controlled editing.  
✅ Fast, reliable, and scalable solution.  

---  

### ⭐ **Future Improvements**  
- Add support for offline editing with auto-sync on reconnection.  
- Integrate additional language models for smarter suggestions.  
- Expand file format support (e.g., PDF, DOCX).  

---  

💻 **Contributions and suggestions are welcome!** 😎  
