import { useNotes } from './hooks/useNote.jsx'
import {useChangeTheme } from './utils/changeTheme.jsx'

import Sidebar from './Components/Sidebar.jsx'
import Editor from './Components/Editor.jsx'
import Preview from './Components/Preview.jsx'


function App() {
  const {notes, activeNote, setActiveNoteId, addNote, updateNote, deleteNote} = useNotes();

  const [theme, setTheme] = useChangeTheme();

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
      
      <Sidebar 
        notes={notes} 
        activeNoteId={activeNote?.id} 
        onSelect={setActiveNoteId} 
        onAdd={addNote} 
        onDelete={deleteNote} 
        onRename={updateNote}
        theme={theme}
        setTheme={setTheme}
      />
      
      <Editor 
        note={activeNote} 
        onChange={(body) =>activeNote && updateNote(activeNote.id, {body} ) }
        onExport={exportNote}
      />
        
      <Preview body={activeNote?.body || ""} title={activeNote?.title} />
      
    </>
  );

}

export default App
