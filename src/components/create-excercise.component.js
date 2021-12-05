import { useState } from "react"
import axios from 'axios'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

export default function CreateExcercise() {
    const [username, setUsername] = useState('')
    const [description, setDescription] = useState('')
    const [duration, setDuration] = useState(0)
    const [date, setDate] = useState(new Date())

    function handleExcerciseSubmit(e){
        e.preventDefault()
        const excercise = {
            username : username,
            description : description,
            duration : duration,
            date : new Date(date),
        }
        console.log(excercise)

        axios.post('http://localhost:5000/excercises/add', excercise)
        .then(res => console.log(res.data))
        .then(()=>window.location = '/')

        // window.location = '/'  //to redirect to homepage
        return excercise
    }


    return (
        <div className='container'>
            <h3>Create New Excercise</h3>
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
                    <button type="submit" className="btn btn-primary mt-3">Create Excercise</button>
                </div>
            </form>

            {/* <form>
                <input 
                    type="text" required
                    onChange={(e)=> setUsername(e.target.value)} 
                    name="username"
                />
                <input 
                    type="text" required
                    onChange={(e)=> setDescription(e.target.value)} 
                    name="description"
                />
                <input 
                    type="number"
                    min="0"
                    onChange={(e)=> setDuration(e.target.value)} 
                    name="duration"
                />
                <button 
                    onClick={(e)=>handleExcerciseSubmit(e)}
                >Create Excercise</button>
            </form> */}
        </div>
    )
}
