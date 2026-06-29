import {useState, useEffect} from 'react'

const initialNote = {
      
  id : crypto.randomUUID(),
  title : "Welcomr to Notemark",
  body : "## Start writting your notes.....",
  tags : [],
  updatedAt : Date.now(),
}

export function useNotes(){
  
  const [notes, setNotes] = useState(
    () => { 
      const saved = localStorage.getItem("notemark-notes");
      return saved ? JSON.parse(saved) : [initialNote];
    }
  );

  useEffect(() => {
    localStorage.setItem("notemark-notes", JSON.stringify(notes));
    setActiveNoteId(notes[0].id)
  }, [notes]);

  const [activeNoteId, setActiveNoteId] = useState(initialNote.id);
  const activeNote = notes.find( (note) => {return  (note.id === activeNoteId); } );

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
        return prevNote.map( 
          (note) => {
            return note.id === id ? {...note, ...changes, updatedAt : Date.now()} : note
        });
      }
    );

  }

  return {notes, activeNote, setActiveNoteId, addNote, updateNote} ;

}