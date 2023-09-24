import { CoreLayoutProps } from "ra-core";
import { Sidebar } from "./Sidebar";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import { Appbar } from "./Appbar";

export const Layout = ({ children, title }: CoreLayoutProps) => {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Appbar title={title} />
      <div className="flex flex-row flex-grow">
        <Sidebar />
        <div className="flex flex-col grow px-8">{children}</div>
      </div>
    </div>
  );
};
