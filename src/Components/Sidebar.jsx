import {useState} from 'react'
import {extractTags} from '../utils/extractTags.jsx'
import {timeAgo} from '../utils/timeAgo.jsx'

import '../styles/Sidebar.css'
import {FaTrash, FaCircleMinus, FaMoon, FaSun} from 'react-icons/fa6'
import { CgRename } from "react-icons/cg";

function Sidebar( {notes, activeNote, onSelect, onAdd, activeNoteId, onDelete, onRename,theme, setTheme}){
  
  const [editingId, setEditingId] = useState(null);
  const [newTitle, setNewTitle] = useState("");

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState(null);

  function searchNotes(){
    let filteredNotes = notes.filter(
      (note) => {return ((note.title || "").toLowerCase().startsWith(searchQuery.toLowerCase()))}  
    );

    if(selectedTag){
      filteredNotes = filteredNotes.filter(
        (note) => extractTags(note.body).includes(selectedTag)
      );
    }

    const sortedNotes = [...filteredNotes].sort((a, b) => b.updatedAt - a.updatedAt);

    return sortedNotes;
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
        <div id="controls">
          
          <button onClick={onAdd} id="create"> + New</button>
          <button 
            id="theme"
            title={theme === "dark" ? "Switch to light theme." : "Switch to dark theme"} 
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>

        </div>
      </div>

      <input 
        
        id="search_bar" 
        placeholder="🔍 Search Note..." 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}>

      </input>

      {selectedTag &&
        <div id="selected_tag">
          <p>Filtered by</p><div id="tag_pill"  onClick={() => setSelectedTag(null)}>{selectedTag}<FaCircleMinus id="remove_btn" /></div> 
        </div>
      }


      <div id="notes_container">
        
        {searchNotes().map( 
          (note) => {
            
            const tags = extractTags(note.body);

            return (
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

              <div id="updated_time">{timeAgo(note.updatedAt)}</div>

              {
                tags.length > 0 && 
                (<div id="tag_container">{tags.map((tag, index) => {
                  return <span 
                          key={index} 
                          id="tag_pill" 
                          onClick={(e) => {e.stopPropagation(); setSelectedTag(tag === selectedTag ? null : tag)}}>{tag}
                  </span>

                })}</div>)
              }
                
            </div>
              
            <div id="edit_options">
              <FaTrash id="delete_btn"  onClick={(e) => {e.stopPropagation(); onDelete(note.id);} } title="Delete"/>
              <CgRename id="rename_btn" title="Rename"  onClick={(e) =>{e.stopPropagation(); editing(note);}} />
            </div>
              
          </div>); 
        })}

      </div>

    
    </div>
  );

}

export default Sidebar