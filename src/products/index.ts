import { ResourceProps } from "ra-core";
import { ProductList } from "./ProductList";
import { ProductEdit } from "./ProductEdit";

const resource: ResourceProps = {
	name: "products",
	list: ProductList,
	edit: ProductEdit,
};

export default resource;