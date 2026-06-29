import '../styles/Sidebar.css'

function Sidebar( {notes, activeNote, onSelect, onAdd, activeNoteId}){
  
  return (
    <div className="Sidebar">

      <div id="header">
        <p id="app_name">Notemark</p>
        <button onClick={onAdd}> + New</button>
      </div>
      
      <div id="notes_container">
        
        {notes.map( 
          (note) => {return (
          <div id={`${note.id === activeNoteId? "active_note" : "note"}`} 
            key={note.id} 
            onClick={() => onSelect(note.id)}>
              {note.title}
          </div>); 
        })}

      </div>

    
    </div>
  );

}

export default Sidebar