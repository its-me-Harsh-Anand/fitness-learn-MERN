import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import axios from 'axios'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

export default function EditExcercise() {
    const [username, setUsername] = useState('')
    const [description, setDescription] = useState('')
    const [duration, setDuration] = useState(0)
    const [date, setDate] = useState(new Date())
    const {id} = useParams()
    
    useEffect(()=>{
        axios.get(`http://localhost:5000/excercises/${id}`)
        .then(res => {
            setUsername(res.data.username)
            setDescription(res.data.description)
            setDuration(res.data.duration)
            setDate(new Date(res.data.date))
        })
        .catch(err=> console.log(err))

    }, [])

    function handleExcerciseSubmit(e){
        e.preventDefault()
        const excercise = {
            username : username,
            description : description,
            duration : duration,
            date : new Date(date),
        }
        console.log(excercise)

        axios.post(`http://localhost:5000/excercises/update/${id}`, excercise)
        .then(res => console.log(res.data))
        .then(()=>window.location = '/')

        // window.location = '/'  //to redirect to homepage
        return excercise
    }


    return (
        <div className='container'>
            <h3>Edit Excercise</h3>
            <form onSubmit={(e)=>handleExcerciseSubmit(e)}>
                <div className="form-group">
                    <label htmlFor="username">Username: </label>
                    <input 
                        type="text" required 
                        className="form-control"
                        value={username}
                        onChange={(e)=> setUsername(e.target.value)} 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description: </label>
                    <input 
                        type="text" required 
                        className="form-control"
                        value={description}
                        onChange={(e)=> setDescription(e.target.value)} 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="duration">Duration(in minutes): </label>
                    <input 
                        type="number" required
                        min = {0}
                        className="form-control"
                        value={duration}
                        onChange={(e)=> setDuration(e.target.value)} 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="date">Date: </label>
                    <div>
                        <DatePicker
                            selected= {date}
                            onChange = {(date)=> setDate(date)}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <button type="submit" className="btn btn-primary mt-3">Edit Excercise</button>
                </div>
            </form>

        </div>
    )
}
