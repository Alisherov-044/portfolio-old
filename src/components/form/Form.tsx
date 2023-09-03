import { FormInterface } from "@/utils/types";

export function Form({ children, onSubmit, ...rest }: FormInterface) {
  return (
    <form onSubmit={onSubmit} {...rest}>
      {children}
    </form>
  );
}
