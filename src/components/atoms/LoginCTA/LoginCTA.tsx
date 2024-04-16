import { Link } from 'react-router-dom'

interface LoginCTAProps {

  label?: string
}

export function LoginCTA( { label='Login' }:LoginCTAProps ) {

  return (

    <div className="ml-auto">
      <Link
        className="
        inline-flex h-9 items-center justify-center rounded-md
        bg-gray-100/40 px-4 text-sm font-medium
        hover:bg-gray-100/60 focus:outline-none focus:ring-1 focus:ring-gray-100/50 dark:bg-gray-800/40 dark:hover:bg-gray-800/60 dark:focus:ring-gray-800/50"
        to="#"
      >
        {label}
      </Link>
    </div>
  )
}
