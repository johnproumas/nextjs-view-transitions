import { Link } from "next-view-transitions";

const Navbar = () => {
  return (
    <div className="flex text-center pt-3">
      <div className="flex-1">
        <Link href="/">Home</Link>
      </div>
      <div className="flex-1">
        <Link href="/about">About</Link>
      </div>
      <div className="flex-1">
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
