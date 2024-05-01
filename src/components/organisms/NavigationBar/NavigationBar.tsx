import { Logo } from "@/components/atoms/Icons/Logo";
import { Header } from "../Header";
import Nav from "../Nav";

export type linkListProps = {
  name: string
  url: string
}

interface NavigationBarProps extends linkListProps {
  links: [linkListProps];
  logoUrl?: string;
}

export function NavigationBar({ links }: NavigationBarProps) {
  return (
    <Header>
      <Logo />
      <Nav.Root>
        {links.map((item) => (
          <Nav.Link key={item.url} linkLabel={item.name} url={item.url} />
        ))}
      </Nav.Root>
    </Header>
  );
}
