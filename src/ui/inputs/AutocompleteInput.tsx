import clsx from "clsx";
import {
  ChoicesProps,
  InputProps,
  ValidationError,
  useChoices,
  useChoicesContext,
  useGetRecordRepresentation,
  useInput,
  useTranslate,
} from "ra-core";
import {
  Button,
  Item,
  Label,
  ListBox,
  Popover,
  ComboBox,
  Input,
  Text as AriaText,
} from "react-aria-components";

export const AutocompleteInput = (
  props: Omit<InputProps, "source"> &
    Partial<Pick<InputProps, "source">> &
    ChoicesProps & {
      disableValue?: string;
      translateChoice?: boolean;
    }
) => {
  const translate = useTranslate();
  const {
    allChoices,
    isLoading,
    error: fetchError,
    source,
    resource,
    isFromReference,
  } = useChoicesContext(props);
  const input = useInput({ ...props, source });

  const getRecordRepresentation = useGetRecordRepresentation(resource);
  const { getChoiceText, getChoiceValue, getDisableValue } = useChoices({
    optionText:
      props.optionText ??
      (isFromReference ? getRecordRepresentation : undefined),
    optionValue: props.optionValue ?? "id",
    disableValue: props.disableValue,
    translateChoice: props.translateChoice ?? !isFromReference,
  });

  return (
    <ComboBox
      className="form-control w-full"
      selectedKey={input.field.value}
      onSelectionChange={(selectedKey) => input.field.onChange(selectedKey)}
    >
      <Label className="label">
        <span className="label-text">
          {typeof props.label === "string"
            ? translate(props.label, { _: props.label })
            : props.label}
        </span>
      </Label>
      <div className="join w-full">
        <Input className="input input-bordered join-item grow" />
        <Button className="btn join-item">▼</Button>
      </div>
      <Popover isOpen>
        <ListBox className="menu menu-sm w-60 max-w-md bg-base-200 rounded">
          {allChoices.map((choice) => (
            <Item
              className={(state) =>
                clsx("px-1 py-2 rounded", {
                  "bg-neutral text-neutral-content [@media(hover:hover)]:bg-neutral [@media(hover:hover)]:text-neutral-content":
                    state.isSelected || state.isFocused,
                })
              }
              key={getChoiceValue(choice)}
              id={getChoiceValue(choice)}
              value={getChoiceValue(choice)}
            >
              {getChoiceText(choice)}
            </Item>
          ))}
        </ListBox>
      </Popover>
      {props.helperText != null ? (
        <AriaText className="label" slot="description">
          <span className="label-text-alt">
            {typeof props.helperText === "string"
              ? translate(props.helperText, { _: props.helperText })
              : props.helperText}
          </span>
        </AriaText>
      ) : null}
      {input.fieldState.invalid &&
      input.fieldState.isTouched &&
      input.fieldState.error?.message ? (
        <AriaText className="label text-error" slot="errorMessage">
          <span className="label-text-alt">
            <ValidationError error={input.fieldState.error.message} />
          </span>
        </AriaText>
      ) : null}
    </ComboBox>
  );
};
