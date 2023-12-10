import Task from './task'


const task = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task key={task._id} task={task} onDelete={onDelete} onToggle={onToggle} />
      ))
      }
    </>
  )
}

export default task
