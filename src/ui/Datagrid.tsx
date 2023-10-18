import { useMemo } from "react";
import { RaRecord, useListContext } from "ra-core";
import {
  ColumnDef,
  SortingState,
  Table,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Button } from "react-aria-components";
import {
  BarsArrowDownIcon,
  BarsArrowUpIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

export const Datagrid = <RecordType extends RaRecord = RaRecord>({
  columns,
}: {
  columns: ColumnDef<RecordType, any>[];
}) => {
  const { data, page, perPage, setSort, sort, total } =
    useListContext<RecordType>();

  const pagination = useMemo(
    () => ({
      pageIndex: page - 1,
      pageSize: perPage,
    }),
    [page, perPage]
  );
  const sorting = useMemo<SortingState>(
    () => [
      {
        id: sort.field,
        desc: sort.order === "DESC",
      },
    ],
    [sort]
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    pageCount: Math.ceil(total / perPage),
    state: {
      pagination,
      sorting,
    },
    manualPagination: true,
    manualSorting: true,
  });

  return (
    <>
      <table className="table table-sm">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className={header.column.columnDef.meta?.headerClassName}
                >
                  {header.isPlaceholder ? null : header.column.getCanSort() ? (
                    <button
                      className="flex items-center gap-2 cursor-pointer select-none"
                      onClick={() => {
                        if (!header.column.getCanSort() || !header.column.id) {
                          return;
                        }
                        const order =
                          !header.column.getIsSorted() ||
                          header.column.getIsSorted() === "desc"
                            ? "ASC"
                            : "DESC";

                        setSort({
                          field: header.column.id,
                          order,
                        });
                      }}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {{
                        asc: <BarsArrowUpIcon className="h-6 w-6" />,
                        desc: <BarsArrowDownIcon className="h-6 w-6" />,
                      }[header.column.getIsSorted() as string] ?? null}
                    </button>
                  ) : (
                    flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination table={table} />
    </>
  );
};

const Pagination = ({ table }: { table: Table<any> }) => {
  const { page, setPage, setPerPage, total } = useListContext();
  return (
    <div className="flex items-center gap-2">
      <div className="join">
        <Button
          className="join-item btn btn-sm"
          onPress={() => setPage(1)}
          isDisabled={!table.getCanPreviousPage()}
        >
          <span className="sr-only">First page</span>
          <ChevronDoubleLeftIcon className="w-6 h-6" />
        </Button>
        <Button
          className="join-item btn btn-sm"
          onPress={() => setPage(page - 1)}
          isDisabled={!table.getCanPreviousPage()}
        >
          <span className="sr-only">Previous page</span>
          <ChevronLeftIcon className="w-6 h-6" />
        </Button>
        <Button
          className="join-item btn btn-sm"
          onPress={() => setPage(page + 1)}
          isDisabled={!table.getCanNextPage()}
        >
          <span className="sr-only">Next page</span>
          <ChevronRightIcon className="w-6 h-6" />
        </Button>
        <Button
          className="join-item btn btn-sm"
          onPress={() => setPage(table.getPageCount())}
          isDisabled={!table.getCanNextPage()}
        >
          <span className="sr-only">Last page</span>
          <ChevronDoubleRightIcon className="w-6 h-6" />
        </Button>
      </div>
      <span className="flex items-center gap-1">
        <div>Page</div>
        <strong>
          {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
        </strong>
      </span>
      <span className="flex items-center gap-1">
        | Go to page:
        <input
          className="input input-sm input-bordered w-24"
          type="number"
          defaultValue={table.getState().pagination.pageIndex + 1}
          onChange={(e) => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0;
            setPage(page);
          }}
        />
      </span>
      <select
        className="select select-sm"
        value={table.getState().pagination.pageSize}
        onChange={(e) => {
          setPerPage(Number(e.target.value));
        }}
      >
        {[10, 20, 30, 40, 50].map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            Show {pageSize}
          </option>
        ))}
      </select>
      <span>Total: {total}</span>
    </div>
  );
};
