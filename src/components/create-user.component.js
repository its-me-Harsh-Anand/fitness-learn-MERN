import { useState } from "react"
import axios from 'axios'

export default function CreateUser() {
    const [username, setUsername] = useState('')

    function handleUserSubmit(e){
        e.preventDefault()

        const user = {
            username : username
        }
        console.log(user)
        
        axios.post('http://localhost:5000/users/add', user)
        .then(res => console.log(res.data))
        
        setUsername('')
        alert("Username " + username + " created")
        return user
    }
    return (
        <div className="container">
            <h3>Create New User</h3>
            <form onSubmit={(e)=>handleUserSubmit(e)}>
                <div className="form-group">
                    <label>Username : </label>
                    <input 
                        type="text" 
                        placeholder="Input unique username..."
                        required 
                        className="form-control" 
                        value={username} 
                        onChange={(e)=>setUsername(e.target.value)}
                    />
                </div>

                <button type="submit" className="btn btn-primary mt-3">Create User</button>
            </form>
        </div>
    )
}
