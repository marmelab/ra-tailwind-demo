import { SearchField, Label, Input, Button } from "react-aria-components";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useListContext } from "ra-core";

export const SearchInput = () => {
	const { setFilters, filterValues } = useListContext();
	return (
		<SearchField
			className="join"
			defaultValue={filterValues.q ?? ""}
			onChange={(value) => setFilters({ q: value }, {})}
		>
			<Label className="hidden">Search</Label>
			<Input
				className="input input-sm input-bordered border-base-300 border-r-0 join-item appearance-none"
				placeholder="Search"
			/>
			<Button className="join-item border border-base-300 border-l-0 px-2">
				<XMarkIcon className="w-3 h-3" />
			</Button>
			<span className="join-item btn btn-sm btn-active">
				<MagnifyingGlassIcon className="w-6 h-6" />
			</span>
		</SearchField>
	);
};
