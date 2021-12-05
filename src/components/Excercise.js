import { Link } from "react-router-dom"

export default function Excercise(props) {
    const {deleteExcercise, excercise} = props
    return (
        <tr>
          <td>{excercise.username}</td>  
          <td>{excercise.description}</td>  
          <td>{excercise.duration}</td>  
          <td>{excercise.date.substring(0, 10)}</td>  
          <td>
              <Link
                to={`/edit/${excercise._id}`}
                className="btn btn-primary"
            >Edit</Link>
              <a 
                href="#" 
                onClick={()=> deleteExcercise(excercise._id)}
                className="btn btn-danger"
                style={{marginLeft : "3px"}}
            >Delete</a>
          </td>
        </tr>
    )
}
