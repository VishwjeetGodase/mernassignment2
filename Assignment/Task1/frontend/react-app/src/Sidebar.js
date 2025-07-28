import { Link } from 'react-router-dom';

const Sidebar = () => (
  <ul className="nav flex-column p-3">
    {/* <li className="nav-item">
      <Link className="nav-link" to="/dashboard">Dashboard</Link>
    </li> */}
    <li className="nav-item">
      <Link className="nav-link" to="/task-first">Task First</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/task-second">Task Second</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/task-third">Task Third</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/task-fourth">Task Fourth</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/task-fifth">Task Fifth</Link>
    </li>
  </ul>
);
export default Sidebar;
