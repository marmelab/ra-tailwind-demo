import { useEffect } from "react";
import { CoreLayoutProps } from "ra-core";
import { themeChange } from "theme-change";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { Sidebar } from "./Sidebar";

export const Layout = ({ children, title }: CoreLayoutProps) => {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <div className="drawer lg:drawer-open min-h-screen">
      <input id="sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col flex-grow">
        <div className="w-full navbar bg-base-300 lg:hidden">
          <div className="flex-none">
            <label
              htmlFor="sidebar"
              aria-label="Open sidebar"
              className="btn btn-square btn-ghost"
            >
              <Bars3Icon className="inline-block w-6 h-6 stroke-current" />
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">{title}</div>
        </div>
        <div className="flex flex-col grow p-4">{children}</div>
      </div>
      <Sidebar />
    </div>
  );
};
