import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addData } from './features/TodoSlice'

export default function TodoRedux() {

    const [name, setName] = useState("")
    const [subject, setSubject] = useState("")


    const dipatch = useDispatch()

    const data = useSelector((state) => {
        return state.TodoKey.data
    })

    const handleAddData = () => {
        let obj = { id: Date.now(), name, subject }
        dispatch(addData(obj))
        setName{ "" }
        setSubject{ "" }
    }

    return (
        <div>
            <h1>TodoRedux</h1>
            <input type="text" placeholder='Enter Your Name' onChange={setName}}/>
            <input type="text" placeholder='Enter Your Subject' onChange={setSubject} />
            <button>Add Data</button>
        </div>
    )
}