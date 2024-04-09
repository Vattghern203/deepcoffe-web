/**
 * v0 by Vercel.
 * @see https://v0.dev/t/sKPaDhtD5w6
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import './header.module.css'

import { Link } from "react-router-dom"

export default function Component() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <section className="px-4 md:px-6">
        <div className="flex h-14 items-center">
          <Link className="mr-6" to="#">
            <img
              alt="Logo"
              className="h-6 w-6 rounded-full"
              height="32"
              src="https://c4.wallpaperflare.com/wallpaper/950/884/848/anime-girls-icons-profile-hd-wallpaper-thumb.jpg"
              style={{
                aspectRatio: "32/32",
                objectFit: "cover",
              }}
              width="32"
            />
          </Link>
          <nav className="flex-1">
            <ul  className="flex justify-center gap-6">
              <Link
                className="font-medium border-b-2 border-transparent transition-colors hover:border-gray-100/60 focus:border-gray-100/60"
                to="/"
              >
                Home
              </Link>
              <Link
                className="font-medium border-b-2 border-transparent transition-colors hover:border-gray-100/60 focus:border-gray-100/60"
                to="/news"
              >
                News
              </Link>
              <Link
                className="font-medium border-b-2 border-transparent transition-colors hover:border-gray-100/60 focus:border-gray-100/60"
                to="#"
              >
                Dashboard
              </Link>
              <Link
                className="font-medium border-b-2 border-transparent transition-colors hover:border-gray-100/60 focus:border-gray-100/60"
                to="#"
              >
                About
              </Link>
            </ul>
          </nav>
          <div className="ml-auto">
            <Link
              className="inline-flex h-9 items-center justify-center rounded-md bg-gray-100/40 px-4 text-sm font-medium hover:bg-gray-100/60 focus:outline-none focus:ring-1 focus:ring-gray-100/50 dark:bg-gray-800/40 dark:hover:bg-gray-800/60 dark:focus:ring-gray-800/50"
              to="#"
            >
              Login
            </Link>
          </div>
        </div>
      </section>
    </header>
  )
}

