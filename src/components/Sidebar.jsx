import { Link } from 'react-router-dom'

export const Sidebar = () => {
    return (
        <div className="side-bar">
            <div>
                <Link className="nav-link, new-recipe-btn" to ="/dashboard">Add New Recipe</Link>
            </div>
        </div>
    )
}