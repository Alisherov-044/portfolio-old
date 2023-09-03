import { FormGroupInterface } from "@/utils/types";
import { Input, TextArea } from "..";

export function FormGroup({
  label,
  id,
  register,
  textarea = false,
  ...rest
}: FormGroupInterface) {
  return (
    <div className="form__group">
      <label htmlFor={id} className="form__label">
        {label}
      </label>
      {textarea ? (
        <TextArea id={id} register={register} {...rest} />
      ) : (
        <Input id={id} register={register} {...rest} />
      )}
    </div>
  );
}
