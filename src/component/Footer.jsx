import React from "react";
import Image from "next/image";
import { Button, Input, Separator } from "@heroui/react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 pt-14 pb-6">
        {/* Top - Logo and Description */}
        <div className="mb-12">
          <div className="mb-4 flex items-center gap-3">
            <h2 className="text-4xl font-bold">Wanderlust</h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-gray-400">
            Your gateway to extraordinary travel experiences around the world.
          </p>
        </div>

        {/* Middle - Footer Columns */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Newsletter */}
          <div>
            <h3 className="mb-5 text-sm font-bold tracking-wider">
              NEWSLETTER
            </h3>

            <p className="mb-5 text-sm leading-6 text-gray-400">
              Subscribe for exclusive travel deals and inspiration.
            </p>

            <form className="flex flex-col gap-3">
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full"
                required
              />

              <Button
                type="submit"
                className="w-full bg-blue-600 font-semibold text-white hover:bg-blue-700"
              >
                Subscribe
              </Button>
            </form>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-sm font-bold tracking-wider">
              QUICK LINKS
            </h3>

            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-blue-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="hover:text-blue-400">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/my-bookings" className="hover:text-blue-400">
                  My Bookings
                </Link>
              </li>
              <li>
                <Link href="/profile" className="hover:text-blue-400">
                  My Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-5 text-sm font-bold tracking-wider">SUPPORT</h3>

            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <Link href="/help-center" className="hover:text-blue-400">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-blue-400">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-blue-400">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-sm font-bold tracking-wider">
              CONTACT US
            </h3>

            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <a href="tel:78609011622" className="hover:text-blue-400">
                  7860 901 1622
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@wandarland.com"
                  className="break-all hover:text-blue-400"
                >
                  info@wandarland.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <Separator className="my-10 bg-gray-800" />

        {/* Bottom - Copyright and Social Media */}
        <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
          <p className="text-center text-sm text-gray-500">
            © 2026 Wanderlust. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/twitter.jpg"
                height={32}
                width={32}
                alt="Twitter"
                className="rounded-2xl transition hover:opacity-70"
              />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/facebook.jpg"
                height={32}
                width={32}
                alt="Facebook"
                className=" rounded-2xl transition hover:opacity-70"
              />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/instgram.jpg"
                height={32}
                width={32}
                alt="Instagram"
                className=" rounded-2xl transition hover:opacity-70"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
