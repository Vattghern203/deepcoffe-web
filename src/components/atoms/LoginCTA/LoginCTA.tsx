import { Link } from 'react-router-dom'


interface LoginCTAProps {

  label?: string
}

function LoginCTA( { label='Login' }:LoginCTAProps ) {

  return (

    <div className="ml-auto">
      <Link
        className="
          inline-flex h-9 items-center justify-center rounded-md
          px-4 text-sm font-medium
          hover:bg-gray-100/60 focus:outline-none focus:ring-1 focus:ring-gray-100/50 dark:hover:bg-gray-800/60 dark:focus:ring-gray-800/50 transition-colors
          bg-primary"
        to="#"
      >
        {label}
      </Link>
    </div>
  )
}

export default LoginCTA