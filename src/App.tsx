import { CoreAdminContext, CoreAdminUI, Resource } from "ra-core";
import { dataProvider } from "./dataProvider";
import { i18nProvider } from "./i18nProvider";
import { Layout } from "./ui/Layout";
import "./App.css";
import products from "./products";
import categories from "./categories";
import authProvider from "./authProvider";
import { LoginPage } from "./ui/LoginPage";

export const App = () => (
  <CoreAdminContext
    authProvider={authProvider}
    dataProvider={dataProvider}
    i18nProvider={i18nProvider}
  >
    <CoreAdminUI layout={Layout} loginPage={LoginPage}>
      <Resource {...products} />
      <Resource {...categories} />
    </CoreAdminUI>
  </CoreAdminContext>
);
