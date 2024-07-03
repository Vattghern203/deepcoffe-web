/**
 * v0 by Vercel.
 * @see https://v0.dev/t/sKPaDhtD5w6
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import styles from './header.module.css'

import { Link } from "react-router-dom"
import { ModeToggle } from "@/components/mode-toggle"
import { Logo } from '@/components/atoms/Icons/Logo'
import classNames from 'classnames'

export default function Component() {
  return (
    <header className={classNames('sticky inset-x-0 top-4 z-50 transition-all', styles.header)}>
      <section className="px-4 md:px-6">
        <div className="flex h-14 items-center justify-between">
          <Link className="mr-6" to="/" aria-label='homepage'>
            <Logo className='stroke-primary hover:stroke-primary/50 focus-within:ring-primary/50 transition-colors' height={32} width={32} style={{
              aspectRatio: "32/32",
              objectFit: "cover",
              objectPosition: "center"
            }} />
          </Link>
          <nav className="flex-1">
            <ul  className="flex justify-center gap-6 items-center">
              <Link
                className="font-medium border-b-2 border-transparent transition-colors hover:border-accent-foreground/60 focus:border-accent-foreground/60"
                to="/"
                title='Homepage'
                aria-label='homepage'
              >
                Home
              </Link>
              <Link
                className="font-medium border-b-2 border-transparent transition-colors hover:border-accent-foreground/60 focus:border-accent-foreground/60"
                to="/news"
                title='Notícias'
                aria-label='notícias'
              >
                News
              </Link>
              <Link
                className="font-medium border-b-2 border-transparent transition-colors hover:border-accent-foreground/60 focus:border-accent-foreground/60"
                to="/dashboard"
                title='Dashboard'
                aria-label='dashboard'
              >
                Dashboard
              </Link>
              <Link
                className="font-medium border-b-2 border-transparent transition-colors hover:border-accent-foreground/60 focus:border-accent-foreground/60"
                to="/about"
                title='Sobre o site'
                aria-label='Sobre o site'
              >
                About
              </Link>
            </ul>
          </nav>
          <div className="ml-auto flex items-center justify-between gap-1">

            <ModeToggle />

            <Link
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-1 transition-colors focus:ring-primary/80"
              to="#"
              aria-label='Fazer Login'
              title='Login'
            >
              Login
            </Link>
          </div>
        </div>
      </section>
    </header>
  )
}

