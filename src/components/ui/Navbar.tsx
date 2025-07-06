import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 shadow-md bg-white">
      <Link to="/" className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 w-auto mr-2" />
        <span className="text-xl font-bold">Library</span>
      </Link>
      <div className="space-x-2">
        <Button asChild variant="outline">
          <Link to="/books">All Books</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/add-book">Add Book</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/borrow-summary">Borrow Summary</Link>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
