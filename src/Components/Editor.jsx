
import '../index.css'

import { FaEdit, FaDownload} from "react-icons/fa"

function Editor({notes, note, onChange, onExport, mobileView}){

  return (
    <div className="Editor" id={`Editor${mobileView === "Editor" ? "_mobile_active" : ""}`}>
      <div id="editor_topbar">
        <FaEdit /><p>Editor</p>
        <FaDownload id="download_btn" onClick={() => onExport(note)} title="download '.md' file" />
      </div>
      
      <textarea 
        
        placeholder={note == null ? "Create a New note" : "start Writing Your Note..."} 
        value={note?.body || ""} 
        onChange={(e) => onChange(e.target.value)}>

      </textarea>

    </div>
  );

}

export default Editor