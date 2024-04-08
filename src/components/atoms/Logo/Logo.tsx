import { Link } from "react-router-dom";

interface LogoProps {

  logoSrc: string;
  logoAlt?: string;
}

export function Logo({
  logoSrc = "https://c4.wallpaperflare.com/wallpaper/950/884/848/anime-girls-icons-profile-hd-wallpaper-thumb.jpg",
  logoAlt = "Logo"
}: LogoProps) {

  return (

    <Link className="mr-6" to="/">
      <img
        alt={logoAlt}
        className="h-6 w-6 rounded-full"
        height="32"
        src={logoSrc}
        style={{
          aspectRatio: "32/32",
          objectFit: "cover",
        }}
        width="32"
      />
    </Link>
  )
}
