import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
            <Link to = '/' className="navbar-brand">ExcerciseTracker</Link>

            <div className="navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                        <Link to = "/" className="nav-link">Excercises</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to ="/create" className="nav-link">Create Excercise</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to ="/user" className="nav-link">Create User</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
