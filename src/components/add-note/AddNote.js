import React, { useState } from "react";

const AddNote = ( {setNotes} ) => {
    const [title, setTitle] = useState('');

    const addNote = (title) => {
        setNotes(prev => [...prev, {
            _id: prev.length + 1,
            title: title,
            isCompleted: false
        }])
        setTitle('')
    }

    return (
        <div className='flex items-center justify-between mb-4 rounded-2xl border-gray-800 border-2 px-5 py-3 w-full mt-20'>
            <input type='text' onChange={e => setTitle(e.target.value)} value={title}
            onKeyPress={e => e.key === 'Enter' && addNote(title)} 
            className='bg-transparent w-full border-none outline-none'
            placeholder="Введите задачу"/>
        </div>
    )
}

export default AddNote;