import { TextAreaInterface } from "@/utils/types";

export function TextArea({
  id,
  register,
  className,
  rows = 10,
  cols = 30,
}: TextAreaInterface) {
  return (
    <textarea
      className={`textarea ${className}`}
      id={id}
      rows={rows}
      cols={cols}
      {...register}
    />
  );
}
