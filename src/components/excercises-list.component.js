import axios from 'axios'
import { useState, useEffect } from 'react'
import Excercise from './Excercise'
import {sortByDate} from "../utils/sorting.js"

export default function ExcerciseList() {
    const [excercises, setExcercises] =  useState([])

    useEffect(() => {
            axios.get('https://backend-fitness.herokuapp.com/excercises')
            .then(res => setExcercises(res.data.sort(sortByDate)))
        }, [])

    console.log(`Final Excercise list : `, excercises)

    

    function deleteExcercise(id){
        axios.delete(`https://backend-fitness.herokuapp.com/excercises/${id}`)
        .then(res => console.log(res.data))
        .then(()=>{
            const afterDeleteExcercise = excercises.filter(excercise=> excercise._id !== id)
            return setExcercises(afterDeleteExcercise.sort(sortByDate))
        })
    }
    return (
        <div className="container">
            {   excercises.length === 0 && <div>Loading...</div>
            }
            {   excercises.length > 0 &&
                <div>
                    <h3>Created Excercises :</h3>
                    <table className="table">
                        <thead className="thead-light">
                            <tr>
                                <th>Username</th>
                                <th>Description</th>
                                <th>Duration</th>
                                <th>Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {excercises.map((excercise, index)=>{
                                return <Excercise 
                                            excercise={excercise} 
                                            deleteExcercise={deleteExcercise} 
                                            key={index}>{excercise.username}
                                        </Excercise>
                            })}
                        </tbody>
                    </table>
                </div>
            }
        </div>
    )
}
