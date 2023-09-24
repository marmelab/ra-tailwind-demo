import { InputProps, ValidationError, useInput, useTranslate } from "ra-core";
import clsx from "clsx";
import { TextField, Label, Input, Text } from "react-aria-components";

export const TextInput = (props: InputProps) => {
	const input = useInput(props);
	const translate = useTranslate();

	return (
		<TextField className="form-control w-full">
			<Label className="label">
				<span className="label-text">
					{typeof props.label === "string"
						? translate(props.label, { _: props.label })
						: props.label}
				</span>
			</Label>
			<Input
				type="text"
				className={clsx("input input-bordered w-full", {
					"input-error": input.fieldState.invalid && input.fieldState.isTouched,
				})}
				{...input.field}
			/>
			{props.helperText != null ? (
				<Text className="label" slot="description">
					<span className="label-text-alt">
						{typeof props.helperText === "string"
							? translate(props.helperText, { _: props.helperText })
							: props.helperText}
					</span>
				</Text>
			) : null}
			{input.fieldState.invalid &&
			input.fieldState.isTouched &&
			input.fieldState.error?.message ? (
				<Text className="label text-error" slot="errorMessage">
					<span className="label-text-alt">
                        <ValidationError error={input.fieldState.error.message} />
					</span>
				</Text>
			) : null}
		</TextField>
	);
};
