import '../styles/Editor.css'
import { FaEdit } from "react-icons/fa";

function Editor(){

  return (
    <div className="Editor">
      <div id="editor_topbar"><FaEdit /><p>Editor</p></div>
      <textarea></textarea>
    </div>
  );

}

export default Editor