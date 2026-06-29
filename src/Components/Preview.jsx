import '../styles/Preview.css'
import {FaEye } from 'react-icons/fa'

function Preview(){

  return (
    <div className="Preview">
      
      <div id="preview_topbar"><FaEye /><p>Preview</p></div>
      <div id="preview_area"></div>

    </div>
    
  );

}

export default Preview