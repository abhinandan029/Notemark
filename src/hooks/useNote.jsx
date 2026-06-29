import {useState} from 'react'

export function useNotes(){
  
  const [notes, setNotes] = useState([
    {
      id : crypto.randomUUID(),
      title : "Wlcomr to Notemark",
      body : "Start writting your notes.....",
      tags : [],
      updatedAt : Date.now()
    }
  ]);

  const [activeNoteId, setActiveNoteId] = useState(notes[0].id);
  const activeNote = notes.find( (note) => { note.id === activeNoteId } );

  function addNote(){

    const newNote = {
      id : crypto.randomUUID(),
      title : "untitled",
      body : "",
      tags : [],
      updatedAt : Date.now()
    }

    setNotes((prevNote) => [newNote, ...prevNote]);
    setActiveNoteId(newNote.id);

  }

  function updateNote(id, changes){

    setNotes( 
      (prevNote) => {
        prevNote.map( 
          (note) => {
            note.id === id ? {...note, ...changes, updatedAt : Date.noe()} : note
        });
      }
    );

  }

  return {notes, activeNote, setActiveNoteId, addNote, updateNote} ;

}