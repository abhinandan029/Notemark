import { useNotes } from './hooks/useNote.jsx'
import {useChangeTheme } from './utils/changeTheme.jsx'

import {useState} from 'react'
import Sidebar from './Components/Sidebar.jsx'
import Editor from './Components/Editor.jsx'
import Preview from './Components/Preview.jsx'

import "./index.css"

import { FaEdit, FaDownload, FaEye, FaFilePdf, FaFile, FaSun, FaMoon} from "react-icons/fa"


function App() {
  const {notes, activeNote, setActiveNoteId, addNote, updateNote, deleteNote} = useNotes();

  const [theme, setTheme] = useChangeTheme();

  const [mobileView, setMobileView] = useState("Sidebar");

  function exportNote(note){
    if (!note) return ;

    const blob = new Blob([note.body], {type : "text/markdown"});

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url ;
    a.download = `${note.title || "untitled"}.md`;
    a.click();

    URL.revokeObjectURL(url);
  }

  return (
    <>
      <div id="mobile_btns">
        <button className="nav_btns" id={mobileView === "Sidebar" ? "active" : ""}><FaFile onClick={() => setMobileView("Sidebar")} /></button>
        <button className="nav_btns" id={mobileView === "Editor" ? "active" : ""}><FaEdit  onClick={() => setMobileView("Editor")} /></button>
        <button className="nav_btns" id={mobileView === "Preview" ? "active" : ""}><FaEye  onClick={() => setMobileView("Preview")} /></button>

        <button 
                    id="theme_Mobile_active"
                    title={theme === "dark" ? "Switch to light theme." : "Switch to dark theme"} 
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                      {theme === "dark" ? <FaSun /> : <FaMoon />}
                  </button>
      </div>
      
      <Sidebar 
        notes={notes} 
        activeNoteId={activeNote?.id} 
        onSelect={setActiveNoteId} 
        onAdd={addNote} 
        onDelete={deleteNote} 
        onRename={updateNote}
        theme={theme}
        setTheme={setTheme}
        mobileView={mobileView}
      />
      
      <Editor 
        note={activeNote} 
        onChange={(body) =>activeNote && updateNote(activeNote.id, {body} ) }
        onExport={exportNote}
        mobileView={mobileView}
      />
        
      <Preview body={activeNote?.body || ""} title={activeNote?.title} mobileView={mobileView}/>


      
    </>
  );

}

export default App
