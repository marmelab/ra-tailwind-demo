import { NavLink } from "react-router-dom";
import { CubeIcon, HomeIcon } from "@heroicons/react/24/outline";
import {
  ResourceDefinition,
  useGetResourceLabel,
  useResourceDefinitions,
} from "ra-core";
import { ThemeSelector } from "./ThemeSelector";
import { UserMenu } from "./UserMenu";

export const Sidebar = () => {
  const resources = useResourceDefinitions();

  return (
    <div className="drawer-side">
      <label
        htmlFor="sidebar"
        aria-label="Close sidebar"
        className="drawer-overlay"
      ></label>
      <div className="flex flex-col min-h-full bg-base-200 text-base-content p-4">
        <ul className="menu w-80 p-0 flex-grow">
          <li>
            <NavLink to="/">
              <HomeIcon className="inline-block w-6 h-6 stroke-current" />
              Dashboard
            </NavLink>
          </li>
          {Object.keys(resources).map((resource) => (
            <SidebarItem key={resource} definition={resources[resource]} />
          ))}
        </ul>

        <div className="flex flex-col gap-4">
          <ThemeSelector />
          <UserMenu />
        </div>
      </div>
    </div>
  );
};

const SidebarItem = ({ definition }: { definition: ResourceDefinition }) => {
  const getResourceLabel = useGetResourceLabel();
  const Icon = definition.icon || CubeIcon;
  return (
    <li>
      <NavLink to={`/${definition.name}`}>
        <Icon className="inline-block w-6 h-6 stroke-current" />
        {getResourceLabel(definition.name, 2)}
      </NavLink>
    </li>
  );
};
