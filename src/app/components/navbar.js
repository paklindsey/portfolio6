import Link from "next/link";
import "../styles/navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/" className="navbarLink homeLink">
        Home
      </Link>
      <Link href="/about" className="navbarLink aboutLink">
        About
      </Link>
      <Link href="/work" className="navbarLink workLink">
        Work
      </Link>
      <Link href="/contact" className="navbarLink contactLink">
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;
