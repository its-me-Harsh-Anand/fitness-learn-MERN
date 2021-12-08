import { useState, useEffect } from "react"
import axios from 'axios'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

export default function CreateExcercise() {
    const [username, setUsername] = useState('')
    const [description, setDescription] = useState('')
    const [duration, setDuration] = useState(0)
    const [date, setDate] = useState(new Date())
    const [user, setUser] = useState([])
    
    useEffect(() => {
        const users = []
        axios.get('https://backend-fitness.herokuapp.com/users')
        .then(res=> res.data.forEach(data => {
            users.push(data.username);
        })).then(()=>setUser(users))
    }, [])

    function handleExcerciseSubmit(e){
        e.preventDefault()
        if(user.length <= 0){
            return
        }
        const excercise = {
            username : username,
            description : description,
            duration : duration,
            date : new Date(date),
        }
        console.log(excercise)

        axios.post('https://backend-fitness.herokuapp.com/excercises/add', excercise)
        .then(res => console.log(res.data))
        .then(()=>window.location = '/')

        // window.location = '/'  //to redirect to homepage
        return excercise
    }


    return (
        <div className='container'>
            <h3>Create New Excercise</h3>
            {
                user.length === 0 && <div>There is no user created. First, create atleast one user</div>
            }
            <form onSubmit={(e)=>handleExcerciseSubmit(e)}>
                <div className="form-group">
                    <label htmlFor="username">Username: </label>
                    <select
                        required
                        className= "form-control"
                        value={username}
                        onChange={(e)=> setUsername(e.target.value)}
                    >
                        {
                            user.map((user, index)=>{
                                return <option key = {index} value={user}>
                                    {user}
                                </option>
                            })
                        }
                    </select>
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
        </div>
    )
}
