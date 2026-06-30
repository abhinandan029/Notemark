import {useState} from 'react'

import '../styles/Sidebar.css'
import {FaTrash} from 'react-icons/fa6'
import { CgRename } from "react-icons/cg";

function Sidebar( {notes, activeNote, onSelect, onAdd, activeNoteId, onDelete, onRename}){
  
  const [editingId, setEditingId] = useState(null);
  const [newTitle, setNewTitle] = useState("");

  const [searchQuery, setSearchQuery] = useState("");

  function searchNotes(){
    const filteredNotes = notes.filter(
      (note) => {return ((note.title || "").toLowerCase().startsWith(searchQuery.toLowerCase()))}  
    );

    return filteredNotes;
  }

  function editing(note){
    setEditingId(note.id);
    setNewTitle(note.title);
  }

  function saveTitle(id){
    onRename(id, {title : newTitle.trim() || "untitled"});
    setEditingId(null);
  }

  return (
    <div className="Sidebar">

      <div id="header">
        <p id="app_name">Notemark</p>
        <button onClick={onAdd}> + New</button>
      </div>

      <input 
        
        id="search_bar" 
        placeholder="🔍 Search Note..." 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}>

      </input>


      <div id="notes_container">
        
        {searchNotes().map( 
          (note) => {return (
          <div 
              id={`${note.id === activeNoteId? "active_note" : "note"}`} 
              key={note.id} 
              onClick={() => onSelect(note.id)} 
            >
              
            <div id="info">

              {
                editingId === note.id ? 
                (<input id="rename_title" 
                    
                  autoFocus 
                  value={newTitle} 
                  onChange={(e) => setNewTitle(e.target.value)}
                  onBlur={() => saveTitle(note.id)}
                  onKeyDown={(e) => e.key === "Enter" && saveTitle(note.id)}>

                </input>) : 
                (<p id="title">{note.title}</p>) 
              }
                
            </div>
              
            <div id="edit_options">
              <FaTrash id="delete_btn"  onDoubleClick={(e) => {e.stopPropagation(); onDelete(note.id);} } title="Delete"/>
              <CgRename id="rename_btn" title="Rename"  onDoubleClick={(e) =>{e.stopPropagation(); editing(note);}} />
            </div>
              
          </div>); 
        })}

      </div>

    
    </div>
  );

}

export default Sidebar