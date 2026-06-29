import { useNotes } from './hooks/useNote.jsx'

import Sidebar from './Components/Sidebar.jsx'
import Editor from './Components/Editor.jsx'
import Preview from './Components/Preview.jsx'


function App() {
  return (
    <>
      <Sidebar />
      <Editor />
      <Preview />

    </>
  );

}

export default App
