import React, { useState } from 'react';
import './calender.css';
import TopbarG from './TopbarG';

const Notepad = (props) => {
  // State to store the notes
  const [notes, setNotes] = useState([]);
  // State to store the current note being edited
  const [currentNote, setCurrentNote] = useState('');

  // Function to handle input change
  const handleChange = (event) => {
    setCurrentNote(event.target.value);
  };

  // Function to handle note submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (currentNote.trim() !== '') {
      setNotes([...notes, currentNote]);
      setCurrentNote('');
    }
  };

  // Function to handle note deletion
  const handleDelete = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  return (
    <div><TopbarG xxx={props.checkLogout}/>
    <div className="notepad">
      <h2>Notepad</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          rows="5"
          cols="50"
          value={currentNote}
          onChange={handleChange}
          placeholder="Write your note here..."
        />
        <br />
        <button type="submit">Save</button>
      </form>
      <div className="note-list">
        {notes.map((note, index) => (
          <div key={index} className="note">
            <p>{note}</p>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Notepad;
