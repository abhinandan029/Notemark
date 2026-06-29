import { useNotes } from './hooks/useNote.jsx'

import Sidebar from './Components/Sidebar.jsx'
import Editor from './Components/Editor.jsx'
import Preview from './Components/Preview.jsx'


function App() {
  const {notes, activeNote, setActiveNoteId, addNote, updateNote} = useNotes();

  return (
    <>
      <Sidebar notes={notes} activeNoteId={activeNote?.id} onSelect={setActiveNoteId} onAdd={addNote} />
      <Editor note={activeNote} onChange={(body) =>activeNote && updateNote(activeNote.id, {body} )}/>
      <Preview body={activeNote?.body || ""}/>

    </>
  );

}

export default App
