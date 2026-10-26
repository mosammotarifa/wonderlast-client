import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full border-b border-gray-200 bg-white shadow-sm">
      <div className="container mx-auto flex min-h-24 items-center justify-between gap-6 px-6">
        {/* Left - Navigation Links */}
        <div className="flex-1">
          <ul className="flex items-center gap-6 text-sm font-medium text-gray-600">
            <li>
              <Link href="/" className="transition hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/destinations"
                className="transition hover:text-blue-600"
              >
                Destinations
              </Link>
            </li>
            <li>
              <Link
                href="/my-bookings"
                className="transition hover:text-blue-600"
              >
                My Bookings
              </Link>
            </li>
            <li>
              <Link href="/admin" className="transition hover:text-blue-600">
                Admin
              </Link>
            </li>
          </ul>
        </div>

        {/* Center - Logo */}
        <div className="flex flex-1 items-center justify-center">
          <Link href="/">
            <Image
              src="/Wanderlast.png"
              height={100}
              width={100}
              alt="Wanderlast logo"
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* Right - Profile and Authentication */}
        <div className="flex flex-1 items-center justify-end gap-4">
          <Link
            href="/profile"
            className="text-sm font-medium text-gray-700 transition hover:text-blue-600"
          >
            Profile
          </Link>

          <Link
            href="/sign-in"
            className="rounded-lg border border-blue-600 px-5 py-2.5 text-sm font-semibold text-blue-600 transition hover:bg-blue-50"
          >
            Sign In
          </Link>

          <Link
            href="/sign-up"
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
