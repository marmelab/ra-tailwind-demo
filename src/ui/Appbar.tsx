import { TitleComponent, useGetIdentity, useLogout } from "ra-core";
import { Link } from "react-router-dom";

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

const UserMenu = () => {
  const { data: identity } = useGetIdentity();
  const logout = useLogout();

  return identity ? (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={identity.avatar} />
        </div>
      </label>
      <ul
        tabIndex={0}
        className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
      >
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li>
          <a>Settings</a>
        </li>
        <li>
          <button onClick={logout}>Logout</button>
        </li>
      </ul>
    </div>
  ) : null;
};

const ThemeSelector = () => (
    <select className="select select-sm" data-choose-theme>
      <option value="">Default</option>
      <option value="dark">Dark</option>
      <option value="cupcake">Cupcake</option>
      <option value="bumblebee">Bumblebee</option>
      <option value="emerald">Emerald</option>
      <option value="corporate">Corporate</option>
      <option value="synthwave">Synthwave</option>
      <option value="retro">Retro</option>
      <option value="cyberpunk">Cyberpunk</option>
      <option value="valentine">Valentine</option>
      <option value="halloween">Halloween</option>
      <option value="garden">Garden</option>
      <option value="forest">Forest</option>
      <option value="aqua">Aqua</option>
      <option value="lofi">Lofi</option>
      <option value="pastel">Pastel</option>
      <option value="fantasy">Fantasy</option>
      <option value="wireframe">Wireframe</option>
      <option value="black">Black</option>
      <option value="luxury">Luxury</option>
      <option value="dracula">Dracula</option>
      <option value="cmyk">Cmyk</option>
      <option value="autumn">Autumn</option>
      <option value="business">Business</option>
      <option value="acid">Acid</option>
      <option value="lemonade">Lemonade</option>
      <option value="night">Night</option>
      <option value="coffee">Coffee</option>
      <option value="winter">Winter</option>
    </select>
);
