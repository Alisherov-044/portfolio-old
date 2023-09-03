import { InputInterface } from "@/utils/types";

export function Input({
  id,
  register,
  type = "text",
  className,
  ...rest
}: InputInterface) {
  return (
    <input
      className={`input ${className}`}
      type={type}
      id={id}
      {...register}
      {...rest}
    />
  );
}
