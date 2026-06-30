import '../styles/Editor.css'
import { FaEdit } from "react-icons/fa"

function Editor({notes, note, onChange}){

  return (
    <div className="Editor">
      <div id="editor_topbar"><FaEdit /><p>Editor</p></div>
      
      <textarea 
        
        placeholder={note == null ? "Create a New note" : "start Writing Your Note..."} 
        value={note?.body || ""} 
        onChange={(e) => onChange(e.target.value)}>

      </textarea>

    </div>
  );

}

export default Editor