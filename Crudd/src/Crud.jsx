import React, { useState, useEffect } from 'react'

export default function Crud() {

    const [formData, setFormData] = useState({})
    const [record, setRecord] = useState([])
    const [editId, setEditId] = useState(null)

    useEffect(() => {
        const savedRecords = localStorage.getItem('crudRecords')
        if (savedRecords) {
            setRecord(JSON.parse(savedRecords))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('crudRecords', JSON.stringify(record))
    }, [record])

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setRecord(editId
            ? record.map((item) => (item.id === editId ? { ...item, ...formData } : item))
            : [...record, { id: Date.now(), ...formData }]
        );

        setEditId(null);
        setFormData({});
    };


    const handleEdit = (item) => {
        setFormData({ name: item.name, subject: item.subject, city: item.city })
        setEditId(item.id)
    }

    const handleDelete = (id) => {
        setRecord(record.filter((item) => item.id !== id))
        if (editId === id) {
            setEditId(null)
            setFormData({})
        }
    }

    return (
        <div>
            <h1>Crud</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder='Enter Your Name' value={formData.name || ''} onChange={handleChange} />
                <input type="text" name='subject' placeholder='Enter Your Subject' value={formData.subject || ''} onChange={handleChange} />
                <input type="text" name='city' placeholder='Enter Your City' value={formData.city || ''} onChange={handleChange} />

                <button type="submit">{editId ? "Update" : "Submit"}</button>

            </form>

            {
                
                record.map((e, i) => {
                    return <ul key={e.id}>
                        <li>{e.id}</li>
                        <li>{e.name}</li>
                        <li>{e.subject}</li>
                        <li>{e.city}</li>
                        <button onClick={() => handleEdit(e)}>Edit</button>
                        <button onClick={() => handleDelete(e.id)}>Delete</button>
                    </ul>
                })
            }
        </div>
    )
}