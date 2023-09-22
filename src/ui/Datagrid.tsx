import { useMemo } from "react";
import { RaRecord, useListContext } from "ra-core";
import {
	ColumnDef,
	flexRender,
	getCoreRowModel,
	useReactTable,
} from "@tanstack/react-table";
import { Button } from "react-aria-components";

export const Datagrid = <RecordType extends RaRecord = RaRecord>({
	columns,
}: {
	columns: ColumnDef<RecordType, any>[];
}) => {
	const { data, page, perPage, setPage, setPerPage, total } =
		useListContext<RecordType>();

	const pagination = useMemo(
		() => ({
			pageIndex: page - 1,
			pageSize: perPage,
		}),
		[page, perPage]
	);

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		pageCount: Math.ceil(total / perPage),
		state: {
			pagination,
		},
		manualPagination: true,
	});

	return (
		<>
			<table className="table table-sm">
				<thead>
					{table.getHeaderGroups().map((headerGroup) => (
						<tr key={headerGroup.id}>
							{headerGroup.headers.map((header) => (
								<th key={header.id}>
									{header.isPlaceholder
										? null
										: flexRender(
												header.column.columnDef.header,
												header.getContext()
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
			<div className="flex items-center gap-2">
				<div className="join">
					<Button
						className="join-item btn btn-sm"
						onPress={() => setPage(1)}
						isDisabled={!table.getCanPreviousPage()}
					>
						{"<<"}
					</Button>
					<Button
						className="join-item btn btn-sm"
						onPress={() => setPage(page - 1)}
						isDisabled={!table.getCanPreviousPage()}
					>
						{"<"}
					</Button>
					<Button
						className="join-item btn btn-sm"
						onPress={() => setPage(page + 1)}
						isDisabled={!table.getCanNextPage()}
					>
						{">"}
					</Button>
					<Button
						className="join-item btn btn-sm"
						onPress={() => table.setPageIndex(table.getPageCount() - 1)}
						isDisabled={!table.getCanNextPage()}
					>
						{">>"}
					</Button>
				</div>
				<span className="flex items-center gap-1">
					<div>Page</div>
					<strong>
						{table.getState().pagination.pageIndex + 1} of{" "}
						{table.getPageCount()}
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
		</>
	);
};
