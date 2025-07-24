import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchApi } from '../Features/ApiSlice'
import { AddData, deleteData, updateData } from '../Features/ApiSlice'

export default function ApiRedux() {
    const [formData, setFormData] = useState({
        name:"",
        subject:""
    })
    const [editIndex, setEditIndex] = useState(null)

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(FetchApi())
    },[])

    const record = useSelector((state)=>{
        return state.apiKey
    })

    if(record.loading == true){
        return <p>Loading...</p>
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    const handleAddData = (e) => {
        e.preventDefault();
        if(editIndex == null){
            dispatch(AddData(formData))
        } else {
            dispatch(updateData({id : editIndex,...formData}))
        }
        setEditIndex(null)
        setFormData({
            name:"",
            subject:""
        })
    }

    const handleDelete = (id) => {
        dispatch(deleteData(id))
    }

    const handleEdit = (item) => {
        setFormData({
            name: item.name,
            subject: item.subject
        })
        setEditIndex(item.id)
    }


  return (
    <div>
      <h1>ApiRedux</h1>

      <form onSubmit={handleAddData}>
        <input type="text" placeholder='Enter your name' name='name' value={formData.name} onChange={handleChange} />
        <input type="text" placeholder='Enter your subject' name='subject' value={formData.subject} onChange={handleChange} />

        <button type='submit'>{editIndex == null ? "Add Data" : "Update Data"}</button>
      </form>

      {
        record.data && 
        record.data.map((e,i)=>{
            return <ul key={i}>
                <li>{e.name}</li>
                <li>{e.subject}</li>

                <button onClick={()=>handleEdit(e)}>Edit</button>
                <button onClick={()=>handleDelete(e.id)}>Delete</button>
            </ul>
        })
      }
    </div>
  )
}
