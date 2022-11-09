import React from 'react';
import Check from './Check';
import { BsTrash } from 'react-icons/bs';

const ToDoItem = ( {note, changeNote, removeNote} ) => {
    return (
        <div className='flex items-center justify-between mb-4 rounded-2xl bg-gray-800 p-5 w-full'>
            <button className='flex items-center' onClick={() => changeNote(note._id)}>
                <Check isCompleted={note.isCompleted} />
                <span className={`${note.isCompleted ? 'line-through' : ''}`}>{note.title}</span>
            </button>
            <button onClick={() => removeNote(note._id)}>
                <BsTrash size={22} className='text-gray-600 hover:text-pink-400 transition-colors ease-in-out duration-300' />
            </button>
        </div>
    )
}

export default ToDoItem;