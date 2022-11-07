import react from 'react';
import { BsCheck } from 'react-icons/bs';

const Check = ({ isCompleted }) => {
    return (
        <div>
            {isCompleted && <BsCheck size={24} />}
        </div>       
    )
}

export default Check;