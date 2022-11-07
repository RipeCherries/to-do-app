import react from 'react';
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
        isCompleted: false
    },
    {
        _id: 3,
        title: "Радоваться",
        isCompleted: false
    }
]

const Home = () => {
    return (
        <div>
            {data.map(note => (
                <ToDoItem key={note._id} note={note} />
            ))}
        </div>
    )
}

export default Home;