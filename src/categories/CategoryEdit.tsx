import { EditBase, Form, required, useEditContext } from "ra-core";
import { TextInput } from "../ui/inputs/TextInput";
import { Button } from "react-aria-components";
import { Link } from "react-router-dom";

export const CategoryEdit = () => (
	<EditBase mutationMode="pessimistic">
		<CategoryEditView />
	</EditBase>
);

const CategoryEditView = () => {
	const context = useEditContext();

	if (context.isLoading || !context.record) {
		return null;
	}

	return (
		<>
			<div className="text-sm breadcrumbs mb-4">
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/categories">Categories</Link>
					</li>
					<li>{context.record.name}</li>
				</ul>
			</div>
			<Form>
				<div className="flex flex-col gap-4 w-full max-w-lg">
					<TextInput source="name" label="Name" validate={required()} />
					<div className="flex flex-row gap-4">
						<Button className="btn btn-primary" type="submit">
							Save
						</Button>
					</div>
				</div>
			</Form>
		</>
	);
};
