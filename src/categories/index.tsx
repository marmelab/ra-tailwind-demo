import type { ResourceProps } from "ra-core";
import { CategoryList } from "./CategoryList";
import { CategoryEdit } from "./CategoryEdit";

const resource: ResourceProps = {
	name: "categories",
	list: CategoryList,
	edit: CategoryEdit,
};

export default resource;
