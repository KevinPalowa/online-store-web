import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

type Props = { href: string; children: string };
function NavLink({ href, children }: Props) {
  const router = useRouter();
  const isActive = router.asPath === href;
  return (
    <Link
      href={href}
      className={isActive ? "text-white" : "hover:text-gray-200 text-white"}
    >
      {children}
    </Link>
  );
}
export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  return (
    <nav className="flex justify-between bg-gray-900 text-white w-screen">
      <div className="px-5 xl:px-12 py-6 flex w-full justify-between items-center">
        <Link className="text-3xl font-bold font-heading" href="/">
          Gardam OLShop
        </Link>
        <ul className="hidden md:flex px-4 font-semibold font-heading space-x-12">
          <NavLink href="#">Home</NavLink>
          <NavLink href="#">Category</NavLink>
          <NavLink href="#">Collections</NavLink>
          <NavLink href="#">Contact Us</NavLink>
        </ul>
      </div>
      <button
        onClick={() => setIsActive(!isActive)}
        className="navbar-burger self-center mr-12 xl:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 hover:text-gray-200"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      {isActive ? (
        <div className="bg-gray-900 flex flex-col p-3 w-full fixed rounded-md top-16 space-y-2 transition ease-in-out delay-150">
          <NavLink href="#">Home</NavLink>
          <NavLink href="#">Category</NavLink>
          <NavLink href="#">Collections</NavLink>
          <NavLink href="#">Contact Us</NavLink>
        </div>
      ) : (
        ""
      )}
    </nav>
  );
}
