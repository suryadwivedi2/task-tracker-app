import { FaTimes } from 'react-icons/fa';


const task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task ${task.reminder ? `reminder` : ''}`} onDoubleClick={() => onToggle(task._id)}>
            <h3>{task.text}<FaTimes style={{ color: 'red' }} onClick={() => onDelete(task._id)} /></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default task
