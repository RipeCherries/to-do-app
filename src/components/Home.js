import React, { useState, useEffect } from 'react';
import ToDoItem from './item/ToDoItem';

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
    const [notes, setNotes] = useState([]);
    
    useEffect(() => { setNotes(data); }, [])

    const removeNote = (id) => {
        console.log(id);
        console.log("До:",notes);
        const tmp = notes.filter(t => t._id !== id);
        console.log(tmp);
        setNotes((state) => state.filter(t => t._id !== id))
        console.log("После:",notes);
        //const new_notes = notes.filter(t => t._id !== id);
        //setNotes(new_notes);
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
            {data.map(note => (
                <ToDoItem key={note._id} note={note} changeNote={changeNote} removeNote={removeNote}/>
            ))}
        </div>
    )
}

export default Home;