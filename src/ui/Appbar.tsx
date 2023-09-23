import { TitleComponent } from "ra-core";
import { Link } from "react-router-dom";
import { ThemeSelector } from "./ThemeSelector";
import { UserMenu } from "./UserMenu";

export const Appbar = ({ title }: AppbarProps) => {
  return (
    <nav className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          {title}
        </Link>
      </div>
      <div className="flex grow-0 gap-4">
        <ThemeSelector />
        <UserMenu />
      </div>
    </nav>
  );
};

export interface AppbarProps {
  title?: TitleComponent;
}
