import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import '../styles/Preview.css'
import {FaEye } from 'react-icons/fa'

function Preview({body}){

  return (
    <div className="Preview">
      
      <div id="preview_topbar"><FaEye /><p>Preview</p></div>
      <div id="preview_area">
        <ReactMarkdown reamrkPlugins={[remarkGfm]}>{body}</ReactMarkdown>
      </div>

    </div>
    
  );

}

export default Preview