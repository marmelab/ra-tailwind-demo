import { CoreAdminContext, CoreAdminUI, Resource } from "ra-core";
import { dataProvider } from "./dataProvider";
import { Layout } from "./ui/Layout";
import "./App.css";
import products from "./products";
import categories from "./categories";
import { i18nProvider } from "./i18nProvider";

export const App = () => (
	<CoreAdminContext dataProvider={dataProvider} i18nProvider={i18nProvider}>
		<CoreAdminUI layout={Layout}>
			<Resource {...products} />
			<Resource {...categories} />
		</CoreAdminUI>
	</CoreAdminContext>
);
