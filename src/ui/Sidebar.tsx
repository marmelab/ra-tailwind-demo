import { NavLink } from "react-router-dom";
import { CubeIcon, TagIcon } from "@heroicons/react/24/solid";
import { useRef, useState } from "react";
import clsx from "clsx";

export const Sidebar = () => {
	const isHovering = useRef(false);
	const [open, setOpen] = useState(false);

	const handleMouseLeave = () => {
		isHovering.current = false;
		setOpen(false);
	};

	const handleMouseEnter = () => {
		isHovering.current = true;

		setTimeout(() => {
			if (isHovering.current) {
				setOpen(true);
			}
		}, 300);
	};
	return (
		<ul
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			className={clsx("group menu gap-1 w-10 max-w-max transition-all", {
				"w-60": open,
			})}
		>
			<li>
				<NavLink to="/products" className="p-1 flex flex-row gap-1">
					<CubeIcon className="w-6 h-6" />
					<span className={open ? "block px-1" : "hidden"}>Products</span>
				</NavLink>
			</li>
			<li>
				<NavLink to="/categories" className="p-1 flex flex-row gap-1">
					<TagIcon className="w-6 h-6" />
					<span className={open ? "block px-1" : "hidden"}>Categories</span>
				</NavLink>
			</li>
		</ul>
	);
};
