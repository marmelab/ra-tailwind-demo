import { ListContextProvider, useListController } from "ra-core";
import { createColumnHelper } from "@tanstack/react-table";
import { Link } from "react-router-dom";

import { Datagrid } from "../ui/Datagrid";
import { ReferenceField } from "../ui/fields/ReferenceField";
import { SearchInput } from "../ui/inputs/SearchInput";
import { BadgeField } from "../ui/fields/BadgeField";

type Product = {
  id: number;
  reference: string;
  description: string;
  category_id: number;
  width: number;
  height: number;
  price: number;
  stock: number;
  thumbnail: string;
  image: string;
};

const columnHelper = createColumnHelper<Product>();

const columns = [
  columnHelper.accessor("reference", {
    header: () => "Reference",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("category_id", {
    header: () => "Category",
    cell: (info) => {
      return (
        <ReferenceField
          reference="categories"
          record={info.row.original}
          source="category_id"
        >
          <BadgeField source="name" />
        </ReferenceField>
      );
    },
  }),
  columnHelper.accessor("stock", {
    header: () => "Stock",
    cell: (info) => info.renderValue(),
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

export const ProductList = () => {
  const listContext = useListController<Product>({
    sort: { field: "reference", order: "ASC" },
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
          <li>Products</li>
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        <SearchInput />
        <Datagrid columns={columns} />
      </div>
    </ListContextProvider>
  );
};
