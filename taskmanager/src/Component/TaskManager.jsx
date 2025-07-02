import React, { useState, useEffect } from 'react'

export default function TaskManager() {

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: ''
  })

  const [tasks, setTasks] = useState([])
  const [editId, setEditId] = useState(null)

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("TaskData")) || []
    setTasks(stored)
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.title.trim()) return

    let updatedTasks

    if (editId === null) {
      const newTask = { id: Date.now(), ...formData }
      updatedTasks = [...tasks, newTask]
    } else {
      updatedTasks = tasks.map((task) =>
        task.id === editId ? { ...task, ...formData } : task)
      setEditId(null)
    }

    setTasks(updatedTasks)
    localStorage.setItem("TaskData", JSON.stringify(updatedTasks))

    setFormData({
      title: '',
      description: '',
      priority: 'Medium'
    })
  }

  const handleDelete = (id) => {
    const filtered = tasks.filter((t) => t.id !== id)
    setTasks(filtered)
    localStorage.setItem("TaskData", JSON.stringify(filtered))
  }

  const handleEdit = (task) => {
    setFormData({
      title: task.title,
      description: task.description,
      priority: task.priority
    })

    setEditId(task.id)
  }


  return (
    <div className="task-container">
      <h2 className="task-header">Task Manager</h2>

      <form onSubmit={handleSubmit} className="task-form">

        <input name="title" placeholder="Task Title" value={formData.title} onChange={handleChange} className="task-input" />
        <textarea name="description" placeholder="Task Description" value={formData.description} onChange={handleChange} rows={3} className="task-input" />

        <select name="priority" value={formData.priority} onChange={handleChange} className="task-input">
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <button type="submit" className="task-submit">
          {editId ? 'Update Task' : 'Add Task'}
        </button>
      </form>

      {tasks.length === 0 ? (
        <p className="task-empty">No tasks available.</p>
      ) : (tasks.map((task) => (
        <div key={task.id} className="task-card">
          <div className="task-title">{task.title}</div>
          <div className="task-desc">{task.description}</div>
          <div className="task-priority">Priority: {task.priority}</div>

          <div className="task-buttons">
            <button className="edit-btn" onClick={() => handleEdit(task)}>Edit</button>
            <button className="delete-btn" onClick={() => handleDelete(task.id)}>Delete</button>
          </div>
        </div>
      ))
      )}
    </div>
  )
}