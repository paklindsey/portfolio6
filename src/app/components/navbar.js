import Link from "next/link";
import "../styles/navbar.scss";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <Link href="/" className="navbarLink">
          Home
        </Link>
        <Link href="/about" className="navbarLink">
          About
        </Link>
        <Link href="/work" className="navbarLink">
          Work
        </Link>
        <Link href="/contact" className="navbarLink">
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
