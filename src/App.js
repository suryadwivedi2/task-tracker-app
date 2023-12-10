import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import About from '../src/components/About'
import Task from '../src/components/tasks'
import AddTask from '../src/components/AddTask'
import { useState, useEffect } from 'react'


function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setState] = useState([])
  useEffect(() => {
    const getTask = async () => {
      const taskfromserver = await fetchTasks();
      setState(taskfromserver)
    }
    getTask()
  }, [])


  //fetch tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();
    return data;
    //console.log(data);
  }

  //fetch task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/task/${id}`);
    const data = await res.json();
    return data;
    //console.log(data);
  }

  //ADD TASK
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await res.json();

    setState([...tasks, data])

    // const id = Math.floor(Math.random() * 1000) + 1;
    // const newTask = {
    //   id,
    //   ...task
    // }
    // setState([...tasks, newTask])
  }

  //DELETE TASK
  const onDelete = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })
    setState(tasks.filter((task) => task._id !== id))
  }

  //TOGGLE REMINDER
  const toggleReminder = async (id) => {
    const TasktoToggle = await fetchTask(id)
    const updatedTask = {
      ...TasktoToggle,
      reminder: !TasktoToggle.reminder
    }

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updatedTask)
    })

    const data = await res.json();

    //console.log(data.reminder);

    setState(tasks.map((task) => task._id === id ? { ...task, reminder: data.reminder } : task))
  }

  return (
      <Router>
    <div className="container">
      {showAddTask && < AddTask
        onAdd={addTask}
      />}
      <Header
        onAdd={() => { setShowAddTask(!showAddTask) }}
        showAdd={showAddTask}
      />
      {tasks.length > 0 ? <Task tasks={tasks} onDelete={onDelete} onToggle={toggleReminder} /> : 'NO TASKS'}
        <Routes>
          <Route exact path='/about' Component={About} />
        </Routes>
      <Footer />
    </div>
      </Router>
  )
}


//class based

// class App extends React.Component({
//   render() {
//     return <h1>hello from a class</h1>
//   }
// })

export default App;
