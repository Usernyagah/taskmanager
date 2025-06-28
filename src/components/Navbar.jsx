import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-blue-500 text-white p-4 flex justify-between">
    <h1 className="font-bold">Task Manager</h1>
    <div className="space-x-4">
      <Link to="/">Home</Link>
      <Link to="/tasks">Tasks</Link>
    </div>
  </nav>
);

export default Navbar;
