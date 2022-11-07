import react from 'react';

const ToDoItem = ( {note} ) => {
    return (
        <div>
            {note.title}
        </div>
    )
}

export default ToDoItem;