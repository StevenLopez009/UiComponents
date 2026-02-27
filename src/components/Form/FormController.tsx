import {
  Controller,
  useFormContext,
  type FieldValues,
  type Path,
} from "react-hook-form";

type BaseProps<TFieldValues extends FieldValues> = {
  name: Path<TFieldValues>;
  label?: React.ReactNode;
  required?: boolean;
  placeholder?: string;
  as?: React.ElementType;
};

type FormControllerProps<
  TFieldValues extends FieldValues,
  T extends React.ElementType,
> = BaseProps<TFieldValues> &
  Omit<React.ComponentPropsWithRef<T>, keyof BaseProps<TFieldValues>>;

const FormController = <
  TFieldValues extends FieldValues = FieldValues,
  T extends React.ElementType = "input",
>(
  props: FormControllerProps<TFieldValues, T>,
) => {
  const {
    name,
    label,
    required,
    placeholder,
    as: Component = "input",
    ...rest
  } = props;

  const {
    control,
    formState: { errors },
  } = useFormContext<TFieldValues>();

  const error = errors[name];

  return (
    <div style={{ marginBottom: "16px" }}>
      {label && (
        <label htmlFor={name as string}>
          {label} {required && <span style={{ color: "red" }}>*</span>}
        </label>
      )}

      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Component
            id={name as string}
            placeholder={placeholder}
            {...field}
            {...rest}
          />
        )}
      />

      {error && (
        <p style={{ color: "red", fontSize: "14px" }}>
          {error.message as string}
        </p>
      )}
    </div>
  );
};

export default FormController;
