import { CoreLayoutProps } from "ra-core";
import { Link } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { useEffect } from "react";
import { themeChange } from "theme-change";

export const Layout = ({ children, title }: CoreLayoutProps) => {
	useEffect(() => {
		themeChange(false);
	}, []);
	return (
		<div className="flex flex-col">
			<nav className="navbar bg-base-100">
				<div className="flex-1">
					<Link to="/" className="btn btn-ghost normal-case text-xl">
						{title}
					</Link>
				</div>
				<div className="flex-none">
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
				</div>
			</nav>
			<div className="flex flex-row flex-grow">
				<Sidebar />
				<div className="flex flex-col grow px-8">{children}</div>
			</div>
		</div>
	);
};
