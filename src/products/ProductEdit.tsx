import { EditBase, Form, required, useEditContext } from "ra-core";
import { Button } from "react-aria-components";
import { Link } from "react-router-dom";
import { TextInput } from "../ui/inputs/TextInput";
import { ReferenceInput } from "../ui/inputs/ReferenceInput";
import { SelectInput } from "../ui/inputs/SelectInput";

export const ProductEdit = () => (
	<EditBase mutationMode="pessimistic">
		<ProductEditView />
	</EditBase>
);

const ProductEditView = () => {
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
						<Link to="/products">Products</Link>
					</li>
					<li>{context.record.reference}</li>
				</ul>
			</div>
			<Form>
				<div className="flex flex-col gap-4 w-full max-w-lg">
					<TextInput
						source="reference"
						label="Reference"
						validate={required()}
					/>
					<ReferenceInput source="category_id" reference="categories">
						<SelectInput label="Category" />
					</ReferenceInput>
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
