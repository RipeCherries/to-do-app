import react from 'react';
import Check from './Check';

const ToDoItem = ( {note} ) => {
    return (
        <div>
            <Check isCompleted={note.isCompleted} />
            {note.title}
        </div>
    )
}

export default ToDoItem;