# 📝 Real-Time Collaborative Document Editor  
This project is a real-time collaborative document editor designed to make writing and editing more efficient, seamless, and smart. Built using **Firebase Firestore** and **JavaScript (ES6+),** it allows multiple users to work on the same document simultaneously while providing real-time syncing, AI-powered suggestions, and a user-friendly interface. Whether you're working alone or with a team, this editor ensures a smooth and productive writing experience.  

---

## 🚀 Key Features  

### 🌐 Real-Time Syncing  
- The editor syncs changes instantly using **Firebase Firestore**, allowing multiple users to work on the same document without conflicts or lag.  
- Handles conflict resolution automatically so that the latest changes are reflected correctly, even when multiple users are editing at once.  
- Unlike Microsoft Editor, this tool supports true multi-user collaboration with live cursor tracking and user presence.  

---

### 🎯 Intelligent Text Highlighting  
- Supports line-by-line highlighting with customizable colors.  
- When you select a line, the editor highlights it and automatically scrolls to keep the highlighted text vertically centered for better focus.  
- The highlight color can be changed using a color picker, giving you full control over the visual experience.  

---

### 🖋️ Floating Toolbar for Rich Text Formatting  
- A clean and responsive floating toolbar appears only when text is selected, ensuring an uncluttered interface.  
- Supports essential formatting options:  
   - **Bold** – Make key points stand out.  
   - **Italics** – Add emphasis or tone to your writing.  
   - **Underline** – Highlight key terms and phrases.  
   - **Font Size and Type** – Customize the look and feel of the text.  
   - **Line Spacing** – Adjust line spacing for better readability.  
- The toolbar ensures a smooth editing experience with intuitive controls.  

---

### 🧮 Real-Time Word Count  
- Keeps track of the total word count in real time as you type.  
- The word count is displayed at the bottom of the editor, helping you stay within target limits.  

---

### 👥 User Presence and Cursor Tracking  
- Displays the names and cursors of other active users in real time.  
- Each user is assigned a unique cursor color, making it easy to see who is working on which section of the document.  
- An "Active Users" list is shown at the top, so you know who’s currently working on the document.  

---

### 🗂️ Version Control  
- The editor automatically saves document states at regular intervals.  
- A sidebar allows users to view past versions and restore any previous state with a single click.  
- Provides a secure backup system, so you don’t have to worry about losing your progress.  

---

### 🌙 Dark Mode  
- Switch between light and dark themes with a single toggle.  
- The dark mode reduces eye strain, especially during late-night editing sessions.  
- Smooth transitions between themes ensure a consistent look and feel.  

---

### 🔄 Auto-Save and Restore  
- The content is saved automatically every **2 seconds** using `localStorage`, so you never lose your work.  
- Reloading the page restores the last saved content instantly, ensuring you can pick up right where you left off.  

---

### 🧹 Clear Content with One Click  
- A "Clear" button lets you remove all content instantly.  
- If the document is cleared, a placeholder text ("Type or paste your text here...") automatically appears to guide the user.  
- Helps maintain a clean slate for new ideas.  

---

### 📖 Synonym Suggestions with Thesaurus API  
- Integrated with a **Thesaurus API** to provide real-time synonym suggestions.  
- When you select a word and click the "Synonyms" button, a pop-up appears showing up to **10 synonym suggestions**.  
- Improves vocabulary and helps find the right word without leaving the editor.  
- This feature provides an edge over Microsoft Editor, which lacks direct synonym integration.  

---

### ✅ AI-Powered Grammar Checking  
- Uses **OpenAI** and **LanguageTool** to check for grammar mistakes in real time.  
- Suggestions appear in a sidebar, with easy "Accept" and "Ignore" options.  
- Helps you polish your writing and avoid common mistakes.  

---

### 🤖 Smart Suggestions and Completion  
- AI-powered suggestions help improve the tone, clarity, and phrasing of your writing.  
- When a sentence sounds off, the editor offers alternative suggestions directly beneath the current line.  
- Makes writing more natural and impactful with minimal effort.  

---

### 🚀 Performance and Compatibility  
- Built for speed and efficiency — even with large documents.  
- Optimized to work smoothly across different browsers and screen sizes.  
- Uses minimal memory to ensure consistent performance without lag.  
- Fully responsive, providing a seamless experience on desktops, tablets, and mobile devices.  

---

## 🎯 Why This Project Stands Out  
This isn’t just another text editor — it’s a smart, collaborative platform that combines real-time syncing with AI-driven writing assistance. From styling to grammar correction and intelligent suggestions, it’s designed to make the writing process faster, more efficient, and more professional.  

---

This project reflects a balance of real-time collaboration, intelligent AI assistance, and a smooth user experience — making it the perfect tool for both personal and professional writing tasks. 😎  
