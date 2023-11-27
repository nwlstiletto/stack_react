import { Outlet, Link } from 'react-router-dom'
import './styles.css'

function Navbar() {

    return (
        <>
            <nav>
                <h2>NotesApp</h2>
                <ul>
                    <li>
                        <Link to="/">Notes</Link>
                    </li>
                    <li>
                        <Link to="/cnote">Create Note</Link>
                    </li>
                    <li>
                        <Link to="/cuser">Create user</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </> 
    )
}

export default Navbar
