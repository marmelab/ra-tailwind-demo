import clsx from "clsx";
import { useCallback, useEffect, useState } from "react";
import {
  ComboBox,
  Button,
  Input,
  Item,
  ListBox,
  Popover,
  ItemProps,
} from "react-aria-components";

export const useTheme = (): [string, (theme: string) => void] => {
  const darkModePreference = window.matchMedia("(prefers-color-scheme: dark)");
  const [defaultTheme, setDefaultTheme] = useState(
    darkModePreference.matches ? "dark" : "light"
  );
  const [preferredTheme, setPreferredTheme] = useState<string>();

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => e.matches && setDefaultTheme("dark"));
    window
      .matchMedia("(prefers-color-scheme: light)")
      .addEventListener("change", (e) => e.matches && setDefaultTheme("light"));
  }, []);

  const setTheme = useCallback((newTheme: string) => {
    setPreferredTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  }, []);

  return [preferredTheme ?? defaultTheme, setTheme];
};

export const ThemeSelector = () => {
  const [theme, setTheme] = useTheme();

  return (
    <ComboBox
      aria-label="Theme Selector"
      menuTrigger="focus"
      className="form-control w-full"
      selectedKey={theme}
      onOpenChange={(isOpen) => {
        if (!isOpen) {
          document.documentElement.setAttribute("data-theme", theme);
        }
      }}
      onSelectionChange={(selectedKey) => {
        if (!selectedKey) return;
        const theme = selectedKey.toString();
        setTheme(theme);
        localStorage.setItem("theme", theme);
        document.documentElement.setAttribute("data-theme", theme);
      }}
    >
      <div className="join">
        <Input className="input input-sm input-bordered w-full join-item" />
        <Button className="btn btn-sm btn-square join-item">▼</Button>
      </div>
      <Popover>
        <ListBox className="block menu menu-vertical max-h-96 overflow-y-auto menu-sm w-60 max-w-md bg-base-200 rounded">
          {themes.map((themeName) => (
            <Item
              className={(state) =>
                clsx("px-1 py-1 rounded", {
                  "bg-neutral text-neutral-content [@media(hover:hover)]:bg-neutral [@media(hover:hover)]:text-neutral-content":
                    state.isSelected || state.isFocused,
                })
              }
              key={themeName}
              id={themeName}
              textValue={themeName}
            >
              {(state) => (
                <ThemeItem isFocused={state.isFocused} theme={themeName} />
              )}
            </Item>
          ))}
        </ListBox>
      </Popover>
    </ComboBox>
  );
};

const ThemeItem = (props: { isFocused: boolean; theme: string }) => {
  useEffect(() => {
    if (props.isFocused) {
      document.documentElement.setAttribute("data-theme", props.theme);
    }
  }, [props.isFocused, props.theme]);
  return (
    <div className="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent">
      <div
        data-theme={props.theme}
        className="bg-base-100 text-base-content w-full cursor-pointer font-sans"
      >
        <div className="grid grid-cols-5 grid-rows-3">
          <div className="bg-base-200 col-start-1 row-span-2 row-start-1"></div>{" "}
          <div className="bg-base-300 col-start-1 row-start-3"></div>{" "}
          <div className="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
            <div className="font-bold">{props.theme}</div>{" "}
            <div className="flex flex-wrap gap-1">
              <div className="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                <div className="text-primary-content text-sm font-bold">A</div>
              </div>{" "}
              <div className="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                <div className="text-secondary-content text-sm font-bold">
                  A
                </div>
              </div>{" "}
              <div className="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                <div className="text-accent-content text-sm font-bold">A</div>
              </div>{" "}
              <div className="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                <div className="text-neutral-content text-sm font-bold">A</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const themes = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
];
