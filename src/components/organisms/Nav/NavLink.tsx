import { Link } from 'react-router-dom'

interface NavBarLinkProps {

  url: string;
  linkLabel: string;
}

export function NavLink( { url, linkLabel }:NavBarLinkProps ) {

  return (

    <Link
      className="font-medium border-b-2 border-transparent transition-colors hover:border-gray-100/60 focus:border-gray-100/60"
      to={url}
    >
      {linkLabel}
    </Link>
  )
}
