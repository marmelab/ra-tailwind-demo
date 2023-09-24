import { CoreAdminContext, CoreAdminUI, Resource } from "ra-core";
import "./App.css";
import { dataProvider } from "./dataProvider";
import { i18nProvider } from "./i18nProvider";
import { Layout } from "./ui/layout/Layout";
import { LoginPage } from "./ui/layout/LoginPage";
import products from "./products";
import categories from "./categories";
import authProvider from "./authProvider";
import { Dashboard } from "./Dashboard";

export const App = () => (
  <CoreAdminContext
    authProvider={authProvider}
    dataProvider={dataProvider}
    i18nProvider={i18nProvider}
  >
    <CoreAdminUI dashboard={Dashboard} layout={Layout} loginPage={LoginPage}>
      <Resource {...products} />
      <Resource {...categories} />
    </CoreAdminUI>
  </CoreAdminContext>
);
