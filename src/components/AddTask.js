import { useState } from 'react';


const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault();
        if (!text) {
            alert('please add a text')
            return
        }
        onAdd({ text, day, reminder })
        setText('');
        setDay('');
        setReminder(false);
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="task" >Task</label>
                <input type="text" placeholder="add task" id="task"
                    value={text} onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label htmlFor="daytime" >DAY & TIME</label>
                <input type="text" placeholder="add day and time" id="daytime"
                    value={day}
                    onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className="form-control-checkbox">
                <label htmlFor="rem" >SetReminder</label>
                <input type="checkbox" id="task"
                    value={reminder}
                    checked={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}
                />
            </div>
            <input type="submit" className='btn btn-block' value="save Task" />
        </form>
    )
}

export default AddTask
