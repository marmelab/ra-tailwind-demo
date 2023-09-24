import { createColumnHelper } from "@tanstack/react-table";
import { ListContextProvider, useListController } from "ra-core";
import { Datagrid } from "../ui/Datagrid";
import { ReferenceManyCount } from "../ui/fields/ReferenceManyCount";
import { Link } from "react-router-dom";

type Category = {
	id: number;
	name: string;
	productCount: number;
};

const columnHelper = createColumnHelper<Category>();

const columns = [
  columnHelper.accessor("name", {
    header: () => "Name",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("productCount", {
    header: () => "Products",
    cell: (info) => {
      return (
        <ReferenceManyCount
          reference="products"
          resource="categories"
          record={info.row.original}
          target="category_id"
          source="id"
        />
      );
    },
    meta: {
      headerClassName: "w-24",
    },
  }),
  columnHelper.accessor((row) => row.id, {
    id: "actions",
    cell: (info) => (
      <Link className="btn btn-sm btn-ghost" to={info.getValue().toString()}>
        Edit
      </Link>
    ),
    enableSorting: false,
    header: () => <span />,
    meta: {
      headerClassName: "w-12",
    },
  }),
];

export const CategoryList = () => {
	const listContext = useListController<Category>({
    sort: { field: "name", order: "ASC" },
  });

	if (listContext.isLoading || !listContext.data) {
		return <div>Loading...</div>;
	}

	return (
		<ListContextProvider value={listContext}>
			<div className="text-sm breadcrumbs mb-4">
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>Categories</li>
				</ul>
			</div>
			<Datagrid columns={columns} />
		</ListContextProvider>
	);
};
