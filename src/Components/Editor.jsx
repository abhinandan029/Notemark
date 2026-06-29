import '../styles/Editor.css'
import { FaEdit } from "react-icons/fa";

function Editor({note, onChange}){

  return (
    <div className="Editor">
      <div id="editor_topbar"><FaEdit /><p>Editor</p></div>
      <textarea placeholder="Start Writing Your Note...."  value={note?.body || ""} onChange={(e) => onChange(e.target.value)}></textarea>
    </div>
  );

}

export default Editor