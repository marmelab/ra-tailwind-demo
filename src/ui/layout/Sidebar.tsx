import { NavLink } from "react-router-dom";
import { CubeIcon, HomeIcon, TagIcon } from "@heroicons/react/24/outline";

export const Sidebar = () => {
  return (
    <ul className="group menu gap-1">
      <li>
        <NavLink
          to="/"
          className="p-1 flex flex-row gap-1 tooltip tooltip-right"
          data-tip="Dashboard"
        >
          <HomeIcon className="w-6 h-6" />
          <span className="hidden">Dashboard</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/products"
          className="p-1 flex flex-row gap-1 tooltip tooltip-right"
          data-tip="Products"
        >
          <CubeIcon className="w-6 h-6" />
          <span className="hidden">Products</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/categories"
          className="p-1 flex flex-row gap-1 tooltip tooltip-right"
          data-tip="Categories"
        >
          <TagIcon className="w-6 h-6" />
          <span className="hidden">Categories</span>
        </NavLink>
      </li>
    </ul>
  );
};
