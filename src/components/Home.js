import React, { useState } from 'react';
import ToDoItem from './item/ToDoItem';
import AddNote from './add-note/AddNote';

const data = [
    {
        _id: 1,
        title: "Сделать React проект",
        isCompleted: true
    },
    {
        _id: 2,
        title: "Загрузить на GitHub",
        isCompleted: true
    },
    {
        _id: 3,
        title: "Радоваться",
        isCompleted: false
    }
]

const Home = () => {
    const [notes, setNotes] = useState(data);

    const removeNote = (id) => {
        setNotes([...notes].filter(t => t._id !== id));
    }

    const changeNote = (id) => {
        const copy = [...notes];
        const current = copy.find(t => t._id === id);
        current.isCompleted = !current.isCompleted;
        setNotes(copy);
    }

    return (
        <div className='text-white w-4/5 mx-auto'>
            <h1 className='text-2xl font-bold text-center mb-10'>ToDo App</h1>
            {notes.map(note => (
                <ToDoItem key={note._id} note={note} changeNote={changeNote} removeNote={removeNote}/>
            ))}
            <AddNote setNotes={setNotes} />
        </div>
    )
}

export default Home;